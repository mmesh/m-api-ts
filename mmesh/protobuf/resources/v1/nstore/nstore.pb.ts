/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum TimeRange {
  TTL_UNDEFINED = "TTL_UNDEFINED",
  TTL_1H = "TTL_1H",
  TTL_6H = "TTL_6H",
  TTL_12H = "TTL_12H",
  TTL_24H = "TTL_24H",
  TTL_7D = "TTL_7D",
  TTL_14D = "TTL_14D",
  TTL_30D = "TTL_30D",
  TTL_365D = "TTL_365D",
}

export type DataRequest = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  controllerID?: string
  queryID?: string
}