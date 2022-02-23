// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, Review, Favorites, Offering, Business, BusinessOwner } = initSchema(schema);

export {
  Customer,
  Review,
  Favorites,
  Offering,
  Business,
  BusinessOwner
};