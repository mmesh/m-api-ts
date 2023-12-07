/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as OpsWorkflow from "../../../resources/v1/ops/workflow.pb"

export enum WorkflowMsgType {
  UNDEFINED_WORKFLOW_MSG = "UNDEFINED_WORKFLOW_MSG",
  WORKFLOW_EXPEDITE = "WORKFLOW_EXPEDITE",
  WORKFLOW_SCHEDULE = "WORKFLOW_SCHEDULE",
  WORKFLOW_RESPONSE = "WORKFLOW_RESPONSE",
}

export type WorkflowPDU = {
  type?: WorkflowMsgType
  workflow?: OpsWorkflow.Workflow
}