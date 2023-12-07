/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as TopologyNetwork from "./network.pb"
import * as TopologyNode from "./node.pb"
import * as TopologySubnet from "./subnet.pb"
export type TopologyRequest = {
  accountID?: string
  tenantID?: string
}

export type Topology = {
  stats?: Stats
  networks?: TopologyNetwork[]
}

export type TopologyNetwork = {
  network?: TopologyNetwork.Network
  subnets?: TopologySubnet[]
  metrics?: Metrics
}

export type TopologySubnet = {
  subnet?: TopologySubnet.Subnet
  nodes?: TopologyNode[]
  metrics?: Metrics
}

export type TopologyNode = {
  node?: TopologyNode.Node
  endpoints?: TopologyNode.Endpoint[]
  online?: boolean
  alerts?: AlertMetrics
}

export type Stats = {
  totalNetworks?: number
  totalSubnets?: number
  totalNodes?: number
  totalEndpoints?: number
  metrics?: Metrics
}

export type Metrics = {
  linkStatus?: LinkStatus
  hosts?: HostStats
  alerts?: AlertMetrics
}

export type LinkStatus = {
  totalNodes?: number
  onlineNodes?: number
  offlineNodes?: number
}

export type HostStats = {
  totalLinux?: number
  totalMac?: number
  totalWindows?: number
}

export type AlertMetrics = {
  totalAlerts?: number
  totalTriggered?: number
  totalResolved?: number
  totalInfo?: number
  totalWarning?: number
  totalError?: number
  totalCritical?: number
}

export type NodeSummary = {
  accountID?: string
  tenantID?: string
  tenantName?: string
  tenantDescription?: string
  netID?: string
  networkDescription?: string
  networkCIDR?: string
  networkLocationID?: string
  subnetID?: string
  subnetDescription?: string
  subnetCIDR?: string
  nodeID?: string
  nodeName?: string
  nodeDescription?: string
  nodeCanRelay?: boolean
  nodeKubernetesGw?: boolean
  nodeOffline?: boolean
}

export type NodeSummaryMap = {
  nodes?: {[key: string]: NodeSummary}
}