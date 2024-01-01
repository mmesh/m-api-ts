/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum StatusCode {
  UNDEFINED = "UNDEFINED",
  OK = "OK",
  CANCELED = "CANCELED",
  INTERRUPTED = "INTERRUPTED",
  INCOMPLETE = "INCOMPLETE",
  SUSPENDED = "SUSPENDED",
  FAILED = "FAILED",
}

export type StatusResponse = {
  sourceID?: string
  code?: StatusCode
  message?: string
  timestamp?: string
}