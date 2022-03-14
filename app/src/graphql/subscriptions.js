/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites {
    onCreateFavorites {
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
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites {
    onUpdateFavorites {
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
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites {
    onDeleteFavorites {
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
export const onCreateReccomendation = /* GraphQL */ `
  subscription OnCreateReccomendation {
    onCreateReccomendation {
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
export const onUpdateReccomendation = /* GraphQL */ `
  subscription OnUpdateReccomendation {
    onUpdateReccomendation {
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
export const onDeleteReccomendation = /* GraphQL */ `
  subscription OnDeleteReccomendation {
    onDeleteReccomendation {
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
export const onCreateBusinessOwner = /* GraphQL */ `
  subscription OnCreateBusinessOwner {
    onCreateBusinessOwner {
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
export const onUpdateBusinessOwner = /* GraphQL */ `
  subscription OnUpdateBusinessOwner {
    onUpdateBusinessOwner {
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
export const onDeleteBusinessOwner = /* GraphQL */ `
  subscription OnDeleteBusinessOwner {
    onDeleteBusinessOwner {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
export const onCreateOffering = /* GraphQL */ `
  subscription OnCreateOffering {
    onCreateOffering {
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
export const onUpdateOffering = /* GraphQL */ `
  subscription OnUpdateOffering {
    onUpdateOffering {
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
export const onDeleteOffering = /* GraphQL */ `
  subscription OnDeleteOffering {
    onDeleteOffering {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
