/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
export type NewLocationRequest = {
  region?: string
  zone?: string
  controlZone?: FeatureZone
  connectivityZone?: FeatureZone
}

export type UpdateLocationRequest = {
  locationID?: string
  controlZone?: FeatureZone
  connectivityZone?: FeatureZone
}

export type Location = {
  locationID?: string
  region?: string
  zone?: string
  controlZone?: FeatureZone
  connectivityZone?: FeatureZone
}

export type Locations = {
  meta?: ResourceList.ListResponse
  locations?: Location[]
}

export type ListLocationsRequest = {
  meta?: ResourceList.ListRequest
}

export type FeatureZone = {
  active?: boolean
}

export type LocationReq = {
  locationID?: string
}