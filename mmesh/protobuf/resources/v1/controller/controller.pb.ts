/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as AuthAuth from "../iam/auth/auth.pb"
import * as ResourceList from "../resource/list.pb"
export type Federation = {
  locationID?: string
  federationID?: string
  controllers?: {[key: string]: Controller}
  usage?: FederationUsage
  private?: boolean
  options?: PrivateFederationOptions
}

export type Federations = {
  meta?: ResourceList.ListResponse
  federations?: Federation[]
}

export type ListFederationsRequest = {
  meta?: ResourceList.ListRequest
  locationID?: string
}

export type FederationUsage = {
  lastUpdated?: string
  accounts?: number
  tenants?: number
  networks?: number
  subnets?: number
  nodes?: number
  endpoints?: number
  relays?: number
}

export type PrivateFederationOptions = {
  accountID?: string
}

export type FederationEndpoints = {
  federationID?: string
  controllers?: {[key: string]: Controller}
}

export type FederationSelected = {
  locationID?: string
  federationID?: string
  virtualHost?: string
  port?: number
}

export type Controller = {
  locationID?: string
  federationID?: string
  controllerID?: string
  authKey?: AuthAuth.AuthKey
  virtualHost?: string
  host?: string
  port?: number
  status?: Status
}

export type Controllers = {
  meta?: ResourceList.ListResponse
  controllers?: Controller[]
}

export type Status = {
  lastUpdated?: string
  connections?: number
}