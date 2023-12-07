/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
export type TenantListRequest = {
  accountID?: string
}

export type TenantList = {
  tenants?: Tenant[]
}

export type NewTenantRequest = {
  accountID?: string
  name?: string
  description?: string
}

export type UpdateTenantRequest = {
  accountID?: string
  tenantID?: string
  name?: string
  description?: string
}

export type Tenant = {
  accountID?: string
  tenantID?: string
  name?: string
  description?: string
}

export type Tenants = {
  meta?: ResourceList.ListResponse
  tenants?: Tenant[]
}

export type ListTenantsRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}

export type TenantReq = {
  accountID?: string
  tenantID?: string
}