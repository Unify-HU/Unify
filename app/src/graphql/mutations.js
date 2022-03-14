/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFavorites = /* GraphQL */ `
  mutation CreateFavorites(
    $input: CreateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    createFavorites(input: $input, condition: $condition) {
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
export const updateFavorites = /* GraphQL */ `
  mutation UpdateFavorites(
    $input: UpdateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    updateFavorites(input: $input, condition: $condition) {
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
export const deleteFavorites = /* GraphQL */ `
  mutation DeleteFavorites(
    $input: DeleteFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    deleteFavorites(input: $input, condition: $condition) {
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
export const createReccomendation = /* GraphQL */ `
  mutation CreateReccomendation(
    $input: CreateReccomendationInput!
    $condition: ModelReccomendationConditionInput
  ) {
    createReccomendation(input: $input, condition: $condition) {
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
export const updateReccomendation = /* GraphQL */ `
  mutation UpdateReccomendation(
    $input: UpdateReccomendationInput!
    $condition: ModelReccomendationConditionInput
  ) {
    updateReccomendation(input: $input, condition: $condition) {
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
export const deleteReccomendation = /* GraphQL */ `
  mutation DeleteReccomendation(
    $input: DeleteReccomendationInput!
    $condition: ModelReccomendationConditionInput
  ) {
    deleteReccomendation(input: $input, condition: $condition) {
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
export const createBusinessOwner = /* GraphQL */ `
  mutation CreateBusinessOwner(
    $input: CreateBusinessOwnerInput!
    $condition: ModelBusinessOwnerConditionInput
  ) {
    createBusinessOwner(input: $input, condition: $condition) {
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
export const updateBusinessOwner = /* GraphQL */ `
  mutation UpdateBusinessOwner(
    $input: UpdateBusinessOwnerInput!
    $condition: ModelBusinessOwnerConditionInput
  ) {
    updateBusinessOwner(input: $input, condition: $condition) {
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
export const deleteBusinessOwner = /* GraphQL */ `
  mutation DeleteBusinessOwner(
    $input: DeleteBusinessOwnerInput!
    $condition: ModelBusinessOwnerConditionInput
  ) {
    deleteBusinessOwner(input: $input, condition: $condition) {
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
export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createOffering = /* GraphQL */ `
  mutation CreateOffering(
    $input: CreateOfferingInput!
    $condition: ModelOfferingConditionInput
  ) {
    createOffering(input: $input, condition: $condition) {
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
export const updateOffering = /* GraphQL */ `
  mutation UpdateOffering(
    $input: UpdateOfferingInput!
    $condition: ModelOfferingConditionInput
  ) {
    updateOffering(input: $input, condition: $condition) {
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
export const deleteOffering = /* GraphQL */ `
  mutation DeleteOffering(
    $input: DeleteOfferingInput!
    $condition: ModelOfferingConditionInput
  ) {
    deleteOffering(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
