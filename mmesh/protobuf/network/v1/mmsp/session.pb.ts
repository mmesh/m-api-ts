/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum SessionMsgType {
  UNDEFINED_SESSION_MSG = "UNDEFINED_SESSION_MSG",
  SESSION_KEEPALIVE = "SESSION_KEEPALIVE",
}

export type SessionPDU = {
  type?: SessionMsgType
  sessionID?: string
}