/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as OpsProject from "./project.pb"
import * as OpsWorkflow from "./workflow.pb"
export type OpsRequest = {
  accountID?: string
  tenantID?: string
}

export type Ops = {
  stats?: Stats
  projects?: OpsProject[]
}

export type OpsProject = {
  project?: OpsProject.Project
  workflows?: OpsWorkflow.Workflow[]
  metrics?: ProjectMetrics
}

export type Stats = {
  totalProjects?: number
  totalWorkflows?: number
  totalTasks?: number
  lastResult?: WorkflowMetrics
}

export type ProjectMetrics = {
  totalWorkflows?: number
  totalTasks?: number
  lastResult?: WorkflowMetrics
}

export type WorkflowMetrics = {
  unknownResultWorkflows?: number
  successfulWorkflows?: number
  failedWorkflows?: number
}