/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      userId
      postiveReplies {
        items {
          id
          userId
          replies
          createdAt
          updatedAt
        }
        nextToken
      }
      negativeReplies {
        items {
          id
          userId
          replies
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      userId
      postiveReplies {
        items {
          id
          userId
          replies
          createdAt
          updatedAt
        }
        nextToken
      }
      negativeReplies {
        items {
          id
          userId
          replies
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      userId
      postiveReplies {
        items {
          id
          userId
          replies
          createdAt
          updatedAt
        }
        nextToken
      }
      negativeReplies {
        items {
          id
          userId
          replies
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePositiveList = /* GraphQL */ `
  subscription OnCreatePositiveList {
    onCreatePositiveList {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePositiveList = /* GraphQL */ `
  subscription OnUpdatePositiveList {
    onUpdatePositiveList {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePositiveList = /* GraphQL */ `
  subscription OnDeletePositiveList {
    onDeletePositiveList {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNegativeList = /* GraphQL */ `
  subscription OnCreateNegativeList {
    onCreateNegativeList {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNegativeList = /* GraphQL */ `
  subscription OnUpdateNegativeList {
    onUpdateNegativeList {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNegativeList = /* GraphQL */ `
  subscription OnDeleteNegativeList {
    onDeleteNegativeList {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
