/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as NstoreNstore from "../nstore.pb"
import * as NetdbConnection from "./connection.pb"
export type ConntrackEntry = {
  timestamp?: string
  connection?: NetdbConnection.Connection
  state?: NetdbConnection.ConnectionState
}

export type ConntrackTableRequest = {
  request?: NstoreNstore.DataRequest
}

export type ConntrackTableResponse = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  ctTable?: ConntrackEntry[]
  timestamp?: string
}