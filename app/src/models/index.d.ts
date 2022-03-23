import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Favorites {
  readonly id: string;
  readonly customerID: string;
  constructor(init: ModelInit<Favorites>);
  static copyOf(source: Favorites, mutator: (draft: MutableModel<Favorites>) => MutableModel<Favorites> | void): Favorites;
}

export declare class Reccomendation {
  readonly id: string;
  readonly customerID: string;
  constructor(init: ModelInit<Reccomendation>);
  static copyOf(source: Reccomendation, mutator: (draft: MutableModel<Reccomendation>) => MutableModel<Reccomendation> | void): Reccomendation;
}

export declare class BusinessOwner {
  readonly id: string;
  readonly email?: string;
  readonly firstName?: string;
  readonly phoneNumber?: string;
  readonly Businesses?: (Business | null)[];
  constructor(init: ModelInit<BusinessOwner>);
  static copyOf(source: BusinessOwner, mutator: (draft: MutableModel<BusinessOwner>) => MutableModel<BusinessOwner> | void): BusinessOwner;
}

export declare class Business {
  readonly id: string;
  readonly description?: string;
  readonly location?: string;
  readonly promotionStatus?: string;
  readonly Offerings?: (Offering | null)[];
  readonly businessownerID: string;
  readonly businessName?: string;
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

export declare class Customer {
  readonly id: string;
  readonly email?: string;
  readonly firstNam?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly zipCode?: number;
  readonly Reccomendations?: (Reccomendation | null)[];
  readonly Favorites?: (Favorites | null)[];
  readonly Reviews?: (Review | null)[];
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}