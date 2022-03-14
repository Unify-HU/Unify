/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFavorites = /* GraphQL */ `
  query GetFavorites($id: ID!) {
    getFavorites(id: $id) {
      id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFavoritess = /* GraphQL */ `
  query ListFavoritess(
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoritess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFavorites = /* GraphQL */ `
  query SyncFavorites(
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFavorites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReccomendation = /* GraphQL */ `
  query GetReccomendation($id: ID!) {
    getReccomendation(id: $id) {
      id
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listReccomendations = /* GraphQL */ `
  query ListReccomendations(
    $filter: ModelReccomendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReccomendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReccomendations = /* GraphQL */ `
  query SyncReccomendations(
    $filter: ModelReccomendationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReccomendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBusinessOwner = /* GraphQL */ `
  query GetBusinessOwner($id: ID!) {
    getBusinessOwner(id: $id) {
      id
      email
      firstName
      phoneNumber
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Businesses {
        nextToken
        startedAt
      }
    }
  }
`;
export const listBusinessOwners = /* GraphQL */ `
  query ListBusinessOwners(
    $filter: ModelBusinessOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusinessOwners = /* GraphQL */ `
  query SyncBusinessOwners(
    $filter: ModelBusinessOwnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinessOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        firstName
        phoneNumber
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      description
      location
      promotionStatus
      businessownerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Offerings {
        nextToken
        startedAt
      }
    }
  }
`;
export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        location
        promotionStatus
        businessownerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        location
        promotionStatus
        businessownerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOffering = /* GraphQL */ `
  query GetOffering($id: ID!) {
    getOffering(id: $id) {
      id
      type
      title
      description
      image
      businessID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Reviews {
        nextToken
        startedAt
      }
    }
  }
`;
export const listOfferings = /* GraphQL */ `
  query ListOfferings(
    $filter: ModelOfferingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfferings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        description
        image
        businessID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOfferings = /* GraphQL */ `
  query SyncOfferings(
    $filter: ModelOfferingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOfferings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        title
        description
        image
        businessID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      rating
      comment
      customerID
      offeringID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        comment
        customerID
        offeringID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        rating
        comment
        customerID
        offeringID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      email
      firstNam
      lastName
      phoneNumber
      zipCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Favorites {
        nextToken
        startedAt
      }
      Reccomendations {
        nextToken
        startedAt
      }
      Reviews {
        nextToken
        startedAt
      }
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstNam
        lastName
        phoneNumber
        zipCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        firstNam
        lastName
        phoneNumber
        zipCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
