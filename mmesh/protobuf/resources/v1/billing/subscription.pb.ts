/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum SubscriptionStatus {
  TRIALING = "TRIALING",
  ACTIVE = "ACTIVE",
  INCOMPLETE = "INCOMPLETE",
  INCOMPLETE_EXPIRED = "INCOMPLETE_EXPIRED",
  PAST_DUE = "PAST_DUE",
  CANCELED = "CANCELED",
  UNPAID = "UNPAID",
  UNKNOWN = "UNKNOWN",
  NONE = "NONE",
}

export type Subscription = {
  accountID?: string
  serviceID?: string
  serviceProviderID?: string
  stripeCustomerID?: string
  stripeCustomerEmail?: string
  stripeSubscriptionID?: string
  defaultStripePaymentMethodID?: string
  automaticTax?: boolean
  discount?: Discount
  creationDate?: string
  lastModified?: string
  startDate?: string
  endDate?: string
  trialStartDate?: string
  trialEndDate?: string
  cancelAtPeriodEnd?: boolean
  cancelationDate?: string
  currentPeriodStart?: string
  currentPeriodEnd?: string
  latestStripeInvoiceID?: string
  latestStripeHostedInvoiceURL?: string
  latestStripeInvoicePaymentIntentStatus?: string
  status?: SubscriptionStatus
  items?: SubscriptionItem[]
}

export type Discount = {
  stripeCouponID?: string
  percentOff?: string
  duration?: string
  start?: string
  end?: string
}

export type SubscriptionItem = {
  itemID?: string
  priceID?: string
  quantity?: string
}