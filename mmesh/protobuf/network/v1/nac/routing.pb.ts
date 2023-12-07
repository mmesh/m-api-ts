/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum RoutingScope {
  SUBNET = "SUBNET",
  NETWORK = "NETWORK",
}

export type RoutingDomain = {
  locationID?: string
  subnetID?: string
  scope?: RoutingScope
  networkCIDR?: string
  subnetCIDR?: string
}