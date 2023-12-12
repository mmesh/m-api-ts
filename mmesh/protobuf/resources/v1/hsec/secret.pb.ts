/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecCommon from "./common.pb"
export type SecretFinding = {
  ruleID?: string
  category?: string
  severity?: string
  title?: string
  startLine?: number
  endLine?: number
  code?: HsecCommon.Code
  match?: string
  layer?: HsecCommon.Layer
}