/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecdbHsecdb from "../../../resources/v1/nstore/hsecdb/hsecdb.pb"
import * as MetricsdbMetricsdb from "../../../resources/v1/nstore/metricsdb/metricsdb.pb"
import * as NetdbCtlog from "../../../resources/v1/nstore/netdb/ctlog.pb"
import * as NetdbCtstate from "../../../resources/v1/nstore/netdb/ctstate.pb"
import * as NetdbNetflowTraffic from "../../../resources/v1/nstore/netdb/netflowTraffic.pb"
import * as TopologyNode from "../../../resources/v1/topology/node.pb"

export enum NodeMgmtMsgType {
  UNDEFINED_NODEMGMT_MSG = "UNDEFINED_NODEMGMT_MSG",
  NODE_INIT = "NODE_INIT",
  NODE_CONFIG = "NODE_CONFIG",
  NODE_HOST_METRICS_REQUEST = "NODE_HOST_METRICS_REQUEST",
  NODE_HOST_METRICS_RESPONSE = "NODE_HOST_METRICS_RESPONSE",
  NODE_NET_CONNTRACK_STATE_REQUEST = "NODE_NET_CONNTRACK_STATE_REQUEST",
  NODE_NET_CONNTRACK_STATE_RESPONSE = "NODE_NET_CONNTRACK_STATE_RESPONSE",
  NODE_NET_CONNTRACK_LOG_REQUEST = "NODE_NET_CONNTRACK_LOG_REQUEST",
  NODE_NET_CONNTRACK_LOG_RESPONSE = "NODE_NET_CONNTRACK_LOG_RESPONSE",
  NODE_NET_TRAFFIC_METRICS_REQUEST = "NODE_NET_TRAFFIC_METRICS_REQUEST",
  NODE_NET_TRAFFIC_METRICS_RESPONSE = "NODE_NET_TRAFFIC_METRICS_RESPONSE",
  NODE_HOST_SECURITY_REQUEST = "NODE_HOST_SECURITY_REQUEST",
  NODE_HOST_SECURITY_RESPONSE = "NODE_HOST_SECURITY_RESPONSE",
}

export enum NodeMgmtConfigActionType {
  CFG_UNDEFINED = "CFG_UNDEFINED",
  CFG_METADATA = "CFG_METADATA",
  CFG_NETWORKING = "CFG_NETWORKING",
  CFG_MANAGEMENT = "CFG_MANAGEMENT",
  CFG_MAINTENANCE = "CFG_MAINTENANCE",
}

export type NodeMgmtPDU = {
  type?: NodeMgmtMsgType
  nodeReq?: TopologyNode.NodeReq
  nodeConfig?: NodeMgmtConfig
  hostMetricsRequest?: MetricsdbMetricsdb.HostMetricsRequest
  hostMetricsResponse?: MetricsdbMetricsdb.HostMetricsResponse
  netCtStateRequest?: NetdbCtstate.ConntrackTableRequest
  netCtStateResponse?: NetdbCtstate.ConntrackTableResponse
  netCtLogRequest?: NetdbCtlog.ConntrackLogRequest
  netCtLogResponse?: NetdbCtlog.ConntrackLogResponse
  netTrafficMetricsRequest?: NetdbNetflowTraffic.TrafficMetricsRequest
  netTrafficMetricsResponse?: NetdbNetflowTraffic.TrafficMetricsResponse
  hsecReportRequest?: HsecdbHsecdb.HostSecurityReportRequest
  hsecReportResponse?: HsecdbHsecdb.HostSecurityReportResponse
}

export type NodeMgmtConfig = {
  type?: NodeMgmtConfigActionType
  cfg?: TopologyNode.NodeCfg
}