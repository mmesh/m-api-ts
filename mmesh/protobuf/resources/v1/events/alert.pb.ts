/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TenantTenant from "../tenant/tenant.pb"
import * as EventsEvent from "./event.pb"
export type AlertListRequest = {
  accountID?: string
  tenantID?: string
}

export type AlertList = {
  alerts?: Alert[]
}

export type Alert = {
  accountID?: string
  tenantID?: string
  alertID?: string
  timestamp?: string
  nodeID?: string
  nodeName?: string
  class?: EventsEvent.Class
  group?: EventsEvent.Group
  component?: string
  severity?: EventsEvent.Severity
  status?: EventsEvent.Status
  summary?: string
  customDetails?: {[key: string]: string}
  comments?: AlertComment[]
  lastUpdated?: string
}

export type Alerts = {
  meta?: ResourceList.ListResponse
  alerts?: Alert[]
}

export type ListAlertsRequest = {
  meta?: ResourceList.ListRequest
  tenant?: TenantTenant.TenantReq
}

export type AlertComment = {
  timestamp?: string
  userID?: string
  userEmail?: string
  text?: string
}

export type AlertReq = {
  accountID?: string
  tenantID?: string
  alertID?: string
  nodeID?: string
}

export type AlertNewCommentRequest = {
  accountID?: string
  tenantID?: string
  alertID?: string
  comment?: AlertComment
}