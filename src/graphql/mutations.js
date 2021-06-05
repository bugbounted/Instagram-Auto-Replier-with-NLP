/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPositiveReply = /* GraphQL */ `
  mutation CreatePositiveReply(
    $input: CreatePositiveReplyInput!
    $condition: ModelPositiveReplyConditionInput
  ) {
    createPositiveReply(input: $input, condition: $condition) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const updatePositiveReply = /* GraphQL */ `
  mutation UpdatePositiveReply(
    $input: UpdatePositiveReplyInput!
    $condition: ModelPositiveReplyConditionInput
  ) {
    updatePositiveReply(input: $input, condition: $condition) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const deletePositiveReply = /* GraphQL */ `
  mutation DeletePositiveReply(
    $input: DeletePositiveReplyInput!
    $condition: ModelPositiveReplyConditionInput
  ) {
    deletePositiveReply(input: $input, condition: $condition) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const createNegativeReply = /* GraphQL */ `
  mutation CreateNegativeReply(
    $input: CreateNegativeReplyInput!
    $condition: ModelNegativeReplyConditionInput
  ) {
    createNegativeReply(input: $input, condition: $condition) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateNegativeReply = /* GraphQL */ `
  mutation UpdateNegativeReply(
    $input: UpdateNegativeReplyInput!
    $condition: ModelNegativeReplyConditionInput
  ) {
    updateNegativeReply(input: $input, condition: $condition) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteNegativeReply = /* GraphQL */ `
  mutation DeleteNegativeReply(
    $input: DeleteNegativeReplyInput!
    $condition: ModelNegativeReplyConditionInput
  ) {
    deleteNegativeReply(input: $input, condition: $condition) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
