/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as HsecdbHsecdb from "../../resources/v1/nstore/hsecdb/hsecdb.pb"
import * as MetricsdbMetricsdb from "../../resources/v1/nstore/metricsdb/metricsdb.pb"
import * as NetdbCtlog from "../../resources/v1/nstore/netdb/ctlog.pb"
import * as NetdbCtstate from "../../resources/v1/nstore/netdb/ctstate.pb"
import * as NetdbNetflowTraffic from "../../resources/v1/nstore/netdb/netflowTraffic.pb"
import * as TopologyNetwork from "../../resources/v1/topology/network.pb"
import * as TopologyNode from "../../resources/v1/topology/node.pb"
import * as TopologySubnet from "../../resources/v1/topology/subnet.pb"
import * as TopologyTopology from "../../resources/v1/topology/topology.pb"
export class TopologyAPI {
  static GetTopology(req: TopologyTopology.TopologyRequest, initReq?: fm.InitReq): Promise<TopologyTopology.Topology> {
    return fm.fetchReq<TopologyTopology.TopologyRequest, TopologyTopology.Topology>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}:topology?${fm.renderURLSearchParams(req, ["accountID", "tenantID"])}`, {...initReq, method: "GET"})
  }
  static GetNodeSummaryMap(req: TopologyTopology.TopologyRequest, initReq?: fm.InitReq): Promise<TopologyTopology.NodeSummaryMap> {
    return fm.fetchReq<TopologyTopology.TopologyRequest, TopologyTopology.NodeSummaryMap>(`/api.TopologyAPI/GetNodeSummaryMap`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CreateNetwork(req: TopologyNetwork.NewNetworkRequest, initReq?: fm.InitReq): Promise<TopologyNetwork.Network> {
    return fm.fetchReq<TopologyNetwork.NewNetworkRequest, TopologyNetwork.Network>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListNetworks(req: TopologyNetwork.ListNetworksRequest, initReq?: fm.InitReq): Promise<TopologyNetwork.Networks> {
    return fm.fetchReq<TopologyNetwork.ListNetworksRequest, TopologyNetwork.Networks>(`/api/v1/accounts/${req["tenant.accountID"]}/tenants/${req["tenant.tenantID"]}/networks`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNetwork(req: TopologyNetwork.NetworkReq, initReq?: fm.InitReq): Promise<TopologyNetwork.Network> {
    return fm.fetchReq<TopologyNetwork.NetworkReq, TopologyNetwork.Network>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "netID"])}`, {...initReq, method: "GET"})
  }
  static UpdateNetwork(req: TopologyNetwork.UpdateNetworkRequest, initReq?: fm.InitReq): Promise<TopologyNetwork.Network> {
    return fm.fetchReq<TopologyNetwork.UpdateNetworkRequest, TopologyNetwork.Network>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteNetwork(req: TopologyNetwork.NetworkReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<TopologyNetwork.NetworkReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}`, {...initReq, method: "DELETE"})
  }
  static CreateSubnet(req: TopologySubnet.NewSubnetRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Subnet> {
    return fm.fetchReq<TopologySubnet.NewSubnetRequest, TopologySubnet.Subnet>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListSubnets(req: TopologySubnet.ListSubnetsRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Subnets> {
    return fm.fetchReq<TopologySubnet.ListSubnetsRequest, TopologySubnet.Subnets>(`/api/v1/accounts/${req["network.accountID"]}/tenants/${req["network.tenantID"]}/networks/${req["network.netID"]}/subnets`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetSubnet(req: TopologySubnet.SubnetReq, initReq?: fm.InitReq): Promise<TopologySubnet.Subnet> {
    return fm.fetchReq<TopologySubnet.SubnetReq, TopologySubnet.Subnet>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets/${req["subnetID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "netID", "subnetID"])}`, {...initReq, method: "GET"})
  }
  static UpdateSubnet(req: TopologySubnet.UpdateSubnetRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Subnet> {
    return fm.fetchReq<TopologySubnet.UpdateSubnetRequest, TopologySubnet.Subnet>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets/${req["subnetID"]}`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteSubnet(req: TopologySubnet.SubnetReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<TopologySubnet.SubnetReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets/${req["subnetID"]}`, {...initReq, method: "DELETE"})
  }
  static RemoveSubnetIPAMEntry(req: TopologySubnet.RemoveSubnetIPAMEntryRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Subnet> {
    return fm.fetchReq<TopologySubnet.RemoveSubnetIPAMEntryRequest, TopologySubnet.Subnet>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets/${req["subnetID"]}:ipam-entry`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNetworkPolicy(req: TopologySubnet.SubnetReq, initReq?: fm.InitReq): Promise<TopologySubnet.Policy> {
    return fm.fetchReq<TopologySubnet.SubnetReq, TopologySubnet.Policy>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets/${req["subnetID"]}/policy?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "netID", "subnetID"])}`, {...initReq, method: "GET"})
  }
  static DeleteNetworkPolicy(req: TopologySubnet.SubnetReq, initReq?: fm.InitReq): Promise<TopologySubnet.Policy> {
    return fm.fetchReq<TopologySubnet.SubnetReq, TopologySubnet.Policy>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/networks/${req["netID"]}/subnets/${req["subnetID"]}/policy`, {...initReq, method: "DELETE"})
  }
  static CreateNetworkFilter(req: TopologySubnet.NewNetworkFilterRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Policy> {
    return fm.fetchReq<TopologySubnet.NewNetworkFilterRequest, TopologySubnet.Policy>(`/api/v1/accounts/${req["subnetReq.accountID"]}/tenants/${req["subnetReq.tenantID"]}/networks/${req["subnetReq.netID"]}/subnets/${req["subnetReq.subnetID"]}/policy`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateNetworkFilter(req: TopologySubnet.UpdateNetworkFilterRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Policy> {
    return fm.fetchReq<TopologySubnet.UpdateNetworkFilterRequest, TopologySubnet.Policy>(`/api/v1/accounts/${req["subnetReq.accountID"]}/tenants/${req["subnetReq.tenantID"]}/networks/${req["subnetReq.netID"]}/subnets/${req["subnetReq.subnetID"]}/policy/${req["nfID"]}`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteNetworkFilter(req: TopologySubnet.DeleteNetworkFilterRequest, initReq?: fm.InitReq): Promise<TopologySubnet.Policy> {
    return fm.fetchReq<TopologySubnet.DeleteNetworkFilterRequest, TopologySubnet.Policy>(`/api/v1/accounts/${req["subnetReq.accountID"]}/tenants/${req["subnetReq.tenantID"]}/networks/${req["subnetReq.netID"]}/subnets/${req["subnetReq.subnetID"]}/policy/${req["nfID"]}`, {...initReq, method: "DELETE"})
  }
  static CreateGenericNode(req: TopologyNode.NewNodeRequest, initReq?: fm.InitReq): Promise<TopologyNode.NodeInstance> {
    return fm.fetchReq<TopologyNode.NewNodeRequest, TopologyNode.NodeInstance>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/nodes:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CreateKubernetesGateway(req: TopologyNode.NewNodeRequest, initReq?: fm.InitReq): Promise<TopologyNode.NodeInstance> {
    return fm.fetchReq<TopologyNode.NewNodeRequest, TopologyNode.NodeInstance>(`/api.TopologyAPI/CreateKubernetesGateway`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CreateKubernetesPod(req: TopologyNode.NewNodeRequest, initReq?: fm.InitReq): Promise<TopologyNode.NodeInstance> {
    return fm.fetchReq<TopologyNode.NewNodeRequest, TopologyNode.NodeInstance>(`/api.TopologyAPI/CreateKubernetesPod`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeInstance(req: TopologyNode.NodeReq, initReq?: fm.InitReq): Promise<TopologyNode.NodeInstance> {
    return fm.fetchReq<TopologyNode.NodeReq, TopologyNode.NodeInstance>(`/api.TopologyAPI/GetNodeInstance`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeGroupInstance(req: TopologyNode.NodeGroupReq, initReq?: fm.InitReq): Promise<TopologyNode.NodeInstance> {
    return fm.fetchReq<TopologyNode.NodeGroupReq, TopologyNode.NodeInstance>(`/api.TopologyAPI/GetNodeGroupInstance`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListNodesByTenant(req: TopologyNode.ListNodesByTenantRequest, initReq?: fm.InitReq): Promise<TopologyNode.Nodes> {
    return fm.fetchReq<TopologyNode.ListNodesByTenantRequest, TopologyNode.Nodes>(`/api/v1/accounts/${req["tenant.accountID"]}/tenants/${req["tenant.tenantID"]}/nodes`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListNodesBySubnet(req: TopologyNode.ListNodesBySubnetRequest, initReq?: fm.InitReq): Promise<TopologyNode.Nodes> {
    return fm.fetchReq<TopologyNode.ListNodesBySubnetRequest, TopologyNode.Nodes>(`/api/v1/accounts/${req["subnet.accountID"]}/tenants/${req["subnet.tenantID"]}/networks/${req["subnet.netID"]}/subnets/${req["subnet.subnetID"]}/nodes`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNode(req: TopologyNode.NodeReq, initReq?: fm.InitReq): Promise<TopologyNode.Node> {
    return fm.fetchReq<TopologyNode.NodeReq, TopologyNode.Node>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/nodes/${req["nodeID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "nodeID"])}`, {...initReq, method: "GET"})
  }
  static UpdateNodeMetadata(req: TopologyNode.UpdateNodeMetadataRequest, initReq?: fm.InitReq): Promise<TopologyNode.Node> {
    return fm.fetchReq<TopologyNode.UpdateNodeMetadataRequest, TopologyNode.Node>(`/api/v1/accounts/${req["nodeReq.accountID"]}/tenants/${req["nodeReq.tenantID"]}/nodes/${req["nodeReq.nodeID"]}:metadata`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateNodeNetworking(req: TopologyNode.UpdateNodeNetworkingRequest, initReq?: fm.InitReq): Promise<TopologyNode.Node> {
    return fm.fetchReq<TopologyNode.UpdateNodeNetworkingRequest, TopologyNode.Node>(`/api/v1/accounts/${req["nodeReq.accountID"]}/tenants/${req["nodeReq.tenantID"]}/nodes/${req["nodeReq.nodeID"]}:networking`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateNodeManagement(req: TopologyNode.UpdateNodeManagementRequest, initReq?: fm.InitReq): Promise<TopologyNode.Node> {
    return fm.fetchReq<TopologyNode.UpdateNodeManagementRequest, TopologyNode.Node>(`/api/v1/accounts/${req["nodeReq.accountID"]}/tenants/${req["nodeReq.tenantID"]}/nodes/${req["nodeReq.nodeID"]}:management`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteNode(req: TopologyNode.NodeReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<TopologyNode.NodeReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/nodes/${req["nodeID"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteNodeGroup(req: TopologyNode.NodeGroupReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<TopologyNode.NodeGroupReq, EmptyEmpty.Empty>(`/api.TopologyAPI/DeleteNodeGroup`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteNetworkEndpoint(req: TopologyNode.EndpointRequest, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<TopologyNode.EndpointRequest, EmptyEmpty.Empty>(`/api.TopologyAPI/DeleteNetworkEndpoint`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetNodeHostMetrics(req: MetricsdbMetricsdb.HostMetricsRequest, initReq?: fm.InitReq): Promise<MetricsdbMetricsdb.HostMetricsResponse> {
    return fm.fetchReq<MetricsdbMetricsdb.HostMetricsRequest, MetricsdbMetricsdb.HostMetricsResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}:host-metrics?${fm.renderURLSearchParams(req, ["request.accountID", "request.tenantID", "request.nodeID"])}`, {...initReq, method: "GET"})
  }
  static GetNodeNetCtState(req: NetdbCtstate.ConntrackTableRequest, initReq?: fm.InitReq): Promise<NetdbCtstate.ConntrackTableResponse> {
    return fm.fetchReq<NetdbCtstate.ConntrackTableRequest, NetdbCtstate.ConntrackTableResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}:net-ct-state?${fm.renderURLSearchParams(req, ["request.accountID", "request.tenantID", "request.nodeID"])}`, {...initReq, method: "GET"})
  }
  static GetNodeNetCtLog(req: NetdbCtlog.ConntrackLogRequest, initReq?: fm.InitReq): Promise<NetdbCtlog.ConntrackLogResponse> {
    return fm.fetchReq<NetdbCtlog.ConntrackLogRequest, NetdbCtlog.ConntrackLogResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}:net-ct-log?${fm.renderURLSearchParams(req, ["request.accountID", "request.tenantID", "request.nodeID"])}`, {...initReq, method: "GET"})
  }
  static GetNodeNetTrafficMetrics(req: NetdbNetflowTraffic.TrafficMetricsRequest, initReq?: fm.InitReq): Promise<NetdbNetflowTraffic.TrafficMetricsResponse> {
    return fm.fetchReq<NetdbNetflowTraffic.TrafficMetricsRequest, NetdbNetflowTraffic.TrafficMetricsResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}:net-traffic?${fm.renderURLSearchParams(req, ["request.accountID", "request.tenantID", "request.nodeID"])}`, {...initReq, method: "GET"})
  }
  static GetNodeHostSecurityReport(req: HsecdbHsecdb.HostSecurityReportRequest, initReq?: fm.InitReq): Promise<HsecdbHsecdb.HostSecurityReportResponse> {
    return fm.fetchReq<HsecdbHsecdb.HostSecurityReportRequest, HsecdbHsecdb.HostSecurityReportResponse>(`/api/v1/accounts/${req["request.accountID"]}/tenants/${req["request.tenantID"]}/nodes/${req["request.nodeID"]}:host-security?${fm.renderURLSearchParams(req, ["request.accountID", "request.tenantID", "request.nodeID"])}`, {...initReq, method: "GET"})
  }
}