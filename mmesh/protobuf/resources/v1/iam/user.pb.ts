/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EventsMetric from "../events/metric.pb"
import * as ResourceList from "../resource/list.pb"
export type UserTokenRequest = {
  accountID?: string
  userID?: string
  isAdmin?: boolean
  locationID?: string
}

export type AccessTokenPayload = {
  accountID?: string
  userID?: string
  accessKey?: string
  isAdmin?: boolean
}

export type UserTokenPayload = {
  accessToken?: string
  locationID?: string
}

export type User = {
  accountID?: string
  userID?: string
  email?: string
  userToken?: string
  status?: UserStatus
  RBAC?: UserRBAC
  stats?: UserStats
  eventMetrics?: EventsMetric.EventMetrics
}

export type Users = {
  meta?: ResourceList.ListResponse
  users?: User[]
}

export type ListUsersRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}

export type UserStatus = {
  enabled?: boolean
}

export type UserRBAC = {
  securityGroups?: string[]
  roles?: string[]
  ACLs?: string[]
}

export type UserStats = {
  securityIssues?: Metric
  activity?: {[key: string]: Metric}
  firstSeen?: string
  lastSeen?: string
  timespan?: string
  lastActivity?: string
}

export type Metric = {
  total?: number
  average?: number
}

export type NewUserRequest = {
  locationID?: string
  federationID?: string
  accountID?: string
  email?: string
  RBAC?: UserRBAC
}

export type UserReq = {
  accountID?: string
  userID?: string
}

export type SetUserPermissionsRequest = {
  accountID?: string
  userID?: string
  RBAC?: UserRBAC
}