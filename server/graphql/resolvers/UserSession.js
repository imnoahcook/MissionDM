import { User } from '#root/db/models';

const UserSession = {
  user: async userSession => {
    return await User.findByPk(userSession.userId);
  },
};

export default UserSession;
