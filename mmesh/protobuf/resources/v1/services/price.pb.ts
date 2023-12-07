/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum PriceType {
  ONE_TIME = "ONE_TIME",
  RECURRING = "RECURRING",
}

export enum Interval {
  UNDEFINED = "UNDEFINED",
  HOURLY = "HOURLY",
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export type Price = {
  serviceID?: string
  pricingPlanID?: string
  resourceUnitID?: string
  providerID?: string
  productID?: string
  priceID?: string
  stripeProductID?: string
  stripePriceID?: string
  description?: string
  currency?: string
  unitAmount?: string
  unitAmountDecimal?: number
  type?: PriceType
  recurrence?: Interval
  creationDate?: string
  lastModified?: string
}