/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EmptyEmpty from "../../common/v1/empty/empty.pb"
import * as fm from "../../fetch.pb"
import * as OpsOps from "../../resources/v1/ops/ops.pb"
import * as OpsProject from "../../resources/v1/ops/project.pb"
import * as OpsWorkflow from "../../resources/v1/ops/workflow.pb"
export class OpsAPI {
  static GetOps(req: OpsOps.OpsRequest, initReq?: fm.InitReq): Promise<OpsOps.Ops> {
    return fm.fetchReq<OpsOps.OpsRequest, OpsOps.Ops>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}:ops?${fm.renderURLSearchParams(req, ["accountID", "tenantID"])}`, {...initReq, method: "GET"})
  }
  static CreateProject(req: OpsProject.NewProjectRequest, initReq?: fm.InitReq): Promise<OpsProject.Project> {
    return fm.fetchReq<OpsProject.NewProjectRequest, OpsProject.Project>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListProjects(req: OpsProject.ListProjectsRequest, initReq?: fm.InitReq): Promise<OpsProject.Projects> {
    return fm.fetchReq<OpsProject.ListProjectsRequest, OpsProject.Projects>(`/api/v1/accounts/${req["tenant.accountID"]}/tenants/${req["tenant.tenantID"]}/projects`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetProject(req: OpsProject.ProjectReq, initReq?: fm.InitReq): Promise<OpsProject.Project> {
    return fm.fetchReq<OpsProject.ProjectReq, OpsProject.Project>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "projectID"])}`, {...initReq, method: "GET"})
  }
  static SetProject(req: OpsProject.Project, initReq?: fm.InitReq): Promise<OpsProject.Project> {
    return fm.fetchReq<OpsProject.Project, OpsProject.Project>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteProject(req: OpsProject.ProjectReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<OpsProject.ProjectReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}`, {...initReq, method: "DELETE"})
  }
  static CreateWorkflow(req: OpsWorkflow.Workflow, initReq?: fm.InitReq): Promise<OpsWorkflow.Workflow> {
    return fm.fetchReq<OpsWorkflow.Workflow, OpsWorkflow.Workflow>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}/workflows:new`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListWorkflows(req: OpsWorkflow.ListWorkflowsRequest, initReq?: fm.InitReq): Promise<OpsWorkflow.Workflows> {
    return fm.fetchReq<OpsWorkflow.ListWorkflowsRequest, OpsWorkflow.Workflows>(`/api/v1/accounts/${req["project.accountID"]}/tenants/${req["project.tenantID"]}/projects/${req["project.projectID"]}/workflows`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetWorkflow(req: OpsWorkflow.WorkflowReq, initReq?: fm.InitReq): Promise<OpsWorkflow.Workflow> {
    return fm.fetchReq<OpsWorkflow.WorkflowReq, OpsWorkflow.Workflow>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}/workflows/${req["workflowID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "projectID", "workflowID"])}`, {...initReq, method: "GET"})
  }
  static SetWorkflow(req: OpsWorkflow.Workflow, initReq?: fm.InitReq): Promise<OpsWorkflow.Workflow> {
    return fm.fetchReq<OpsWorkflow.Workflow, OpsWorkflow.Workflow>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}/workflows/${req["workflowID"]}`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteWorkflow(req: OpsWorkflow.WorkflowReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<OpsWorkflow.WorkflowReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}/workflows/${req["workflowID"]}`, {...initReq, method: "DELETE"})
  }
  static ActionWorkflow(req: OpsWorkflow.WorkflowAction, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<OpsWorkflow.WorkflowAction, EmptyEmpty.Empty>(`/api.OpsAPI/ActionWorkflow`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListTaskLogs(req: OpsWorkflow.ListTaskLogsRequest, initReq?: fm.InitReq): Promise<OpsWorkflow.TaskLogs> {
    return fm.fetchReq<OpsWorkflow.ListTaskLogsRequest, OpsWorkflow.TaskLogs>(`/api/v1/accounts/${req["workflow.accountID"]}/tenants/${req["workflow.tenantID"]}/projects/${req["workflow.projectID"]}/workflows/${req["workflow.workflowID"]}/tasklogs`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetTaskLog(req: OpsWorkflow.TaskLogReq, initReq?: fm.InitReq): Promise<OpsWorkflow.TaskLog> {
    return fm.fetchReq<OpsWorkflow.TaskLogReq, OpsWorkflow.TaskLog>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}/workflows/${req["workflowID"]}/tasklogs/${req["taskLogID"]}?${fm.renderURLSearchParams(req, ["accountID", "tenantID", "projectID", "workflowID", "taskLogID"])}`, {...initReq, method: "GET"})
  }
  static DeleteTaskLog(req: OpsWorkflow.TaskLogReq, initReq?: fm.InitReq): Promise<EmptyEmpty.Empty> {
    return fm.fetchReq<OpsWorkflow.TaskLogReq, EmptyEmpty.Empty>(`/api/v1/accounts/${req["accountID"]}/tenants/${req["tenantID"]}/projects/${req["projectID"]}/workflows/${req["workflowID"]}/tasklogs/${req["taskLogID"]}`, {...initReq, method: "DELETE"})
  }
}