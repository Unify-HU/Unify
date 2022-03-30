// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tags = {
  "FOOD": "FOOD",
  "ENTERTAINMENT": "ENTERTAINMENT",
  "FASHION": "FASHION",
  "BOOKS": "BOOKS",
  "ART": "ART"
};

const { Business, Offering, Review, User } = initSchema(schema);

export {
  Business,
  Offering,
  Review,
  User,
  Tags
};