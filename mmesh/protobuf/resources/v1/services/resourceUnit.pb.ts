/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as ServicesPrice from "./price.pb"
export type ResourceUnit = {
  serviceID?: string
  resourceUnitID?: string
  description?: string
  stripeProductID?: string
  prices?: {[key: string]: ServicesPrice.Price}
  creationDate?: string
  lastModified?: string
}

export type ResourceUnits = {
  meta?: ResourceList.ListResponse
  resourceUnits?: ResourceUnit[]
}

export type ListResourceUnitsRequest = {
  meta?: ResourceList.ListRequest
  serviceID?: string
}