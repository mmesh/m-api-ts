/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecCommon from "./common.pb"

export enum VulnerabilityStatus {
  STATUS_UNKNOWN = "STATUS_UNKNOWN",
  STATUS_NOT_AFFECTED = "STATUS_NOT_AFFECTED",
  STATUS_AFFECTED = "STATUS_AFFECTED",
  STATUS_FIXED = "STATUS_FIXED",
  STATUS_UNDER_INVESTIGATION = "STATUS_UNDER_INVESTIGATION",
  STATUS_WILL_NOT_FIX = "STATUS_WILL_NOT_FIX",
  STATUS_FIX_DEFERRED = "STATUS_FIX_DEFERRED",
  STATUS_END_OF_LIFE = "STATUS_END_OF_LIFE",
}

export enum Severity {
  SEVERITY_UNKNOWN = "SEVERITY_UNKNOWN",
  SEVERITY_LOW = "SEVERITY_LOW",
  SEVERITY_MEDIUM = "SEVERITY_MEDIUM",
  SEVERITY_HIGH = "SEVERITY_HIGH",
  SEVERITY_CRITICAL = "SEVERITY_CRITICAL",
}

export type DetectedVulnerabilityVulnerability = {
  title?: string
  description?: string
  severity?: string
  cweIDs?: string[]
  vendorSeverity?: {[key: string]: Severity}
  CVSS?: {[key: string]: CVSS}
  references?: string[]
  publishedDate?: string
  lastModifiedDate?: string
}

export type DetectedVulnerability = {
  vulnerabilityID?: string
  vendorIDs?: string[]
  pkgID?: string
  pkgName?: string
  pkgPath?: string
  installedVersion?: string
  fixedVersion?: string
  status?: VulnerabilityStatus
  layer?: HsecCommon.Layer
  severitySource?: string
  primaryURL?: string
  pkgRef?: string
  dataSource?: DataSource
}

export type DataSource = {
  ID?: string
  name?: string
  URL?: string
}

export type CVSS = {
  v2Vector?: string
  v3Vector?: string
  v2Score?: number
  v3Score?: number
}