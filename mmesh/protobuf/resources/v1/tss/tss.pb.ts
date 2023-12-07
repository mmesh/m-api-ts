/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum TimeRange {
  TTL_UNDEFINED = "TTL_UNDEFINED",
  TTL_1H = "TTL_1H",
  TTL_6H = "TTL_6H",
  TTL_12H = "TTL_12H",
  TTL_24H = "TTL_24H",
  TTL_7D = "TTL_7D",
  TTL_14D = "TTL_14D",
  TTL_30D = "TTL_30D",
  TTL_365D = "TTL_365D",
}

export enum MetricType {
  UNDEFINED = "UNDEFINED",
  NET_RX_BYTES = "NET_RX_BYTES",
  NET_TX_BYTES = "NET_TX_BYTES",
  HOST_LOAD_AVG = "HOST_LOAD_AVG",
  HOST_CPU_USAGE = "HOST_CPU_USAGE",
  HOST_MEM_USAGE = "HOST_MEM_USAGE",
  HOST_DISK_USAGE = "HOST_DISK_USAGE",
}

export type DataPoint = {
  timestamp?: string
  timeRange?: TimeRange
  metric?: MetricType
  value?: number
}

export type MetricsRequest = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  controllerID?: string
  queryID?: string
}

export type NodeMetrics = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  metrics?: {[key: string]: HostMetrics}
  timestamp?: string
}

export type HostMetrics = {
  loadAvg?: TimeValue[]
  cpuUsage?: TimeValue[]
  memUsage?: TimeValue[]
  diskUsage?: TimeValue[]
  netUsage?: NetMetrics
}

export type NetMetrics = {
  netRxBytes?: TimeValue[]
  netTxBytes?: TimeValue[]
}

export type TimeValue = {
  timestamp?: string
  value?: number
}