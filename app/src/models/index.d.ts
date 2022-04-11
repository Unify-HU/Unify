import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Tags {
  FOOD = "FOOD",
  ENTERTAINMENT = "ENTERTAINMENT",
  CLOTHING = "CLOTHING",
  BOOKS = "BOOKS",
  ART = "ART",
  BEAUTY = "BEAUTY",
  FINANCIAL = "FINANCIAL",
  INFRASTRUCTURE = "INFRASTRUCTURE",
  HEALTH = "HEALTH"
}



export declare class Business {
  readonly id: string;
  readonly description?: string;
  readonly website?: string;
  readonly location?: string;
  readonly Offerings?: (Offering | null)[];
  readonly businessName?: string;
  readonly businessTags?: Tags | keyof typeof Tags;
  readonly UserID: string;
  readonly businessPic?: string;
  constructor(init: ModelInit<Business>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}

export declare class Offering {
  readonly id: string;
  readonly type?: string;
  readonly title?: string;
  readonly description?: string;
  readonly image?: string;
  readonly businessID: string;
  readonly Reviews?: (Review | null)[];
  constructor(init: ModelInit<Offering>);
  static copyOf(source: Offering, mutator: (draft: MutableModel<Offering>) => MutableModel<Offering> | void): Offering;
}

export declare class Review {
  readonly id: string;
  readonly rating?: number;
  readonly comment?: string;
  readonly customerID: string;
  readonly offeringID: string;
  constructor(init: ModelInit<Review>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

export declare class User {
  readonly id: string;
  readonly email?: string;
  readonly firstNam?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly zipCode?: number;
  readonly Reviews?: (Review | null)[];
  readonly isBusinessOwner?: boolean;
  readonly Businesses?: (Business | null)[];
  readonly profilePic?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}