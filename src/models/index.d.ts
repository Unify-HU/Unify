import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FavoritesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OfferingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessOwnerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Customer {
  readonly id: string;
  readonly email?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly zipCode?: string;
  readonly Reviews?: (Review | null)[];
  readonly Favorites?: (Favorites | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Review {
  readonly id: string;
  readonly starRating?: string;
  readonly comment?: string;
  readonly customerID: string;
  readonly offeringID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Review, ReviewMetaData>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review, ReviewMetaData>) => MutableModel<Review, ReviewMetaData> | void): Review;
}

export declare class Favorites {
  readonly id: string;
  readonly customerID: string;
  readonly offeringID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Favorites, FavoritesMetaData>);
  static copyOf(source: Favorites, mutator: (draft: MutableModel<Favorites, FavoritesMetaData>) => MutableModel<Favorites, FavoritesMetaData> | void): Favorites;
}

export declare class Offering {
  readonly id: string;
  readonly type?: string;
  readonly title?: string;
  readonly description?: string;
  readonly image?: string;
  readonly options?: string;
  readonly Reviews?: (Review | null)[];
  readonly Favorites?: (Favorites | null)[];
  readonly businessID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Offering, OfferingMetaData>);
  static copyOf(source: Offering, mutator: (draft: MutableModel<Offering, OfferingMetaData>) => MutableModel<Offering, OfferingMetaData> | void): Offering;
}

export declare class Business {
  readonly id: string;
  readonly businessName?: string;
  readonly description?: string;
  readonly promotionStatus?: string;
  readonly location?: string;
  readonly Offerings?: (Offering | null)[];
  readonly businessownerID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}

export declare class BusinessOwner {
  readonly id: string;
  readonly email?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly paymentInfo?: string;
  readonly Businesses?: (Business | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BusinessOwner, BusinessOwnerMetaData>);
  static copyOf(source: BusinessOwner, mutator: (draft: MutableModel<BusinessOwner, BusinessOwnerMetaData>) => MutableModel<BusinessOwner, BusinessOwnerMetaData> | void): BusinessOwner;
}