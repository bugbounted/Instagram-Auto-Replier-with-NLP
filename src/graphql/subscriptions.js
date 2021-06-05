/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      positiveReplies {
        items {
          id
          userId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      negativeReplies {
        items {
          id
          userId
          text
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
      name
      positiveReplies {
        items {
          id
          userId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      negativeReplies {
        items {
          id
          userId
          text
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
      name
      positiveReplies {
        items {
          id
          userId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      negativeReplies {
        items {
          id
          userId
          text
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
export const onCreatePositiveReply = /* GraphQL */ `
  subscription OnCreatePositiveReply {
    onCreatePositiveReply {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePositiveReply = /* GraphQL */ `
  subscription OnUpdatePositiveReply {
    onUpdatePositiveReply {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePositiveReply = /* GraphQL */ `
  subscription OnDeletePositiveReply {
    onDeletePositiveReply {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNegativeReply = /* GraphQL */ `
  subscription OnCreateNegativeReply {
    onCreateNegativeReply {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNegativeReply = /* GraphQL */ `
  subscription OnUpdateNegativeReply {
    onUpdateNegativeReply {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNegativeReply = /* GraphQL */ `
  subscription OnDeleteNegativeReply {
    onDeleteNegativeReply {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
