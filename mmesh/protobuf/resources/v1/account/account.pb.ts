/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as BillingCustomer from "../billing/customer.pb"
import * as BillingSubscription from "../billing/subscription.pb"
import * as IamUser from "../iam/user.pb"
import * as ResourceList from "../resource/list.pb"
import * as ThirdPartyIntegrations from "../services/thirdParty/integrations.pb"

export enum AccountType {
  NORMAL = "NORMAL",
}

export type NewAccountRequest = {
  accountID?: string
  locationID?: string
  federationID?: string
  adminUserID?: string
  ownerEmail?: string
  ownerName?: string
  companyName?: string
  address?: BillingCustomer.Address
  defaultNetworkLocationID?: string
  defaultNetworkCIDR?: string
  defaultSubnetCIDR?: string
  dataSourceInstanceID?: string
}

export type NewAccountResponse = {
  locationID?: string
  federationID?: string
  accountID?: string
  adminUserToken?: string
}

export type SetupAccountRequest = {
  accountID?: string
  defaultNetworkLocationID?: string
  defaultNetworkCIDR?: string
  defaultSubnetCIDR?: string
}

export type Account = {
  accountID?: string
  name?: string
  description?: string
  companyName?: string
  locationID?: string
  federationID?: string
  creationDate?: string
  owner?: Owner
  type?: AccountType
  status?: Status
  service?: Service
  integrations?: ThirdPartyIntegrations.Integrations
  usage?: Usage
  dataSourceInstanceID?: string
}

export type Accounts = {
  meta?: ResourceList.ListResponse
  accounts?: Account[]
}

export type ListAccountsRequest = {
  meta?: ResourceList.ListRequest
}

export type Owner = {
  admin?: IamUser.User
  customer?: BillingCustomer.Customer
}

export type Status = {
  confirmed?: boolean
  enabled?: boolean
}

export type Service = {
  subscriptions?: {[key: string]: BillingSubscription.Subscription}
  suspended?: boolean
  canceled?: boolean
  cancelationDate?: string
}

export type Usage = {
  lastUpdated?: string
  tenants?: number
  networks?: number
  subnets?: number
  nodes?: number
  endpoints?: number
  relays?: number
  users?: number
  securityGroups?: number
  roles?: number
  ACLs?: number
  admUsers?: number
  IAPUsers?: number
  projects?: number
  workflows?: number
}

export type Stats = {
  usage?: Usage
}

export type AccountReq = {
  accountID?: string
}

export type SetAccountMetadataRequest = {
  accountID?: string
  name?: string
  description?: string
  companyName?: string
}

export type SetAccountIntegrationsRequest = {
  accountID?: string
  integrations?: ThirdPartyIntegrations.Integrations
}