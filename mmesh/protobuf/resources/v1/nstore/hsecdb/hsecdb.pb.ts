/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecReport from "../../hsec/report.pb"
import * as NstoreNstore from "../nstore.pb"

export enum ReportQueryType {
  REPORT_UNSPECIFIED = "REPORT_UNSPECIFIED",
  REPORT_OS_PKGS = "REPORT_OS_PKGS",
  REPORT_VULNERABILITIES = "REPORT_VULNERABILITIES",
  REPORT_MISCONFIGS = "REPORT_MISCONFIGS",
  REPORT_SECRETS = "REPORT_SECRETS",
  REPORT_LICENSES = "REPORT_LICENSES",
}

export type HostSecurityReportRequest = {
  request?: NstoreNstore.DataRequest
  type?: ReportQueryType
}

export type HostSecurityReportResponse = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  report?: HsecReport.Report
  timestamp?: string
}