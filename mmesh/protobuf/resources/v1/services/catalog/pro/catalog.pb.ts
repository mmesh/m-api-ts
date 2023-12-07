/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type ProductCatalog = {
  APIVersion?: string
  kind?: string
  enabled?: boolean
  serviceID?: string
  providerID?: string
  providerName?: string
  providerDescription?: string
  providerWebsiteURL?: string
  products?: ProductSpec[]
}

export type ProductSpec = {
  productID?: string
  stripeProductID?: string
  name?: string
  description?: string
  unitLabel?: string
  available?: boolean
  pricingModel?: string
  priceFixed?: number
  priceHourly?: number
  priceDaily?: number
  priceWeekly?: number
  priceMonthly?: number
  priceYearly?: number
  SLA?: string
  class?: string
  cloudCategory?: string
  cloudType?: string
  serviceCategory?: string
  serviceType?: string
  serviceScope?: string
  locations?: string[]
  langs?: string[]
  opMgrs?: string[]
  salesReps?: string[]
}