/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as NacNac from "../../network/v1/nac/nac.pb"
import * as NacNatprobe from "../../network/v1/nac/natprobe.pb"
import * as ControllerController from "../../resources/v1/controller/controller.pb"
import * as AuthSignin from "../../resources/v1/iam/auth/signin.pb"
import * as LocationLocation from "../../resources/v1/location/location.pb"
import * as MessagingMail from "../../resources/v1/messaging/mail.pb"
import * as TopologyRouter from "../../resources/v1/topology/router.pb"
import * as WebhookWebhook from "../../resources/v1/webhook/webhook.pb"
export class ManagerAPI {
  static Login(req: AuthSignin.LoginRequest, initReq?: fm.InitReq): Promise<AuthSignin.AuthenticationResponse> {
    return fm.fetchReq<AuthSignin.LoginRequest, AuthSignin.AuthenticationResponse>(`/api/v1/login`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Signin(req: AuthSignin.OTPSigninRequest, initReq?: fm.InitReq): Promise<AuthSignin.OTPSigninResponse> {
    return fm.fetchReq<AuthSignin.OTPSigninRequest, AuthSignin.OTPSigninResponse>(`/api/v1/signin`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static OTPAuthenticate(req: AuthSignin.OTPAuthenticationRequest, initReq?: fm.InitReq): Promise<AuthSignin.AuthenticationResponse> {
    return fm.fetchReq<AuthSignin.OTPAuthenticationRequest, AuthSignin.AuthenticationResponse>(`/api/v1/authenticate:otp`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SessionAuthenticate(req: EmptyEmpty.Request, initReq?: fm.InitReq): Promise<AuthSignin.AuthenticationResponse> {
    return fm.fetchReq<EmptyEmpty.Request, AuthSignin.AuthenticationResponse>(`/api/v1/authenticate:session?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static Signout(req: AuthSignin.SignoutRequest, initReq?: fm.InitReq): Promise<AuthSignin.SignoutResponse> {
    return fm.fetchReq<AuthSignin.SignoutRequest, AuthSignin.SignoutResponse>(`/api/v1/signout`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SetUserEmail(req: AuthSignin.SetUserEmailRequest, initReq?: fm.InitReq): Promise<AuthSignin.OTPSigninResponse> {
    return fm.fetchReq<AuthSignin.SetUserEmailRequest, AuthSignin.OTPSigninResponse>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}:email`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static VerifyUserEmail(req: AuthSignin.VerifyUserEmailRequest, initReq?: fm.InitReq): Promise<AuthSignin.AuthenticationResponse> {
    return fm.fetchReq<AuthSignin.VerifyUserEmailRequest, AuthSignin.AuthenticationResponse>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}:email`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SendMail(req: MessagingMail.SendMailRequest, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<MessagingMail.SendMailRequest, EmptyEmpty.Response>(`/api/v1/mail`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListWebhooks(req: WebhookWebhook.ListWebhooksRequest, initReq?: fm.InitReq): Promise<WebhookWebhook.Webhooks> {
    return fm.fetchReq<WebhookWebhook.ListWebhooksRequest, WebhookWebhook.Webhooks>(`/api.ManagerAPI/ListWebhooks`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetWebhook(req: WebhookWebhook.Webhook, initReq?: fm.InitReq): Promise<WebhookWebhook.Webhook> {
    return fm.fetchReq<WebhookWebhook.Webhook, WebhookWebhook.Webhook>(`/api.ManagerAPI/GetWebhook`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteWebhook(req: WebhookWebhook.Webhook, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<WebhookWebhook.Webhook, EmptyEmpty.Response>(`/api.ManagerAPI/DeleteWebhook`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CreateLocation(req: LocationLocation.NewLocationRequest, initReq?: fm.InitReq): Promise<LocationLocation.Location> {
    return fm.fetchReq<LocationLocation.NewLocationRequest, LocationLocation.Location>(`/api.ManagerAPI/CreateLocation`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListControlLocations(req: LocationLocation.ListLocationsRequest, initReq?: fm.InitReq): Promise<LocationLocation.Locations> {
    return fm.fetchReq<LocationLocation.ListLocationsRequest, LocationLocation.Locations>(`/api/v1/locations:control?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListConnectivityLocations(req: LocationLocation.ListLocationsRequest, initReq?: fm.InitReq): Promise<LocationLocation.Locations> {
    return fm.fetchReq<LocationLocation.ListLocationsRequest, LocationLocation.Locations>(`/api/v1/locations:connectivity?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListLocations(req: LocationLocation.ListLocationsRequest, initReq?: fm.InitReq): Promise<LocationLocation.Locations> {
    return fm.fetchReq<LocationLocation.ListLocationsRequest, LocationLocation.Locations>(`/api.ManagerAPI/ListLocations`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetLocation(req: LocationLocation.LocationReq, initReq?: fm.InitReq): Promise<LocationLocation.Location> {
    return fm.fetchReq<LocationLocation.LocationReq, LocationLocation.Location>(`/api.ManagerAPI/GetLocation`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateLocation(req: LocationLocation.UpdateLocationRequest, initReq?: fm.InitReq): Promise<LocationLocation.Location> {
    return fm.fetchReq<LocationLocation.UpdateLocationRequest, LocationLocation.Location>(`/api.ManagerAPI/UpdateLocation`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteLocation(req: LocationLocation.LocationReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<LocationLocation.LocationReq, EmptyEmpty.Response>(`/api.ManagerAPI/DeleteLocation`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SelectFederation(req: LocationLocation.Location, initReq?: fm.InitReq): Promise<ControllerController.FederationSelected> {
    return fm.fetchReq<LocationLocation.Location, ControllerController.FederationSelected>(`/api/v1/locations/${req["locationID"]}/federations:select?${fm.renderURLSearchParams(req, ["locationID"])}`, {...initReq, method: "GET"})
  }
  static ListFederations(req: ControllerController.ListFederationsRequest, initReq?: fm.InitReq): Promise<ControllerController.Federations> {
    return fm.fetchReq<ControllerController.ListFederationsRequest, ControllerController.Federations>(`/api.ManagerAPI/ListFederations`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetFederation(req: ControllerController.Federation, initReq?: fm.InitReq): Promise<ControllerController.Federation> {
    return fm.fetchReq<ControllerController.Federation, ControllerController.Federation>(`/api.ManagerAPI/GetFederation`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteFederation(req: ControllerController.Federation, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ControllerController.Federation, EmptyEmpty.Response>(`/api.ManagerAPI/DeleteFederation`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListControllers(req: ControllerController.Federation, initReq?: fm.InitReq): Promise<ControllerController.Controllers> {
    return fm.fetchReq<ControllerController.Federation, ControllerController.Controllers>(`/api.ManagerAPI/ListControllers`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetController(req: ControllerController.Controller, initReq?: fm.InitReq): Promise<ControllerController.Controller> {
    return fm.fetchReq<ControllerController.Controller, ControllerController.Controller>(`/api.ManagerAPI/GetController`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteController(req: ControllerController.Controller, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<ControllerController.Controller, EmptyEmpty.Response>(`/api.ManagerAPI/DeleteController`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RouterNATProbe(req: NacNatprobe.NATProbe, initReq?: fm.InitReq): Promise<NacNatprobe.NATProbe> {
    return fm.fetchReq<NacNatprobe.NATProbe, NacNatprobe.NATProbe>(`/api.ManagerAPI/RouterNATProbe`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RouterAdmissionControl(req: NacNac.RouterAdmissionRequest, initReq?: fm.InitReq): Promise<NacNac.RouterAdmissionResponse> {
    return fm.fetchReq<NacNac.RouterAdmissionRequest, NacNac.RouterAdmissionResponse>(`/api.ManagerAPI/RouterAdmissionControl`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RegisterRouter(req: NacNac.RouterRegRequest, initReq?: fm.InitReq): Promise<NacNac.RouterRegResponse> {
    return fm.fetchReq<NacNac.RouterRegRequest, NacNac.RouterRegResponse>(`/api.ManagerAPI/RegisterRouter`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CreateRouter(req: TopologyRouter.NewRouterRequest, initReq?: fm.InitReq): Promise<TopologyRouter.RouterInstance> {
    return fm.fetchReq<TopologyRouter.NewRouterRequest, TopologyRouter.RouterInstance>(`/api/v1/locations/${req["locationID"]}/routers:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CreateRouterWebhook(req: TopologyRouter.RouterReq, initReq?: fm.InitReq): Promise<TopologyRouter.RouterInstance> {
    return fm.fetchReq<TopologyRouter.RouterReq, TopologyRouter.RouterInstance>(`/api/v1/locations/${req["locationID"]}/routers/${req["routerID"]}:webhook`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListRouters(req: TopologyRouter.ListRoutersRequest, initReq?: fm.InitReq): Promise<TopologyRouter.Routers> {
    return fm.fetchReq<TopologyRouter.ListRoutersRequest, TopologyRouter.Routers>(`/api/v1/locations/${req["locationID"]}/routers`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetRouter(req: TopologyRouter.RouterReq, initReq?: fm.InitReq): Promise<TopologyRouter.Router> {
    return fm.fetchReq<TopologyRouter.RouterReq, TopologyRouter.Router>(`/api/v1/locations/${req["locationID"]}/routers/${req["routerID"]}?${fm.renderURLSearchParams(req, ["locationID", "routerID"])}`, {...initReq, method: "GET"})
  }
  static SetRouterCfg(req: TopologyRouter.SetRouterCfgRequest, initReq?: fm.InitReq): Promise<TopologyRouter.Router> {
    return fm.fetchReq<TopologyRouter.SetRouterCfgRequest, TopologyRouter.Router>(`/api/v1/locations/${req["routerReq.locationID"]}/routers/${req["routerReq.routerID"]}:cfg`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteRouter(req: TopologyRouter.RouterReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<TopologyRouter.RouterReq, EmptyEmpty.Response>(`/api/v1/locations/${req["locationID"]}/routers/${req["routerID"]}`, {...initReq, method: "DELETE"})
  }
}