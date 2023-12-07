/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type AuthKey = {
  key?: string
}

export type AuthToken = {
  subkey1?: string
  subkey2?: string
  validationKey?: string
  userSessionToken?: string
}

export type AuthCredentials = {
  realm?: string
  ID?: string
  sessionToken?: string
}

export type AccessRequest = {
  userRealm?: string
  userID?: string
  isAdmin?: boolean
  sessionToken?: string
  realm?: string
  tenantID?: string
  netID?: string
  subnetID?: string
  nodeID?: string
  locationID?: string
  routerID?: string
  permission?: number
  endpoint?: string
}