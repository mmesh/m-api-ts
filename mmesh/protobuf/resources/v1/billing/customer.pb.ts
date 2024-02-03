/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type CustomerPortalRequest = {
  accountID?: string
  customerID?: string
}

export type CustomerPortalResponse = {
  URL?: string
}

export type Customer = {
  accountID?: string
  stripeCustomerID?: string
  email?: string
  name?: string
  phone?: string
  address?: Address
  description?: string
  stripeDefaultPaymentMethod?: PaymentMethod
  tax?: CustomerTax
  currency?: string
  balance?: string
  delinquent?: boolean
  liveMode?: boolean
  stripeTestClockID?: string
  creationDate?: string
  lastModified?: string
}

export type Address = {
  line1?: string
  line2?: string
  postalCode?: string
  city?: string
  state?: string
  country?: string
}

export type CustomerTax = {
  automaticTax?: string
  IPAddress?: string
  location?: TaxLocation
}

export type TaxLocation = {
  Source?: string
  Country?: string
  State?: string
}

export type PaymentMethod = {
  ID?: string
  type?: string
  status?: string
  usage?: string
  card?: Card
  creationDate?: string
}

export type Card = {
  brand?: string
  funding?: string
  country?: string
  last4?: string
  expMonth?: number
  expYear?: number
  cvcCheck?: string
  fingerprint?: string
  threeDsecure?: string
}