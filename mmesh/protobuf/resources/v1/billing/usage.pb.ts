/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
export type UsageRecord = {
  accountID?: string
  stripeCustomerID?: string
  serviceID?: string
  stripeProductID?: string
  stripePriceID?: string
  stripeSubscriptionID?: string
  stripeUsageRecordID?: string
  creationDate?: string
}

export type UsageRecords = {
  meta?: ResourceList.ListResponse
  usageRecords?: UsageRecord[]
}

export type ListUsageRecordsRequest = {
  meta?: ResourceList.ListRequest
}