import User from '../models/User.js';
// import { AuthenticationError } from '../utils/auth.js';
import Auth from '../utils/auth.js';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findById(context.user._id).select(
          '-__v -password'
        );

        return data;
      } else {
        throw Auth.AuthenticationError('You need to be logged in');
      }
    },
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      try {
        const user = await User.create({ email, password });
        const token = ''; //! Update when setting up Auth from Firebase
      } catch (err) {
        throw new AuthenticationError(`Error Adding Signing Up ${err}`);
      }
    },
    login: async (parent, { email, password }) => {
      // Check to see if user exists in DB
      const user = findOne({ email });
      if (!user) {
        throw new AuthenticationError(
          'User not found. Do you have an account?'
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials!');
      }
    },
  },
};

export default resolvers;
