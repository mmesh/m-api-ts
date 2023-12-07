/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type MongoQuery = {
  accountID?: string
  dataSourceInstanceID?: string
  table?: string
  fields?: string[]
  filters?: MongoFilter[]
}

export type MongoQueryResult = {
  data?: Uint8Array
}

export type MongoFilter = {
  key?: string
  value?: string
}