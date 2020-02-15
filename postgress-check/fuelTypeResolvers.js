import { AuthenticationError, ForbiddenError, UserInputError, ApolloError  } from 'apollo-server-express';
import slugify from 'slugify-string';
import FuelType from '../models/fuelTypeModel';

export default {
  Query: {
    getFuelType: async (parent, { slug }, { currentUser }, info) => {
      const fuelType = await FuelType.findOne({ slug: slug}).exec();
      return fuelType;
    },
    getFuelTypes: async (parent, _ , { currentUser }, info) => {
      // check authorization
      const fuelTypes = await FuelType.find().exec();
      return fuelTypes;
    },
  },
  Mutation: {
    CreateFuelType: async (parent, { fuelType } , { currentUser }, info) => {
      if (!currentUser) {
        throw new AuthenticationError('You are not authenticated');
      } else if (currentUser.roleslug != 'super-admin') {
        throw new ForbiddenError("you don't have permission to create a Role");
      }
      
      // only super admin can create role
      const newFuelType = new FuelType({ type: fuelType.type, slug:slugify(fuelType.type), author: currentUser  });
      try {
        await newFuelType.save();
        return newFuelType;
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
};
