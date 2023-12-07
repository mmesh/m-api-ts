/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as TopologyNetwork from "./network.pb"

export enum SecurityPolicy {
  ACCEPT = "ACCEPT",
  DROP = "DROP",
}

export enum Protocol {
  ANY = "ANY",
  TCP = "TCP",
  UDP = "UDP",
  ICMPv4 = "ICMPv4",
  ICMPv6 = "ICMPv6",
}

export type NewSubnetRequest = {
  accountID?: string
  tenantID?: string
  netID?: string
  description?: string
  networkCIDR?: string
  subnetCIDR?: string
  defaultPolicy?: SecurityPolicy
}

export type UpdateSubnetRequest = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  description?: string
  defaultPolicy?: SecurityPolicy
}

export type RemoveSubnetIPAMEntryRequest = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  endpointID?: string
  IPv4?: string
}

export type Subnet = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  description?: string
  IPAM?: IPAM
  networkPolicy?: Policy
}

export type Subnets = {
  meta?: ResourceList.ListResponse
  Subnets?: Subnet[]
}

export type ListSubnetsRequest = {
  meta?: ResourceList.ListRequest
  network?: TopologyNetwork.NetworkReq
}

export type IPAM = {
  networkCIDR?: string
  subnetCIDR?: string
  endpoints?: {[key: string]: string}
  leased?: {[key: string]: LeaseEndpointMap}
  available?: {[key: string]: boolean}
  totalAvailable?: number
  totalLeased?: number
}

export type LeaseEndpointMap = {
  endpoints?: {[key: string]: boolean}
  nodes?: {[key: string]: boolean}
}

export type Policy = {
  defaultPolicy?: SecurityPolicy
  networkFilters?: Filter[]
  lastModified?: string
}

export type Filter = {
  nfID?: string
  index?: number
  description?: string
  srcIPNet?: string
  dstIPNet?: string
  proto?: Protocol
  dstPort?: number
  policy?: SecurityPolicy
}

export type SubnetReq = {
  accountID?: string
  tenantID?: string
  netID?: string
  subnetID?: string
}

export type NewNetworkFilterRequest = {
  subnetReq?: SubnetReq
  index?: number
  description?: string
  srcIPNet?: string
  dstIPNet?: string
  proto?: Protocol
  dstPort?: number
  policy?: SecurityPolicy
}

export type UpdateNetworkFilterRequest = {
  subnetReq?: SubnetReq
  nfID?: string
  index?: number
  description?: string
  srcIPNet?: string
  dstIPNet?: string
  proto?: Protocol
  dstPort?: number
  policy?: SecurityPolicy
}

export type DeleteNetworkFilterRequest = {
  subnetReq?: SubnetReq
  nfID?: string
}