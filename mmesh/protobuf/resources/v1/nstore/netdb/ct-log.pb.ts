/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as NetdbConnection from "./connection.pb"
export type ConntrackLogEntry = {
  timestamp?: string
  connection?: NetdbConnection.Connection
  status?: NetdbConnection.ConnectionStatus
}

export type ConntrackLogResponse = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  ctLog?: ConntrackLogEntry[]
  timestamp?: string
}