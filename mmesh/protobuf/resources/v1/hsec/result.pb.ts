/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecCommon from "./common.pb"
import * as HsecLicense from "./license.pb"
import * as HsecMisconf from "./misconf.pb"
import * as HsecPackage from "./package.pb"
import * as HsecSecret from "./secret.pb"
import * as HsecVuln from "./vuln.pb"

export enum ResultClass {
  RESULT_CLASS_UNKNOWN = "RESULT_CLASS_UNKNOWN",
  RESULT_CLASS_OS_PKGS = "RESULT_CLASS_OS_PKGS",
  RESULT_CLASS_LANG_PKGS = "RESULT_CLASS_LANG_PKGS",
  RESULT_CLASS_CONFIG = "RESULT_CLASS_CONFIG",
  RESULT_CLASS_SECRET = "RESULT_CLASS_SECRET",
  RESULT_CLASS_LICENSE = "RESULT_CLASS_LICENSE",
  RESULT_CLASS_LICENSE_FILE = "RESULT_CLASS_LICENSE_FILE",
  RESULT_CLASS_CUSTOM = "RESULT_CLASS_CUSTOM",
}

export type Result = {
  target?: string
  class?: ResultClass
  type?: string
  packages?: HsecPackage.Package[]
  vulnerabilities?: HsecVuln.DetectedVulnerability[]
  misconfSummary?: HsecMisconf.MisconfSummary
  misconfigurations?: HsecMisconf.DetectedMisconfiguration[]
  secrets?: HsecSecret.SecretFinding[]
  licenses?: HsecLicense.DetectedLicense[]
  customResources?: CustomResource[]
}

export type CustomResource = {
  type?: string
  filePath?: string
  layer?: HsecCommon.Layer
}