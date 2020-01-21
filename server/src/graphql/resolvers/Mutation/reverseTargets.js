import { Player } from '#root/db/models';

const reverseTargets = async (_, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const player = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });

  if (!player.admin) return false;

  let head = await Player.findOne({
    where: { gameId: gameId, alive: true, admin: false },
  });
  let last = head;
  let current = await Player.findByPk(head.dataValues.targetId);
  let previous = head;

  head = current;

  while (head.dataValues.targetId != last.dataValues.targetId) {
    head = await Player.findByPk(head.dataValues.targetId);
    await current.update({
      targetId: previous.dataValues.id,
    });
    previous = current;
    current = head;
  }

  await current.update({
    targetId: previous.dataValues.id,
  });

  return true;
};

export default reverseTargets;
