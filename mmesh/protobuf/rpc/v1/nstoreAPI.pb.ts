/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as HsecdbHsecdb from "../../resources/v1/nstore/hsecdb/hsecdb.pb"
import * as MetricsdbMetricsdb from "../../resources/v1/nstore/metricsdb/metricsdb.pb"
import * as NetdbCtlog from "../../resources/v1/nstore/netdb/ctlog.pb"
import * as NetdbCtstate from "../../resources/v1/nstore/netdb/ctstate.pb"
import * as NetdbNetflowTraffic from "../../resources/v1/nstore/netdb/netflowTraffic.pb"
export class NStoreAPI {
  static GetNodeHostMetrics(req: MetricsdbMetricsdb.HostMetricsRequest, initReq?: fm.InitReq): Promise<MetricsdbMetricsdb.HostMetricsResponse> {
    return fm.fetchReq<MetricsdbMetricsdb.HostMetricsRequest, MetricsdbMetricsdb.HostMetricsResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}/nstore:hostmetrics`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeNetCtState(req: NetdbCtstate.ConntrackTableRequest, initReq?: fm.InitReq): Promise<NetdbCtstate.ConntrackTableResponse> {
    return fm.fetchReq<NetdbCtstate.ConntrackTableRequest, NetdbCtstate.ConntrackTableResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}/nstore:netctstate`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeNetCtLog(req: NetdbCtlog.ConntrackLogRequest, initReq?: fm.InitReq): Promise<NetdbCtlog.ConntrackLogResponse> {
    return fm.fetchReq<NetdbCtlog.ConntrackLogRequest, NetdbCtlog.ConntrackLogResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}/nstore:netctlog`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeNetTrafficMetrics(req: NetdbNetflowTraffic.TrafficMetricsRequest, initReq?: fm.InitReq): Promise<NetdbNetflowTraffic.TrafficMetricsResponse> {
    return fm.fetchReq<NetdbNetflowTraffic.TrafficMetricsRequest, NetdbNetflowTraffic.TrafficMetricsResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}/nstore:nettraffic`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeHostSecurityReport(req: HsecdbHsecdb.HostSecurityReportRequest, initReq?: fm.InitReq): Promise<HsecdbHsecdb.HostSecurityReportResponse> {
    return fm.fetchReq<HsecdbHsecdb.HostSecurityReportRequest, HsecdbHsecdb.HostSecurityReportResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}/nstore:hostsecurity`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}