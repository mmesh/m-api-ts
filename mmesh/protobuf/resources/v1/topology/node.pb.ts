/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as DatetimeDatetime from "../../../common/v1/datetime/datetime.pb"
import * as MetricsEvent from "../metrics/event.pb"
import * as MetricsNode from "../metrics/node.pb"
import * as ResourceList from "../resource/list.pb"
import * as TenantTenant from "../tenant/tenant.pb"
import * as TopologySubnet from "./subnet.pb"

export enum NodeType {
  GENERIC = "GENERIC",
  K8S_GATEWAY = "K8S_GATEWAY",
  K8S_POD = "K8S_POD",
}

export type NetworkAccessTokenPayload = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  nodeGroupID?: string
  accessKey?: string
}

export type NodeTokenPayload = {
  networkAccessToken?: string
  controllerEndpoint?: string
}

export type NewNodeRequest = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  nodeName?: string
  description?: string
  port?: number
  externalPort?: number
  type?: NodeType
  replicaSet?: boolean
  kubernetesAttrs?: KubernetesAttrs
}

export type UpdateNodeMetadataRequest = {
  nodeReq?: NodeReq
  nodeName?: string
  description?: string
}

export type UpdateNodeNetworkingRequest = {
  nodeReq?: NodeReq
  netID?: string
  subnetID?: string
  tags?: string[]
}

export type UpdateNodeManagementRequest = {
  nodeReq?: NodeReq
  disableOps?: boolean
  disableExec?: boolean
  disableTransfer?: boolean
  disablePortForwarding?: boolean
}

export type KubernetesAttrs = {
  namespace?: string
  name?: string
  image?: string
  persistentVolume?: boolean
}

export type Node = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  nodeGroupID?: string
  nodeHostID?: string
  nodeToken?: string
  cfg?: NodeCfg
  agent?: Agent
  endpoints?: {[key: string]: Endpoint}
  eventMetrics?: MetricsEvent.EventMetrics
  type?: NodeType
  replicaSet?: boolean
  kubernetesAttrs?: KubernetesAttrs
  lastSeen?: string
}

export type Nodes = {
  meta?: ResourceList.ListResponse
  nodes?: Node[]
}

export type ListNodesByTenantRequest = {
  meta?: ResourceList.ListRequest
  tenant?: TenantTenant.TenantReq
}

export type ListNodesBySubnetRequest = {
  meta?: ResourceList.ListRequest
  subnet?: TopologySubnet.SubnetReq
}

export type NodeCfg = {
  nodeName?: string
  description?: string
  netID?: string
  subnetID?: string
  tags?: string[]
  priority?: number
  disableRelay?: boolean
  disableNetworking?: boolean
  management?: NodeManagement
  maintenance?: NodeMaintenance
}

export type NodeManagement = {
  disableExec?: boolean
  disableTransfer?: boolean
  disablePortForwarding?: boolean
  disableOps?: boolean
}

export type NodeMaintenance = {
  autoUpdate?: boolean
  schedule?: DatetimeDatetime.DateTime
}

export type Agent = {
  P2PHostID?: string
  hostname?: string
  port?: number
  DNSPort?: number
  externalIPv4?: string
  externalPort?: number
  canRelay?: boolean
  MAddrs?: string[]
  routes?: Routes
  metrics?: AgentMetrics
  version?: string
  devMode?: boolean
}

export type Routes = {
  export?: string[]
  import?: string[]
}

export type AgentMetrics = {
  lastUpdated?: string
  hostMetrics?: MetricsNode.HostMetrics
}

export type Endpoint = {
  endpointID?: string
  IPv4?: string
  IPv6?: string
  DNSName?: string
  reqIPv4?: string
}

export type NodeReq = {
  accountID?: string
  tenantID?: string
  nodeID?: string
}

export type NodeGroupReq = {
  accountID?: string
  tenantID?: string
  nodeGroupID?: string
}

export type NodeTokenRequest = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  nodeGroupID?: string
}

export type EndpointRequest = {
  nodeReq?: NodeReq
  netID?: string
  subnetID?: string
  endpointID?: string
  IPv4?: string
}

export type NodeInstance = {
  node?: Node
  config?: NodeInstanceConfig
}

export type NodeInstanceConfig = {
  YAML?: string
}