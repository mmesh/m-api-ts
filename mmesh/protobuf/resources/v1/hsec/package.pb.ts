/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecCommon from "./common.pb"
export type Package = {
  ID?: string
  name?: string
  version?: string
  release?: string
  epoch?: number
  arch?: string
  dev?: boolean
  srcName?: string
  srcVersion?: string
  srcRelease?: string
  srcEpoch?: number
  licenses?: string[]
  maintainer?: string
  modularityLabel?: string
  buildInfo?: BuildInfo
  ref?: string
  indirect?: boolean
  dependsOn?: string[]
  layer?: HsecCommon.Layer
  filePath?: string
  digest?: string
  locations?: HsecCommon.Location[]
  installedFiles?: string[]
}

export type BuildInfo = {
  contentSets?: string[]
  nvr?: string
  arch?: string
}