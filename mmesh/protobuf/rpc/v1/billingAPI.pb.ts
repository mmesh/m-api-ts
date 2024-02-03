/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as BillingCustomer from "../../resources/v1/billing/customer.pb"
export class BillingAPI {
  static SearchCustomer(req: BillingCustomer.Customer, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<BillingCustomer.Customer, EmptyEmpty.Response>(`/api/v1/customers:search`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetCustomerPortal(req: BillingCustomer.CustomerPortalRequest, initReq?: fm.InitReq): Promise<BillingCustomer.CustomerPortalResponse> {
    return fm.fetchReq<BillingCustomer.CustomerPortalRequest, BillingCustomer.CustomerPortalResponse>(`/api/v1/accounts/${req["accountID"]}/billing:portal`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}