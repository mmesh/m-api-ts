/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"

export enum ItemClass {
  RESOURCE_UNIT = "RESOURCE_UNIT",
  IAAS = "IAAS",
}

export type InvoiceItem = {
  accountID?: string
  stripeCustomerID?: string
  period?: string
  serviceID?: string
  providerID?: string
  stripeSubscriptionID?: string
  stripeInvoiceID?: string
  stripeProductID?: string
  itemID?: string
  productID?: string
  productName?: string
  shortDescription?: string
  longDescription?: string
  category?: string
  amount?: string
  currency?: string
  unitPrice?: string
  discount?: string
  priceWithDiscount?: string
  creationDate?: string
  cancelationDate?: string
  startTime?: string
  endTime?: string
  periodStart?: string
  periodEnd?: string
  lastPeriodStart?: string
  lastPeriodEnd?: string
  lastModified?: string
  class?: ItemClass
  preview?: boolean
  billed?: boolean
}

export type InvoiceItems = {
  meta?: ResourceList.ListResponse
  invoiceItems?: InvoiceItem[]
}

export type ListInvoiceItemsRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}