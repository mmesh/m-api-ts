/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as NstoreNstore from "../nstore.pb"
import * as NetdbConnection from "./connection.pb"

export enum TrafficQueryType {
  UNKNOWN_QUERY = "UNKNOWN_QUERY",
  TRAFFIC_BY_PROTOCOL = "TRAFFIC_BY_PROTOCOL",
  TRAFFIC_BY_L5_PORT = "TRAFFIC_BY_L5_PORT",
  TRAFFIC_BY_DIRECTION = "TRAFFIC_BY_DIRECTION",
  TRAFFIC_TOP_TALKERS = "TRAFFIC_TOP_TALKERS",
}

export type NetFlowEntry = {
  timestamp?: string
  flow?: NetdbConnection.Flow
  traffic?: NetdbConnection.TrafficCounter
}

export type TrafficMetricsRequest = {
  request?: NstoreNstore.DataRequest
  type?: TrafficQueryType
}

export type TrafficMetricsResponse = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  byProtocol?: TrafficByProtocol
  byL5Port?: TrafficByL5Port
  byDirection?: TrafficByDirection
  topTalkers?: TopTalkers
  timestamp?: string
}

export type TrafficByProtocol = {
  unknown?: TimeTrafficValue[]
  TCP?: TimeTrafficValue[]
  UDP?: TimeTrafficValue[]
  ICMPv4?: TimeTrafficValue[]
  ICMPv6?: TimeTrafficValue[]
  GRE?: TimeTrafficValue[]
  SCTP?: TimeTrafficValue[]
}

export type TrafficByL5Port = {
  other?: TimeTrafficValue[]
  HTTP?: TimeTrafficValue[]
  HTTPS?: TimeTrafficValue[]
  SSH?: TimeTrafficValue[]
  RDP?: TimeTrafficValue[]
  DNS?: TimeTrafficValue[]
  SMTP?: TimeTrafficValue[]
  SMTPS?: TimeTrafficValue[]
  MailSubmission?: TimeTrafficValue[]
  IMAP?: TimeTrafficValue[]
  IMAPS?: TimeTrafficValue[]
  POP3?: TimeTrafficValue[]
  POP3S?: TimeTrafficValue[]
  NTP?: TimeTrafficValue[]
  SNMP?: TimeTrafficValue[]
  BGP?: TimeTrafficValue[]
  LDAP?: TimeTrafficValue[]
  LDAPS?: TimeTrafficValue[]
  MySQL?: TimeTrafficValue[]
  PostgreSQL?: TimeTrafficValue[]
  MSSQL?: TimeTrafficValue[]
  Redis?: TimeTrafficValue[]
  NFS?: TimeTrafficValue[]
  SIP?: TimeTrafficValue[]
  SIPTLS?: TimeTrafficValue[]
  AMQP?: TimeTrafficValue[]
  AMQPS?: TimeTrafficValue[]
}

export type TrafficByDirection = {
  incoming?: TimeTrafficValue[]
  outgoing?: TimeTrafficValue[]
}

export type TopTalkers = {
  src?: Talker[]
  dst?: Talker[]
}

export type Talker = {
  addr?: string
  bytes?: string
}

export type TimeTrafficValue = {
  timestamp?: string
  traffic?: NetdbConnection.TrafficCounter
}