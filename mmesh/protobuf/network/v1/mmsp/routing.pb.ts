/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as RoutingLsa from "../routing/lsa.pb"

export enum RoutingMsgType {
  UNDEFINED_ROUTING_MSG = "UNDEFINED_ROUTING_MSG",
  ROUTING_LSA = "ROUTING_LSA",
  ROUTING_STATUS = "ROUTING_STATUS",
}

export type RoutingPDU = {
  type?: RoutingMsgType
  LSA?: RoutingLsa.LSA
  status?: RoutingLsa.Status
}