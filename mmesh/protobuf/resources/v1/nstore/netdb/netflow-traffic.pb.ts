/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as NstoreNstore from "../nstore.pb"
import * as NetdbConnection from "./connection.pb"
export type NetFlowEntry = {
  timestamp?: string
  timeRange?: NstoreNstore.TimeRange
  flow?: NetdbConnection.Flow
  traffic?: NetdbConnection.TrafficCounter
}

export type TrafficMetricsResponse = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  byProtocol?: {[key: string]: TrafficByProtocol}
  byL5Port?: {[key: string]: TrafficByL5Port}
  byDirection?: {[key: string]: TrafficByDirection}
  topTalkers?: {[key: string]: TopTalkers}
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
}

export type TrafficByDirection = {
  incoming?: TimeTrafficValue[]
  outgoing?: TimeTrafficValue[]
}

export type TopTalkers = {
  talkers?: Talker[]
}

export type Talker = {
  addr?: string
  traffic?: TrafficByDirection
}

export type TimeTrafficValue = {
  timestamp?: string
  traffic?: NetdbConnection.TrafficCounter
}