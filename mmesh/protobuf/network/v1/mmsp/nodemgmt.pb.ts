/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as TopologyNode from "../../../resources/v1/topology/node.pb"
import * as TssTss from "../../../resources/v1/tss/tss.pb"

export enum NodeMgmtMsgType {
  UNDEFINED_NODEMGMT_MSG = "UNDEFINED_NODEMGMT_MSG",
  NODE_INIT = "NODE_INIT",
  NODE_CONFIG = "NODE_CONFIG",
  NODE_METRICS_REQUEST = "NODE_METRICS_REQUEST",
  NODE_METRICS_RESPONSE = "NODE_METRICS_RESPONSE",
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
  nodeMetricsRequest?: TssTss.MetricsRequest
  nodeMetricsResponse?: TssTss.NodeMetrics
}

export type NodeMgmtConfig = {
  type?: NodeMgmtConfigActionType
  cfg?: TopologyNode.NodeCfg
}