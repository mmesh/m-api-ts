/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as NstoreNstore from "../nstore.pb"

export enum HostMetricType {
  UNDEFINED = "UNDEFINED",
  NET_RX_BYTES = "NET_RX_BYTES",
  NET_TX_BYTES = "NET_TX_BYTES",
  HOST_LOAD_AVG = "HOST_LOAD_AVG",
  HOST_CPU_USAGE = "HOST_CPU_USAGE",
  HOST_MEM_USAGE = "HOST_MEM_USAGE",
  HOST_DISK_USAGE = "HOST_DISK_USAGE",
}

export type HostMetricDataPoint = {
  timestamp?: string
  timeRange?: NstoreNstore.TimeRange
  metric?: HostMetricType
  value?: number
}

export type HostMetricsRequest = {
  request?: NstoreNstore.DataRequest
  timeRange?: NstoreNstore.TimeRange
  metric?: HostMetricType
}

export type HostMetricsResponse = {
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