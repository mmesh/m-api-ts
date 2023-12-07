/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as AuthAuth from "../../../resources/v1/iam/auth/auth.pb"
import * as TopologyNode from "../../../resources/v1/topology/node.pb"
import * as TopologyRouter from "../../../resources/v1/topology/router.pb"
import * as TopologySubnet from "../../../resources/v1/topology/subnet.pb"
import * as NacRouting from "./routing.pb"

export enum RouterAdmissionResult {
  ROUTER_UNAUTHORIZED = "ROUTER_UNAUTHORIZED",
  ROUTER_AUTHORIZED = "ROUTER_AUTHORIZED",
}

export enum NetworkAdmissionResult {
  UNAUTHORIZED = "UNAUTHORIZED",
  AUTHORIZED = "AUTHORIZED",
  SERVICE_DISABLED = "SERVICE_DISABLED",
}

export type RouterAdmissionRequest = {
  routerToken?: string
}

export type RouterAdmissionResponse = {
  result?: RouterAdmissionResult
  authKey?: AuthAuth.AuthKey
  router?: TopologyRouter.Router
}

export type RouterRegRequest = {
  router?: TopologyRouter.Router
}

export type RouterRegResponse = {
  locationID?: string
}

export type NetworkAdmissionRequest = {
  nodeToken?: string
  nodeHostID?: string
}

export type NetworkAdmissionResponse = {
  result?: NetworkAdmissionResult
  authKey?: AuthAuth.AuthKey
  node?: TopologyNode.Node
}

export type NodeRegRequest = {
  node?: TopologyNode.Node
}

export type NodeRegResponse = {
  routingDomain?: NacRouting.RoutingDomain
  networkPolicy?: TopologySubnet.Policy
}

export type EndpointRegRequest = {
  nodeReq?: TopologyNode.NodeReq
  netID?: string
  subnetID?: string
  endpoint?: TopologyNode.Endpoint
  priority?: number
}

export type EndpointRegResponse = {
  IPv4?: string
  IPv6?: string
}