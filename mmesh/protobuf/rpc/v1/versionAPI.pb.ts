/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as VersionVersion from "../../common/v1/version/version.pb"
import * as fm from "../../fetch.pb"
export class VersionAPI {
  static Version(req: EmptyEmpty.Empty, initReq?: fm.InitReq): Promise<VersionVersion.VersionResponse> {
    return fm.fetchReq<EmptyEmpty.Empty, VersionVersion.VersionResponse>(`/version?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}