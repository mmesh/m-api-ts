/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as BillingItem from "./item.pb"
export type Invoice = {
  accountID?: string
  invoiceID?: string
  description?: string
  serviceID?: string
  pricingPlanID?: string
  customerEmail?: string
  stripeCustomerID?: string
  stripeInvoiceID?: string
  stripeSubscriptionID?: string
  autoAdvance?: boolean
  amountDue?: string
  amountPaid?: string
  amountRemaining?: string
  startingBalance?: string
  endingBalance?: string
  attempted?: boolean
  paid?: boolean
  deleted?: boolean
  attemptCount?: string
  nextPaymentAttempt?: string
  subtotal?: string
  tax?: string
  total?: string
  totalDiscount?: string
  currency?: string
  invoiceNumber?: string
  receiptNumber?: string
  statementDescriptor?: string
  hostedInvoiceURL?: string
  invoicePDF?: string
  creationDate?: string
  lastModified?: string
  period?: string
  periodStart?: string
  periodEnd?: string
  dueDate?: string
  trialEndDate?: string
  trialPeriod?: boolean
  status?: string
  paymentIntentStatus?: string
  subscriptionInvoice?: boolean
  summaryItems?: BillingItem.InvoiceItem[]
  items?: {[key: string]: BillingItem.InvoiceItem}
}

export type Invoices = {
  meta?: ResourceList.ListResponse
  invoices?: Invoice[]
}

export type ListInvoicesRequest = {
  meta?: ResourceList.ListRequest
  accountID?: string
}