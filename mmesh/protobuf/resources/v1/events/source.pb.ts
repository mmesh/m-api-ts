/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum SourceType {
  UNDEFINED_SOURCE = "UNDEFINED_SOURCE",
  MANAGER = "MANAGER",
  CONTROLLER = "CONTROLLER",
  ROUTER = "ROUTER",
  NODE = "NODE",
  CLI = "CLI",
  WEBUI = "WEBUI",
}

export type Source = {
  type?: SourceType
  controller?: SourceController
  manager?: SourceManager
  router?: SourceRouter
  node?: SourceNode
  cli?: SourceCLI
  webUI?: SourceWebUI
}

export type SourceManager = {
  managerID?: string
}

export type SourceController = {
  controllerID?: string
}

export type SourceRouter = {
  routerID?: string
}

export type SourceNode = {
  accountID?: string
  tenantID?: string
  nodeID?: string
  nodeName?: string
}

export type SourceCLI = {
  clientID?: string
}

export type SourceWebUI = {
  clientID?: string
}