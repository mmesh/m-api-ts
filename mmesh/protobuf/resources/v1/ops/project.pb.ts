/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TenantTenant from "../tenant/tenant.pb"
export type NewProjectRequest = {
  accountID?: string
  tenantID?: string
  name?: string
  description?: string
  reviewRequired?: boolean
  approvalRequired?: boolean
}

export type Project = {
  accountID?: string
  tenantID?: string
  projectID?: string
  name?: string
  description?: string
  reviewRequired?: boolean
  approvalRequired?: boolean
}

export type Projects = {
  meta?: ResourceList.ListResponse
  projects?: Project[]
}

export type ListProjectsRequest = {
  meta?: ResourceList.ListRequest
  tenant?: TenantTenant.TenantReq
}

export type ProjectReq = {
  accountID?: string
  tenantID?: string
  projectID?: string
}