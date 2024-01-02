/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as ProCatalog from "../../resources/v1/services/catalog/pro/catalog.pb"
import * as ServicesPricingPlan from "../../resources/v1/services/pricingPlan.pb"
import * as ServicesProduct from "../../resources/v1/services/product.pb"
import * as ServicesProvider from "../../resources/v1/services/provider.pb"
import * as ServicesResourceUnit from "../../resources/v1/services/resourceUnit.pb"
export class ServicesAPI {
  static ListPricingPlans(req: ServicesPricingPlan.ListPricingPlansRequest, initReq?: fm.InitReq): Promise<ServicesPricingPlan.PricingPlans> {
    return fm.fetchReq<ServicesPricingPlan.ListPricingPlansRequest, ServicesPricingPlan.PricingPlans>(`/api/v1/services/${req["serviceID"]}/pricingPlans`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetPricingPlan(req: ServicesPricingPlan.PricingPlan, initReq?: fm.InitReq): Promise<ServicesPricingPlan.PricingPlan> {
    return fm.fetchReq<ServicesPricingPlan.PricingPlan, ServicesPricingPlan.PricingPlan>(`/api/v1/services/${req["serviceID"]}/pricingPlans/${req["pricingPlanID"]}?${fm.renderURLSearchParams(req, ["serviceID", "pricingPlanID"])}`, {...initReq, method: "GET"})
  }
  static DeletePricingPlan(req: ServicesPricingPlan.PricingPlan, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ServicesPricingPlan.PricingPlan, EmptyEmpty.Response>(`/api/v1/services/${req["serviceID"]}/pricingPlans/${req["pricingPlanID"]}`, {...initReq, method: "DELETE"})
  }
  static ListResourceUnits(req: ServicesResourceUnit.ListResourceUnitsRequest, initReq?: fm.InitReq): Promise<ServicesResourceUnit.ResourceUnits> {
    return fm.fetchReq<ServicesResourceUnit.ListResourceUnitsRequest, ServicesResourceUnit.ResourceUnits>(`/api/v1/services/${req["serviceID"]}/resourceUnits`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetResourceUnit(req: ServicesResourceUnit.ResourceUnit, initReq?: fm.InitReq): Promise<ServicesResourceUnit.ResourceUnit> {
    return fm.fetchReq<ServicesResourceUnit.ResourceUnit, ServicesResourceUnit.ResourceUnit>(`/api/v1/services/${req["serviceID"]}/resourceUnits/${req["resourceUnitID"]}?${fm.renderURLSearchParams(req, ["serviceID", "resourceUnitID"])}`, {...initReq, method: "GET"})
  }
  static DeleteResourceUnit(req: ServicesResourceUnit.ResourceUnit, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ServicesResourceUnit.ResourceUnit, EmptyEmpty.Response>(`/api/v1/services/${req["serviceID"]}/resourceUnits/${req["resourceUnitID"]}`, {...initReq, method: "DELETE"})
  }
  static ListProviders(req: ServicesProvider.ListProvidersRequest, initReq?: fm.InitReq): Promise<ServicesProvider.Providers> {
    return fm.fetchReq<ServicesProvider.ListProvidersRequest, ServicesProvider.Providers>(`/api/v1/services/${req["serviceID"]}/providers`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetProvider(req: ServicesProvider.Provider, initReq?: fm.InitReq): Promise<ServicesProvider.Provider> {
    return fm.fetchReq<ServicesProvider.Provider, ServicesProvider.Provider>(`/api/v1/services/${req["serviceID"]}/providers/${req["providerID"]}?${fm.renderURLSearchParams(req, ["serviceID", "providerID"])}`, {...initReq, method: "GET"})
  }
  static DeleteProvider(req: ServicesProvider.Provider, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ServicesProvider.Provider, EmptyEmpty.Response>(`/api/v1/services/${req["serviceID"]}/providers/${req["providerID"]}`, {...initReq, method: "DELETE"})
  }
  static SetProductCatalog(req: ProCatalog.ProductCatalog, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ProCatalog.ProductCatalog, EmptyEmpty.Response>(`/api/v1/services/${req["serviceID"]}/providers/${req["providerID"]}:catalog`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListProducts(req: ServicesProduct.ListProductsRequest, initReq?: fm.InitReq): Promise<ServicesProduct.Products> {
    return fm.fetchReq<ServicesProduct.ListProductsRequest, ServicesProduct.Products>(`/api/v1/services/${req["provider.serviceID"]}/providers/${req["provider.providerID"]}/products`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetProduct(req: ServicesProduct.Product, initReq?: fm.InitReq): Promise<ServicesProduct.Product> {
    return fm.fetchReq<ServicesProduct.Product, ServicesProduct.Product>(`/api/v1/services/${req["serviceID"]}/providers/${req["providerID"]}/products/${req["productID"]}?${fm.renderURLSearchParams(req, ["serviceID", "providerID", "productID"])}`, {...initReq, method: "GET"})
  }
  static DeleteProduct(req: ServicesProduct.Product, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ServicesProduct.Product, EmptyEmpty.Response>(`/api/v1/services/${req["serviceID"]}/providers/${req["providerID"]}/products/${req["productID"]}`, {...initReq, method: "DELETE"})
  }
}