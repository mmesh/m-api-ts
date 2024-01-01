/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecReport from "../../hsec/report.pb"
import * as NstoreNstore from "../nstore.pb"
export type HostSecurityReportRequest = {
  request?: NstoreNstore.DataRequest
}

export type HostSecurityReportResponse = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  queryID?: string
  report?: HsecReport.Report
  timestamp?: string
}