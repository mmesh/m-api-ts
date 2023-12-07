/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
export type Service = {
  serviceID?: string
  lastUpdated?: string
}

export type Services = {
  meta?: ResourceList.ListResponse
  services?: Service[]
}

export type ListServicesRequest = {
  meta?: ResourceList.ListRequest
}