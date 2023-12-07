/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"

export enum ProviderType {
  UNSPECIFIED = "UNSPECIFIED",
  CLOUD = "CLOUD",
  PROFESSIONAL_SERVICES = "PROFESSIONAL_SERVICES",
}

export type Provider = {
  serviceID?: string
  providerID?: string
  prefix?: string
  isCustomer?: boolean
  type?: ProviderType
  name?: string
  description?: string
  websiteURL?: string
  lastUpdated?: string
  supportChannels?: SupportChannels
  rating?: number
}

export type Providers = {
  meta?: ResourceList.ListResponse
  providers?: Provider[]
}

export type ListProvidersRequest = {
  meta?: ResourceList.ListRequest
  serviceID?: string
  providerType?: ProviderType
}

export type SupportChannels = {
  slack?: boolean
  slackChannel?: string
}