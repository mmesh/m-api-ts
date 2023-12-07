/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type NetworkStats = {
  prev?: {[key: string]: NetDevStats}
  stats?: {[key: string]: NetDevStats}
  timestamp?: string
}

export type NetDevStats = {
  iface?: string
  rxBytes?: string
  rxPackets?: string
  rxErrors?: string
  rxDrops?: string
  rxFifo?: string
  rxFrame?: string
  rxCompressed?: string
  rxMulticast?: string
  txBytes?: string
  txPackets?: string
  txErrors?: string
  txDrops?: string
  txFifo?: string
  txColls?: string
  txCarrier?: string
  txCompressed?: string
}