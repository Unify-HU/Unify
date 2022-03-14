// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Favorites, Reccomendation, BusinessOwner, Business, Offering, Review, Customer } = initSchema(schema);

export {
  Favorites,
  Reccomendation,
  BusinessOwner,
  Business,
  Offering,
  Review,
  Customer
};