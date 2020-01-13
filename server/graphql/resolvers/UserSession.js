import { User, Player, Game } from '#root/db/models';

const UserSession = {
  user: async userSession => {
    return await User.findByPk(userSession.userId);
  },
  games: async userSession => {
    const players = await Player.findAll({
      where: { userId: userSession.userId },
    });
    const gameIds = players.map(player => player.gameId);

    return await Game.findAll({
      where: { id: gameIds },
    });
  },
};

export default UserSession;
