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
export const createPositiveList1 = /* GraphQL */ `
  mutation CreatePositiveList1(
    $input: CreatePositiveList1Input!
    $condition: ModelPositiveList1ConditionInput
  ) {
    createPositiveList1(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const updatePositiveList1 = /* GraphQL */ `
  mutation UpdatePositiveList1(
    $input: UpdatePositiveList1Input!
    $condition: ModelPositiveList1ConditionInput
  ) {
    updatePositiveList1(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const deletePositiveList1 = /* GraphQL */ `
  mutation DeletePositiveList1(
    $input: DeletePositiveList1Input!
    $condition: ModelPositiveList1ConditionInput
  ) {
    deletePositiveList1(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const createNegativeList1 = /* GraphQL */ `
  mutation CreateNegativeList1(
    $input: CreateNegativeList1Input!
    $condition: ModelNegativeList1ConditionInput
  ) {
    createNegativeList1(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const updateNegativeList1 = /* GraphQL */ `
  mutation UpdateNegativeList1(
    $input: UpdateNegativeList1Input!
    $condition: ModelNegativeList1ConditionInput
  ) {
    updateNegativeList1(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const deleteNegativeList1 = /* GraphQL */ `
  mutation DeleteNegativeList1(
    $input: DeleteNegativeList1Input!
    $condition: ModelNegativeList1ConditionInput
  ) {
    deleteNegativeList1(input: $input, condition: $condition) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
