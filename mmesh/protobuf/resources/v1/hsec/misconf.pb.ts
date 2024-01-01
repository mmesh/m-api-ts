/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecCommon from "./common.pb"

export enum MisconfStatus {
  MISCONF_STATUS_UNKNOWN = "MISCONF_STATUS_UNKNOWN",
  MISCONF_STATUS_PASSED = "MISCONF_STATUS_PASSED",
  MISCONF_STATUS_FAILURE = "MISCONF_STATUS_FAILURE",
  MISCONF_STATUS_EXCEPTION = "MISCONF_STATUS_EXCEPTION",
}

export type MisconfSummary = {
  successes?: number
  failures?: number
  exceptions?: number
}

export type DetectedMisconfiguration = {
  type?: string
  ID?: string
  AVDID?: string
  title?: string
  description?: string
  message?: string
  namespace?: string
  query?: string
  resolution?: string
  severity?: string
  primaryURL?: string
  references?: string[]
  status?: MisconfStatus
  layer?: HsecCommon.Layer
  causeMetadata?: CauseMetadata
  traces?: string[]
}

export type CauseMetadata = {
  resource?: string
  provider?: string
  service?: string
  startLine?: number
  endLine?: number
  code?: HsecCommon.Code
  occurrences?: Occurrence[]
}

export type Occurrence = {
  resource?: string
  filename?: string
  location?: HsecCommon.Location
}