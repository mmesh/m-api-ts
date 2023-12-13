/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TopologyNode from "./node.pb"
export type RoutingAccessTokenPayload = {
  locationID?: string
  routerID?: string
  accessKey?: string
}

export type RouterTokenPayload = {
  routingAccessToken?: string
  managerEndpoint?: string
}

export type NewRouterRequest = {
  locationID?: string
  routerName?: string
  description?: string
}

export type Router = {
  locationID?: string
  routerID?: string
  routerToken?: string
  cfg?: RouterCfg
  agent?: RouterAgent
  lastSeen?: string
}

export type Routers = {
  meta?: ResourceList.ListResponse
  routers?: Router[]
}

export type ListRoutersRequest = {
  meta?: ResourceList.ListRequest
  locationID?: string
}

export type RouterCfg = {
  routerName?: string
  description?: string
  priority?: number
  maintenance?: TopologyNode.NodeMaintenance
}

export type RouterAgent = {
  P2PHostID?: string
  hostname?: string
  port?: number
  externalIPv4?: string
  MAddrs?: string[]
  devMode?: boolean
}

export type RouterReq = {
  locationID?: string
  routerID?: string
}

export type SetRouterCfgRequest = {
  routerReq?: RouterReq
  cfg?: RouterCfg
}

export type RouterInstance = {
  router?: Router
  config?: TopologyNode.NodeInstanceConfig
}