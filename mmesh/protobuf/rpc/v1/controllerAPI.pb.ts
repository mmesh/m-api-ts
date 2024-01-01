/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as AccountAccount from "../../resources/v1/account/account.pb"
import * as ControllerController from "../../resources/v1/controller/controller.pb"
import * as TopologyNode from "../../resources/v1/topology/node.pb"
export class ControllerAPI {
  static SetupAccount(req: AccountAccount.SetupAccountRequest, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<AccountAccount.SetupAccountRequest, EmptyEmpty.Empty>(`/api.ControllerAPI/SetupAccount`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAccountUsage(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Usage> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Usage>(`/api/v1/accounts/${req["accountID"]}:usage?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static GetAccountStats(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Stats> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Stats>(`/api/v1/accounts/${req["accountID"]}:stats?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static GetNodeController(req: TopologyNode.NodeReq, initReq?: fm.InitReq): Promise<ControllerController.Controller> {
    return fm.fetchReq<TopologyNode.NodeReq, ControllerController.Controller>(`/api.ControllerAPI/GetNodeController`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}