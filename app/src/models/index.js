// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tags = {
  "FOOD": "FOOD",
  "ENTERTAINMENT": "ENTERTAINMENT",
  "CLOTHING": "CLOTHING",
  "BOOKS": "BOOKS",
  "ART": "ART",
  "BEAUTY": "BEAUTY",
  "FINANCIAL": "FINANCIAL",
  "INFRASTRUCTURE": "INFRASTRUCTURE",
  "HEALTH": "HEALTH"
};

const { Business, Offering, Review, User } = initSchema(schema);

export {
  Business,
  Offering,
  Review,
  User,
  Tags
};