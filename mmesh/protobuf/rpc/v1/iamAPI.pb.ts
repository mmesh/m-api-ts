/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as IamPerms from "../../resources/v1/iam/perms.pb"
import * as IamRbac from "../../resources/v1/iam/rbac.pb"
import * as IamUser from "../../resources/v1/iam/user.pb"
export class IAMAPI {
  static GetRBAC(req: IamRbac.RBACRequest, initReq?: fm.InitReq): Promise<IamRbac.RBAC> {
    return fm.fetchReq<IamRbac.RBACRequest, IamRbac.RBAC>(`/api/v1/accounts/${req["accountID"]}/iam:rbac?${fm.renderURLSearchParams(req, ["accountID"])}`, {...initReq, method: "GET"})
  }
  static ListIAMPermissions(req: EmptyEmpty.Request, initReq?: fm.InitReq): Promise<IamPerms.Permissions> {
    return fm.fetchReq<EmptyEmpty.Request, IamPerms.Permissions>(`/api/v1/iam:permissions?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static CreateUser(req: IamUser.NewUserRequest, initReq?: fm.InitReq): Promise<IamUser.User> {
    return fm.fetchReq<IamUser.NewUserRequest, IamUser.User>(`/api/v1/accounts/${req["accountID"]}/iam/users:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListUsers(req: IamUser.ListUsersRequest, initReq?: fm.InitReq): Promise<IamUser.Users> {
    return fm.fetchReq<IamUser.ListUsersRequest, IamUser.Users>(`/api/v1/accounts/${req["accountID"]}/iam/users`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetUser(req: IamUser.UserReq, initReq?: fm.InitReq): Promise<IamUser.User> {
    return fm.fetchReq<IamUser.UserReq, IamUser.User>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}?${fm.renderURLSearchParams(req, ["accountID", "userID"])}`, {...initReq, method: "GET"})
  }
  static DeleteUser(req: IamUser.UserReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<IamUser.UserReq, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}`, {...initReq, method: "DELETE"})
  }
  static EnableUser(req: IamUser.UserReq, initReq?: fm.InitReq): Promise<IamUser.User> {
    return fm.fetchReq<IamUser.UserReq, IamUser.User>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}:enable`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static DisableUser(req: IamUser.UserReq, initReq?: fm.InitReq): Promise<IamUser.User> {
    return fm.fetchReq<IamUser.UserReq, IamUser.User>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}:disable`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static NewUserToken(req: IamUser.UserReq, initReq?: fm.InitReq): Promise<IamUser.User> {
    return fm.fetchReq<IamUser.UserReq, IamUser.User>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}:token`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static SetUserPermissions(req: IamUser.SetUserPermissionsRequest, initReq?: fm.InitReq): Promise<IamUser.User> {
    return fm.fetchReq<IamUser.SetUserPermissionsRequest, IamUser.User>(`/api/v1/accounts/${req["accountID"]}/iam/users/${req["userID"]}:perms`, {...initReq, method: "PATCH", body: JSON.stringify(req, fm.replacer)})
  }
  static ListSecurityGroups(req: IamRbac.ListSecurityGroupsRequest, initReq?: fm.InitReq): Promise<IamRbac.SecurityGroups> {
    return fm.fetchReq<IamRbac.ListSecurityGroupsRequest, IamRbac.SecurityGroups>(`/api/v1/accounts/${req["accountID"]}/iam/securityGroups`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetSecurityGroup(req: IamRbac.SecurityGroup, initReq?: fm.InitReq): Promise<IamRbac.SecurityGroup> {
    return fm.fetchReq<IamRbac.SecurityGroup, IamRbac.SecurityGroup>(`/api/v1/accounts/${req["accountID"]}/iam/securityGroups/${req["securityGroupID"]}?${fm.renderURLSearchParams(req, ["accountID", "securityGroupID"])}`, {...initReq, method: "GET"})
  }
  static SetSecurityGroup(req: IamRbac.SecurityGroup, initReq?: fm.InitReq): Promise<IamRbac.SecurityGroup> {
    return fm.fetchReq<IamRbac.SecurityGroup, IamRbac.SecurityGroup>(`/api/v1/accounts/${req["accountID"]}/iam/securityGroups/${req["securityGroupID"]}`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteSecurityGroup(req: IamRbac.SecurityGroup, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<IamRbac.SecurityGroup, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/iam/securityGroups/${req["securityGroupID"]}`, {...initReq, method: "DELETE"})
  }
  static ListRoles(req: IamRbac.ListRolesRequest, initReq?: fm.InitReq): Promise<IamRbac.Roles> {
    return fm.fetchReq<IamRbac.ListRolesRequest, IamRbac.Roles>(`/api/v1/accounts/${req["accountID"]}/iam/roles`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetRole(req: IamRbac.Role, initReq?: fm.InitReq): Promise<IamRbac.Role> {
    return fm.fetchReq<IamRbac.Role, IamRbac.Role>(`/api/v1/accounts/${req["accountID"]}/iam/roles/${req["roleID"]}?${fm.renderURLSearchParams(req, ["accountID", "roleID"])}`, {...initReq, method: "GET"})
  }
  static SetRole(req: IamRbac.Role, initReq?: fm.InitReq): Promise<IamRbac.Role> {
    return fm.fetchReq<IamRbac.Role, IamRbac.Role>(`/api/v1/accounts/${req["accountID"]}/iam/roles/${req["roleID"]}`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteRole(req: IamRbac.Role, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<IamRbac.Role, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/iam/roles/${req["roleID"]}`, {...initReq, method: "DELETE"})
  }
  static ListACLs(req: IamRbac.ListACLsRequest, initReq?: fm.InitReq): Promise<IamRbac.ACLs> {
    return fm.fetchReq<IamRbac.ListACLsRequest, IamRbac.ACLs>(`/api/v1/accounts/${req["accountID"]}/iam/acls`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetACL(req: IamRbac.ACL, initReq?: fm.InitReq): Promise<IamRbac.ACL> {
    return fm.fetchReq<IamRbac.ACL, IamRbac.ACL>(`/api/v1/accounts/${req["accountID"]}/iam/acls/${req["ACLID"]}?${fm.renderURLSearchParams(req, ["accountID", "ACLID"])}`, {...initReq, method: "GET"})
  }
  static SetACL(req: IamRbac.ACL, initReq?: fm.InitReq): Promise<IamRbac.ACL> {
    return fm.fetchReq<IamRbac.ACL, IamRbac.ACL>(`/api/v1/accounts/${req["accountID"]}/iam/acls/${req["ACLID"]}`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteACL(req: IamRbac.ACL, initReq?: fm.InitReq): Promise<EmptyEmpty.Response> {
    return fm.fetchReq<IamRbac.ACL, EmptyEmpty.Response>(`/api/v1/accounts/${req["accountID"]}/iam/acls/${req["ACLID"]}`, {...initReq, method: "DELETE"})
  }
}