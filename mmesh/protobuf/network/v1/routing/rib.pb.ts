/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as TopologySubnet from "../../../resources/v1/topology/subnet.pb"
import * as NacRouting from "../nac/routing.pb"

export enum RIBDataType {
  ROUTING_SCOPE = "ROUTING_SCOPE",
  ROUTER = "ROUTER",
  RELAY = "RELAY",
  ROUTING_TABLE = "ROUTING_TABLE",
  POLICY = "POLICY",
}

export enum AddressFamily {
  IP4 = "IP4",
  IP6 = "IP6",
}

export enum RouteType {
  CONNECTED = "CONNECTED",
  STATIC = "STATIC",
  DYNAMIC = "DYNAMIC",
}

export type RIBData = {
  type?: RIBDataType
  scope?: NacRouting.RoutingScope
  router?: NetHop
  relay?: NetHop
  routingTable?: {[key: string]: RoutingEntry}
  policy?: {[key: string]: TopologySubnet.Policy}
}

export type RoutingEntry = {
  subnetID?: string
  addressFamily?: AddressFamily
  type?: RouteType
  gw?: {[key: string]: NetHop}
  DNSName?: string
}

export type NetHop = {
  subnetID?: string
  P2PHostID?: string
  MAddrs?: string[]
  priority?: number
  connections?: number
  lastSeen?: string
}

export type RIB = {
  accountID?: string
  tenantID?: string
  netID?: string
  routingDomain?: NacRouting.RoutingDomain
  routers?: {[key: string]: NetHop}
  relays?: {[key: string]: NetHop}
  routingTable?: {[key: string]: RoutingEntry}
  policy?: {[key: string]: TopologySubnet.Policy}
}