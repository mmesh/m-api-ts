/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TopologyNode from "./node.pb"
export type ProxyingAccessTokenPayload = {
  locationID?: string
  proxyID?: string
  accessKey?: string
}

export type ProxyTokenPayload = {
  routingAccessToken?: string
  managerEndpoint?: string
}

export type NewProxyRequest = {
  locationID?: string
  proxyName?: string
  description?: string
}

export type Proxy = {
  locationID?: string
  proxyID?: string
  proxyToken?: string
  cfg?: ProxyCfg
  agent?: ProxyAgent
  lastSeen?: string
}

export type Proxies = {
  meta?: ResourceList.ListResponse
  proxies?: Proxy[]
}

export type ListProxiesRequest = {
  meta?: ResourceList.ListRequest
  locationID?: string
}

export type ProxyCfg = {
  proxyName?: string
  description?: string
  priority?: number
  maintenance?: TopologyNode.NodeMaintenance
}

export type ProxyAgent = {
  P2PHostID?: string
  hostname?: string
  port?: number
  externalIPv4?: string
  MAddrs?: string[]
  devMode?: boolean
}

export type ProxyReq = {
  locationID?: string
  proxyID?: string
}

export type SetProxyCfgRequest = {
  proxyReq?: ProxyReq
  cfg?: ProxyCfg
}

export type ProxyInstance = {
  proxy?: Proxy
  config?: TopologyNode.NodeInstanceConfig
}