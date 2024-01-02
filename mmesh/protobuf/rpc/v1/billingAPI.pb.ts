/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as BillingCustomer from "../../resources/v1/billing/customer.pb"
import * as BillingInvoice from "../../resources/v1/billing/invoice.pb"
import * as BillingItem from "../../resources/v1/billing/item.pb"
import * as BillingSubscription from "../../resources/v1/billing/subscription.pb"
export class BillingAPI {
  static SearchCustomer(req: BillingCustomer.Customer, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<BillingCustomer.Customer, EmptyEmpty.Response>(`/api/v1/customers:search`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetCustomerPortal(req: BillingCustomer.CustomerPortalRequest, initReq?: fm.InitReq): Promise<BillingCustomer.CustomerPortalResponse> {
    return fm.fetchReq<BillingCustomer.CustomerPortalRequest, BillingCustomer.CustomerPortalResponse>(`/api/v1/accounts/${req["accountID"]}/billing:portal`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListInvoices(req: BillingInvoice.ListInvoicesRequest, initReq?: fm.InitReq): Promise<BillingInvoice.Invoices> {
    return fm.fetchReq<BillingInvoice.ListInvoicesRequest, BillingInvoice.Invoices>(`/api/v1/accounts/${req["accountID"]}/billing/invoices?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static GetInvoice(req: BillingInvoice.Invoice, initReq?: fm.InitReq): Promise<BillingInvoice.Invoice> {
    return fm.fetchReq<BillingInvoice.Invoice, BillingInvoice.Invoice>(`/api/v1/accounts/${req["accountID"]}/billing/invoices/${req["invoiceID"]}?${fm.renderURLSearchParams(req, ["accountID", "invoiceID"])}`, {...initReq, method: "GET"})
  }
  static DeleteInvoice(req: BillingInvoice.Invoice, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<BillingInvoice.Invoice, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/billing/invoices/${req["invoiceID"]}`, {...initReq, method: "DELETE"})
  }
  static ListBilledItems(req: BillingItem.ListInvoiceItemsRequest, initReq?: fm.InitReq): Promise<BillingItem.InvoiceItems> {
    return fm.fetchReq<BillingItem.ListInvoiceItemsRequest, BillingItem.InvoiceItems>(`/api/v1/accounts/${req["accountID"]}/billing/items?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static GetBilledItem(req: BillingItem.InvoiceItem, initReq?: fm.InitReq): Promise<BillingItem.InvoiceItem> {
    return fm.fetchReq<BillingItem.InvoiceItem, BillingItem.InvoiceItem>(`/api/v1/accounts/${req["accountID"]}/billing/items/${req["itemID"]}?${fm.renderURLSearchParams(req, ["accountID", "itemID"])}`, {...initReq, method: "GET"})
  }
  static ApplyPromotion(req: BillingSubscription.ApplyPromotionRequest, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<BillingSubscription.ApplyPromotionRequest, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/subscription:promotion`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}