import { User } from '#root/db/models';
import generateUUID from '#root/helpers/generateUUID';

const createUserResolver = async (context, { fbid }) => {
  const user = await User.findOne({
    attributes: {},
    where: { fbid: fbid },
  });

  return user || User.create({ id: generateUUID(), fbid });
};

export default createUserResolver;
