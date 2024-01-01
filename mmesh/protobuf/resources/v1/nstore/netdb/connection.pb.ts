/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum AddressFamily {
  UNKNOWN_AF = "UNKNOWN_AF",
  IP4 = "IP4",
  IP6 = "IP6",
}

export enum Protocol {
  UNKNOWN_PROTO = "UNKNOWN_PROTO",
  TCP = "TCP",
  UDP = "UDP",
  ICMP4 = "ICMP4",
  ICMP6 = "ICMP6",
  GRE = "GRE",
  SCTP = "SCTP",
}

export enum ConnectionStatus {
  UNKNOWN_STATUS = "UNKNOWN_STATUS",
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  DROPPED = "DROPPED",
}

export enum ConnectionDirection {
  UNKNOWN_DIRECTION = "UNKNOWN_DIRECTION",
  INCOMING = "INCOMING",
  OUTGOING = "OUTGOING",
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