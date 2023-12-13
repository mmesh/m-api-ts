/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum AddressFamily {
  AF_UNKNOWN = "AF_UNKNOWN",
  AF_IP4 = "AF_IP4",
  AF_IP6 = "AF_IP6",
}

export enum Protocol {
  PROTO_UNKNOWN = "PROTO_UNKNOWN",
  PROTO_TCP = "PROTO_TCP",
  PROTO_UDP = "PROTO_UDP",
  PROTO_ICMP4 = "PROTO_ICMP4",
  PROTO_ICMP6 = "PROTO_ICMP6",
  PROTO_GRE = "PROTO_GRE",
  PROTO_SCTP = "PROTO_SCTP",
}

export enum ConnectionStatus {
  STATUS_UNKNOWN = "STATUS_UNKNOWN",
  STATUS_NEW = "STATUS_NEW",
  STATUS_ACTIVE = "STATUS_ACTIVE",
  STATUS_DROPPED = "STATUS_DROPPED",
}

export enum ConnectionDirection {
  CONNECTION_INCOMING = "CONNECTION_INCOMING",
  CONNECTION_OUTGOING = "CONNECTION_OUTGOING",
}

export type Connection = {
  AF?: AddressFamily
  srcIP?: string
  dstIP?: string
  proto?: Protocol
  srcPort?: number
  dstPort?: number
}

export type Flow = {
  connection?: Connection
  direction?: ConnectionDirection
}

export type ConnectionState = {
  status?: ConnectionStatus
  firstSeen?: string
  timeout?: string
  originCounter?: TrafficCounter
  replyCounter?: TrafficCounter
}

export type TrafficCounter = {
  packets?: string
  bytes?: string
}