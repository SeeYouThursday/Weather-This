import User from '../models/User.js';
// import { AuthenticationError } from '../utils/auth.js';
import Auth from '../utils/auth.js';
import { useAuth0 } from '@auth0/auth0-react';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findOne({ user_id: context.user._id }).select(
          '-__v'
        );

        return data;
      } else {
        throw Auth.AuthenticationError('You need to be logged in');
      }
    },
    users: async (_, args) => {
      try {
        const data = await User.find({});
        console.log(data);
        !data ? false : data;
      } catch (err) {
        return false;
      }
    },
  },
  Mutation: {
    addUser: async (_, { email, user: user_id }, context) => {
      try {
        if (!context.user) {
          console.log('Error adding user');
        }
        const user = await User.create({ email, user_id });
        const token = await getAccessTokenSilently(options);
      } catch (err) {
        console.log(`Error Adding Signing Up ${err}`);
      }
    },
    // login: async (_, { email, password }, context) => {
    //   // Check to see if user exists in DB
    //   const user = findOne({ email });
    //   if (!user) {
    //     throw new AuthenticationError(
    //       'User not found. Do you have an account?'
    //     );
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials!');
    //   }
    // },
    saveCity: async (_, { city }, context) => {
      try {
        if (!context.user) {
          throw new AuthenticationError('User is not authenticated.');
        }
        const newCity = await User.findOneAndUpdate(
          { email: context.user.email },
          { $addToSet: { savedSearches: city } },
          { new: true, runValidators: true }
        );
      } catch (err) {
        // If user attempts to execute this mutation and isn't logged in, throw an error
        throw new Auth.AuthenticationError('User is not authenticated.', err);
      }
    },
  },
};

export default resolvers;

//Future Dev: Remove Cities
