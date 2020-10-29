/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPositiveList = /* GraphQL */ `
  mutation CreatePositiveList(
    $input: CreatePositiveListInput!
    $condition: ModelPositiveListConditionInput
  ) {
    createPositiveList(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const updatePositiveList = /* GraphQL */ `
  mutation UpdatePositiveList(
    $input: UpdatePositiveListInput!
    $condition: ModelPositiveListConditionInput
  ) {
    updatePositiveList(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const deletePositiveList = /* GraphQL */ `
  mutation DeletePositiveList(
    $input: DeletePositiveListInput!
    $condition: ModelPositiveListConditionInput
  ) {
    deletePositiveList(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const createNegativeList = /* GraphQL */ `
  mutation CreateNegativeList(
    $input: CreateNegativeListInput!
    $condition: ModelNegativeListConditionInput
  ) {
    createNegativeList(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const updateNegativeList = /* GraphQL */ `
  mutation UpdateNegativeList(
    $input: UpdateNegativeListInput!
    $condition: ModelNegativeListConditionInput
  ) {
    updateNegativeList(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const deleteNegativeList = /* GraphQL */ `
  mutation DeleteNegativeList(
    $input: DeleteNegativeListInput!
    $condition: ModelNegativeListConditionInput
  ) {
    deleteNegativeList(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
