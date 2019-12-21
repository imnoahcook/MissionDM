import { Player } from '#root/db/models';
import { Game } from '#root/db/models';

const resolvers = {
  players: game => {
    return Restaurant.findAll({
      include: [
        {
          model: Game,
          where: { id: game.id },
        },
      ],
      order: [['name', 'ASC']],
    });
  },
};

export default resolvers;
