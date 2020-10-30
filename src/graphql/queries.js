/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        postiveReplies {
          nextToken
        }
        negativeReplies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPositiveList1 = /* GraphQL */ `
  query GetPositiveList1($id: ID!) {
    getPositiveList1(id: $id) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const listPositiveList1s = /* GraphQL */ `
  query ListPositiveList1s(
    $filter: ModelPositiveList1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositiveList1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        replies
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNegativeList1 = /* GraphQL */ `
  query GetNegativeList1($id: ID!) {
    getNegativeList1(id: $id) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const listNegativeList1s = /* GraphQL */ `
  query ListNegativeList1s(
    $filter: ModelNegativeList1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNegativeList1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        replies
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
