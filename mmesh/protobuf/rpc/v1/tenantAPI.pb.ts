/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as TenantTenant from "../../resources/v1/tenant/tenant.pb"
export class TenantAPI {
  static GetTenantList(req: TenantTenant.TenantListRequest, initReq?: fm.InitReq): Promise<TenantTenant.TenantList> {
    return fm.fetchReq<TenantTenant.TenantListRequest, TenantTenant.TenantList>(`/api/v1/accounts/${req["accountID"]}:tenants?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static CreateTenant(req: TenantTenant.NewTenantRequest, initReq?: fm.InitReq): Promise<TenantTenant.Tenant> {
    return fm.fetchReq<TenantTenant.NewTenantRequest, TenantTenant.Tenant>(`/api/v1/accounts/${req["accountID"]}/tenants:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListTenants(req: TenantTenant.ListTenantsRequest, initReq?: fm.InitReq): Promise<TenantTenant.Tenants> {
    return fm.fetchReq<TenantTenant.ListTenantsRequest, TenantTenant.Tenants>(`/api/v1/accounts/${req["accountID"]}/tenants`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetTenant(req: TenantTenant.TenantReq, initReq?: fm.InitReq): Promise<TenantTenant.Tenant> {
    return fm.fetchReq<TenantTenant.TenantReq, TenantTenant.Tenant>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID"])}`, {...initReq, method: "GET"})
  }
  static UpdateTenant(req: TenantTenant.UpdateTenantRequest, initReq?: fm.InitReq): Promise<TenantTenant.Tenant> {
    return fm.fetchReq<TenantTenant.UpdateTenantRequest, TenantTenant.Tenant>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteTenant(req: TenantTenant.TenantReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<TenantTenant.TenantReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}`, {...initReq, method: "DELETE"})
  }
}