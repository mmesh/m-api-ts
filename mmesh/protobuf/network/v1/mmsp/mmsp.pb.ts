/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as MmspEvent from "./event.pb"
import * as MmspNodemgmt from "./nodemgmt.pb"
import * as MmspRouting from "./routing.pb"
import * as MmspSession from "./session.pb"
import * as MmspWorkflow from "./workflow.pb"

export enum PDUType {
  UNDEFINED = "UNDEFINED",
  SESSION = "SESSION",
  ROUTING = "ROUTING",
  NODEMGMT = "NODEMGMT",
  WORKFLOW = "WORKFLOW",
  EVENT = "EVENT",
}

export type Payload = {
  srcID?: string
  dstID?: string
  srcControllerID?: string
  dstControllerID?: string
  type?: PDUType
  sessionPDU?: MmspSession.SessionPDU
  routingPDU?: MmspRouting.RoutingPDU
  nodeMgmtPDU?: MmspNodemgmt.NodeMgmtPDU
  workflowPDU?: MmspWorkflow.WorkflowPDU
  eventPDU?: MmspEvent.EventPDU
}