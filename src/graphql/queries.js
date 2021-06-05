/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        positiveReplies {
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
export const getPositiveReply = /* GraphQL */ `
  query GetPositiveReply($id: ID!) {
    getPositiveReply(id: $id) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const listPositiveReplys = /* GraphQL */ `
  query ListPositiveReplys(
    $filter: ModelPositiveReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositiveReplys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNegativeReply = /* GraphQL */ `
  query GetNegativeReply($id: ID!) {
    getNegativeReply(id: $id) {
      id
      userId
      text
      createdAt
      updatedAt
    }
  }
`;
export const listNegativeReplys = /* GraphQL */ `
  query ListNegativeReplys(
    $filter: ModelNegativeReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNegativeReplys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
