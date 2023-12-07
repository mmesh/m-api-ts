/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as TopologySubnet from "../../../resources/v1/topology/subnet.pb"

export enum LSAType {
  UNDEFINED_LSA = "UNDEFINED_LSA",
  NODE_LSA = "NODE_LSA",
  ROUTING_SCOPE_LSA = "ROUTING_SCOPE_LSA",
  NETWORK_POLICY_LSA = "NETWORK_POLICY_LSA",
  ROUTER_LSA = "ROUTER_LSA",
}

export type Status = {
  disabled?: boolean
  deleted?: boolean
  overLimit?: boolean
}

export type LSA = {
  type?: LSAType
  nodeLSA?: NodeLSA
  routingScopeLSA?: RoutingScopeLSA
  networkPolicyLSA?: NetworkPolicyLSA
  routerLSA?: RouterLSA
}

export type NodeLSA = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  nodeID?: string
  networkCIDR?: string
  subnetCIDR?: string
  P2PHostID?: string
  MAddrs?: string[]
  externalIPv4?: string
  port?: number
  priority?: number
  isRelay?: boolean
  endpoints?: {[key: string]: IPAddr}
  exportedRoutes?: string[]
  connections?: number
}

export type IPAddr = {
  IPv4?: string
  IPv6?: string
}

export type RoutingScopeLSA = {
  accountID?: string
  tenantID?: string
  netID?: string
  routedSubnets?: boolean
}

export type NetworkPolicyLSA = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  policy?: TopologySubnet.Policy
}

export type RouterLSA = {
  locationID?: string
  routerID?: string
  P2PHostID?: string
  MAddrs?: string[]
  externalIPv4?: string
  port?: number
  priority?: number
  connections?: number
}