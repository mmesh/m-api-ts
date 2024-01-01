/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as DatetimeDatetime from "../../../common/v1/datetime/datetime.pb"
import * as StatusStatus from "../../../common/v1/status/status.pb"
import * as EventsMetric from "../events/metric.pb"
import * as ResourceList from "../resource/list.pb"
import * as TopologyNode from "../topology/node.pb"
import * as OpsProject from "./project.pb"

export enum WorkflowActionType {
  REVIEW = "REVIEW",
  APPROVE = "APPROVE",
}

export enum CommandResultStatus {
  EXECUTED = "EXECUTED",
  RUNNING = "RUNNING",
  FAILED = "FAILED",
}

export type Workflow = {
  accountID?: string
  tenantID?: string
  projectID?: string
  workflowID?: string
  token?: string
  name?: string
  description?: string
  enabled?: boolean
  reviewed?: boolean
  reviewers?: string[]
  reviewedBy?: {[key: string]: Validation}
  approved?: boolean
  approvers?: string[]
  approvedBy?: {[key: string]: Validation}
  triggers?: Triggers
  tasks?: Task[]
  notify?: Notify
  targets?: TopologyNode.NodeReq[]
  taskLogs?: TaskLog[]
  eventMetrics?: EventsMetric.EventMetrics
}

export type Workflows = {
  meta?: ResourceList.ListResponse
  workflows?: Workflow[]
}

export type ListWorkflowsRequest = {
  meta?: ResourceList.ListRequest
  project?: OpsProject.ProjectReq
}

export type Validation = {
  responsible?: Person
  validated?: boolean
  timestamp?: string
}

export type Triggers = {
  webhook?: boolean
  schedule?: Schedule
}

export type Schedule = {
  enabled?: boolean
  dateTime?: DatetimeDatetime.DateTime
  crontab?: string
}

export type Task = {
  name?: string
  description?: string
  command?: CommandExec
}

export type Notify = {
  email?: EmailNotification
  slack?: SlackNotification
}

export type EmailNotification = {
  recipients?: Person[]
}

export type SlackNotification = {
  recipients?: Person[]
}

export type Person = {
  email?: string
}

export type WorkflowAction = {
  type?: WorkflowActionType
  token?: string
  action?: boolean
  userEmail?: string
}

export type WorkflowReq = {
  accountID?: string
  tenantID?: string
  projectID?: string
  workflowID?: string
}

export type TaskLog = {
  accountID?: string
  tenantID?: string
  projectID?: string
  workflowID?: string
  taskLogID?: string
  taskName?: string
  taskDescription?: string
  nodeID?: string
  nodeName?: string
  status?: StatusStatus.StatusResponse
  result?: CommandResult
  stdoutStderr?: Uint8Array
}

export type TaskLogs = {
  meta?: ResourceList.ListResponse
  taskLogs?: TaskLog[]
}

export type ListTaskLogsRequest = {
  meta?: ResourceList.ListRequest
  workflow?: WorkflowReq
}

export type TaskLogReq = {
  accountID?: string
  tenantID?: string
  projectID?: string
  workflowID?: string
  taskLogID?: string
}

export type CommandExec = {
  cmd?: string
  args?: string[]
  UID?: number
  GID?: number
}

export type CommandResult = {
  status?: CommandResultStatus
  duration?: string
}