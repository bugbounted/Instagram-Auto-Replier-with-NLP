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
export const getPositiveList = /* GraphQL */ `
  query GetPositiveList($id: ID!) {
    getPositiveList(id: $id) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const listPositiveLists = /* GraphQL */ `
  query ListPositiveLists(
    $filter: ModelPositiveListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositiveLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const getNegativeList = /* GraphQL */ `
  query GetNegativeList($id: ID!) {
    getNegativeList(id: $id) {
      id
      userId
      replies
      createdAt
      updatedAt
    }
  }
`;
export const listNegativeLists = /* GraphQL */ `
  query ListNegativeLists(
    $filter: ModelNegativeListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNegativeLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
