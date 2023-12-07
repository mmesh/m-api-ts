/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TenantTenant from "../tenant/tenant.pb"
export type NewNetworkRequest = {
  accountID?: string
  tenantID?: string
  description?: string
  networkCIDR?: string
  routedSubnets?: boolean
  locationID?: string
}

export type UpdateNetworkRequest = {
  accountID?: string
  tenantID?: string
  netID?: string
  description?: string
  routedSubnets?: boolean
}

export type Network = {
  accountID?: string
  tenantID?: string
  netID?: string
  description?: string
  networkCIDR?: string
  routedSubnets?: boolean
  locationID?: string
}

export type Networks = {
  meta?: ResourceList.ListResponse
  networks?: Network[]
}

export type ListNetworksRequest = {
  meta?: ResourceList.ListRequest
  tenant?: TenantTenant.TenantReq
}

export type NetworkReq = {
  accountID?: string
  tenantID?: string
  netID?: string
}