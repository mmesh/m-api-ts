/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as ServicesPrice from "./price.pb"
export type PricingPlan = {
  serviceID?: string
  pricingPlanID?: string
  description?: string
  unitLabel?: string
  stripeProductID?: string
  prices?: {[key: string]: ServicesPrice.Price}
  resources?: Resources
  networkLimits?: NetworkLimits
  included3rdPartyServices?: boolean
  creationDate?: string
  lastModified?: string
}

export type PricingPlans = {
  meta?: ResourceList.ListResponse
  pricingPlans?: PricingPlan[]
}

export type ListPricingPlansRequest = {
  meta?: ResourceList.ListRequest
  serviceID?: string
}

export type Resources = {
  discount?: string
  user?: Unit
  tenant?: Unit
  network?: Unit
  subnet?: Unit
  node?: Unit
}

export type Unit = {
  includedUnits?: string
}

export type NetworkLimits = {
  maxGiB?: ItemLimit
  maxTenants?: ItemLimit
  maxNetworks?: ItemLimit
  maxSubnets?: ItemLimit
  maxNodes?: ItemLimit
}

export type ItemLimit = {
  limit?: string
  enforceRestriction?: boolean
}