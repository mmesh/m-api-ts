/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as EventsSource from "./source.pb"

export enum EventType {
  UNDEFINED_TYPE = "UNDEFINED_TYPE",
  ALERT = "ALERT",
  CHANGE = "CHANGE",
}

export enum Class {
  UNDEFINED_CLASS = "UNDEFINED_CLASS",
  BILLING = "BILLING",
  DATABASE = "DATABASE",
  NETWORK = "NETWORK",
  SECURITY = "SECURITY",
  CONFIGURATION = "CONFIGURATION",
  HOST = "HOST",
  WORKFLOW = "WORKFLOW",
  KUBERNETES = "KUBERNETES",
  USER_ACTIVITY = "USER_ACTIVITY",
  EXTERNAL = "EXTERNAL",
}

export enum Group {
  UNDEFINED_GROUP = "UNDEFINED_GROUP",
  ROUTING = "ROUTING",
  IAM = "IAM",
  HOST_METRICS = "HOST_METRICS",
  WORKFLOW_TASK = "WORKFLOW_TASK",
  WEBHOOK = "WEBHOOK",
  THIRD_PARTY_INTEGRATION = "THIRD_PARTY_INTEGRATION",
}

export enum Severity {
  UNDEFINED_SEVERITY = "UNDEFINED_SEVERITY",
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  CRITICAL = "CRITICAL",
}

export enum ActionType {
  UNDEFINED_ACTION = "UNDEFINED_ACTION",
  TRIGGER = "TRIGGER",
  ACKNOWLEDGE = "ACKNOWLEDGE",
  RESOLVE = "RESOLVE",
}

export enum Status {
  UNDEFINED_STATUS = "UNDEFINED_STATUS",
  TRIGGERED = "TRIGGERED",
  ACKNOWLEDGED = "ACKNOWLEDGED",
  RESOLVED = "RESOLVED",
}

export enum EventResult {
  UNKNOWN_RESULT = "UNKNOWN_RESULT",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export type Event = {
  eventID?: string
  accountAlert?: boolean
  accountID?: string
  timestamp?: string
  type?: EventType
  source?: EventsSource.Source
  class?: Class
  group?: Group
  component?: string
  severity?: Severity
  actionType?: ActionType
  summary?: string
  customDetails?: {[key: string]: string}
}