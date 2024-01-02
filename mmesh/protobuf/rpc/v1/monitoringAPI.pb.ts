/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as EventsAlert from "../../resources/v1/events/alert.pb"
export class MonitoringAPI {
  static GetAlertList(req: EventsAlert.AlertListRequest, initReq?: fm.InitReq): Promise<EventsAlert.AlertList> {
    return fm.fetchReq<EventsAlert.AlertListRequest, EventsAlert.AlertList>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}:alerts?${fm.renderURLSearchParams(req, ["accountID", "tenantID"])}`, {...initReq, method: "GET"})
  }
  static ListAlerts(req: EventsAlert.ListAlertsRequest, initReq?: fm.InitReq): Promise<EventsAlert.Alerts> {
    return fm.fetchReq<EventsAlert.ListAlertsRequest, EventsAlert.Alerts>(`/api/v1/accounts/${req["tenant.accountID"]}/tenants/${req["tenant.tenantID"]}/alerts`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAlert(req: EventsAlert.AlertReq, initReq?: fm.InitReq): Promise<EventsAlert.Alert> {
    return fm.fetchReq<EventsAlert.AlertReq, EventsAlert.Alert>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/alerts/${req["alertID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "alertID"])}`, {...initReq, method: "GET"})
  }
  static NewAlertComment(req: EventsAlert.AlertNewCommentRequest, initReq?: fm.InitReq): Promise<EventsAlert.Alert> {
    return fm.fetchReq<EventsAlert.AlertNewCommentRequest, EventsAlert.Alert>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/alerts/${req["alertID"]}:comment`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteAlert(req: EventsAlert.AlertReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<EventsAlert.AlertReq, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/alerts/${req["alertID"]}`, {...initReq, method: "DELETE"})
  }
}