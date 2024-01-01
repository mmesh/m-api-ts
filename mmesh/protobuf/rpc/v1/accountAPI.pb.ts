/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as AccountAccount from "../../resources/v1/account/account.pb"
export class AccountAPI {
  static NewAccount(req: AccountAccount.NewAccountRequest, initReq?: fm.InitReq): Promise<AccountAccount.NewAccountResponse> {
    return fm.fetchReq<AccountAccount.NewAccountRequest, AccountAccount.NewAccountResponse>(`/api/v1/accounts`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListAccounts(req: AccountAccount.ListAccountsRequest, initReq?: fm.InitReq): Promise<AccountAccount.Accounts> {
    return fm.fetchReq<AccountAccount.ListAccountsRequest, AccountAccount.Accounts>(`/api.AccountAPI/ListAccounts`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAccount(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Account>(`/api/v1/accounts/${req["accountID"]}?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static CancelAccount(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<AccountAccount.AccountReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}:cancel`, {...initReq, method: "PATCH"})
  }
  static DeleteAccount(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<AccountAccount.AccountReq, EmptyEmpty.Empty>(`/api.AccountAPI/DeleteAccount`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SetAccountMetadata(req: AccountAccount.SetAccountMetadataRequest, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.SetAccountMetadataRequest, AccountAccount.Account>(`/api/v1/accounts/${req["accountID"]}:metadata`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static SetAccountIntegrations(req: AccountAccount.SetAccountIntegrationsRequest, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.SetAccountIntegrationsRequest, AccountAccount.Account>(`/api/v1/accounts/${req["accountID"]}:integrations`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static EnableAccount(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Account>(`/api.AccountAPI/EnableAccount`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DisableAccount(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Account>(`/api.AccountAPI/DisableAccount`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SuspendAccountService(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Account>(`/api.AccountAPI/SuspendAccountService`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UnsuspendAccountService(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Account>(`/api.AccountAPI/UnsuspendAccountService`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CancelAccountService(req: AccountAccount.AccountReq, initReq?: fm.InitReq): Promise<AccountAccount.Account> {
    return fm.fetchReq<AccountAccount.AccountReq, AccountAccount.Account>(`/api.AccountAPI/CancelAccountService`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}