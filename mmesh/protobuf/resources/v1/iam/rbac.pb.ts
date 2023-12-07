/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TenantTenant from "../tenant/tenant.pb"
export type SecurityGroup = {
  accountID?: string
  securityGroupID?: string
  tenantIDs?: string[]
  users?: {[key: string]: boolean}
}

export type SecurityGroups = {
  meta?: ResourceList.ListResponse
  securityGroups?: SecurityGroup[]
}

export type ListSecurityGroupsRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}

export type Role = {
  accountID?: string
  roleID?: string
  permissions?: string[]
  users?: {[key: string]: boolean}
}

export type Roles = {
  meta?: ResourceList.ListResponse
  roles?: Role[]
}

export type ListRolesRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}

export type ACL = {
  accountID?: string
  ACLID?: string
  nodeIDs?: string[]
  users?: {[key: string]: boolean}
}

export type ACLs = {
  meta?: ResourceList.ListResponse
  ACLs?: ACL[]
}

export type ListACLsRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}

export type RBACRequest = {
  accountID?: string
}

export type RBAC = {
  accountID?: string
  stats?: Stats
  securityGroups?: RBACSecurityGroup[]
  roles?: RBACRole[]
  ACLs?: RBACACL[]
}

export type RBACSecurityGroup = {
  securityGroupID?: string
  tenants?: TenantTenant.Tenant[]
  userIDs?: string[]
}

export type RBACRole = {
  roleID?: string
  permissions?: string[]
  userIDs?: string[]
}

export type RBACACL = {
  ACLID?: string
  nodeIDs?: string[]
  userIDs?: string[]
}

export type Stats = {
  totalUsers?: number
  totalSecurityGroups?: number
  totalRoles?: number
  totalACLs?: number
}