/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as StatusStatus from "../../common/v1/status/status.pb"
import * as fm from "../../fetch.pb"
import * as NacNac from "../../network/v1/nac/nac.pb"
import * as NacNatprobe from "../../network/v1/nac/natprobe.pb"
import * as ControllerController from "../../resources/v1/controller/controller.pb"
import * as TopologyNode from "../../resources/v1/topology/node.pb"
export class NetworkAPI {
  static NetworkAdmissionControl(req: NacNac.NetworkAdmissionRequest, initReq?: fm.InitReq): Promise<NacNac.NetworkAdmissionResponse> {
    return fm.fetchReq<NacNac.NetworkAdmissionRequest, NacNac.NetworkAdmissionResponse>(`/network.NetworkAPI/NetworkAdmissionControl`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static NATProbe(req: NacNatprobe.NATProbe, initReq?: fm.InitReq): Promise<NacNatprobe.NATProbe> {
    return fm.fetchReq<NacNatprobe.NATProbe, NacNatprobe.NATProbe>(`/network.NetworkAPI/NATProbe`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RegisterEndpoint(req: NacNac.EndpointRegRequest, initReq?: fm.InitReq): Promise<NacNac.EndpointRegResponse> {
    return fm.fetchReq<NacNac.EndpointRegRequest, NacNac.EndpointRegResponse>(`/network.NetworkAPI/RegisterEndpoint`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RemoveEndpoint(req: TopologyNode.EndpointRequest, initReq?: fm.InitReq): Promise<TopologyNode.Node> {
    return fm.fetchReq<TopologyNode.EndpointRequest, TopologyNode.Node>(`/network.NetworkAPI/RemoveEndpoint`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RegisterNode(req: NacNac.NodeRegRequest, initReq?: fm.InitReq): Promise<NacNac.NodeRegResponse> {
    return fm.fetchReq<NacNac.NodeRegRequest, NacNac.NodeRegResponse>(`/network.NetworkAPI/RegisterNode`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Metrics(req: TopologyNode.Node, initReq?: fm.InitReq): Promise<StatusStatus.StatusResponse> {
    return fm.fetchReq<TopologyNode.Node, StatusStatus.StatusResponse>(`/network.NetworkAPI/Metrics`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static FederationEndpoints(req: TopologyNode.NodeReq, initReq?: fm.InitReq): Promise<ControllerController.FederationEndpoints> {
    return fm.fetchReq<TopologyNode.NodeReq, ControllerController.FederationEndpoints>(`/network.NetworkAPI/FederationEndpoints`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}