/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"

export enum WebhookType {
  WEBHOOK_TYPE_UNDEFINED = "WEBHOOK_TYPE_UNDEFINED",
  WEBHOOK_TYPE_WORKFLOW = "WEBHOOK_TYPE_WORKFLOW",
}

export enum WebhookAction {
  WEBHOOK_ACTION_UNDEFINED = "WEBHOOK_ACTION_UNDEFINED",
  WEBHOOK_ACTION_WORKFLOW_REVIEWED_TRUE = "WEBHOOK_ACTION_WORKFLOW_REVIEWED_TRUE",
  WEBHOOK_ACTION_WORKFLOW_REVIEWED_FALSE = "WEBHOOK_ACTION_WORKFLOW_REVIEWED_FALSE",
  WEBHOOK_ACTION_WORKFLOW_APPROVED_TRUE = "WEBHOOK_ACTION_WORKFLOW_APPROVED_TRUE",
  WEBHOOK_ACTION_WORKFLOW_APPROVED_FALSE = "WEBHOOK_ACTION_WORKFLOW_APPROVED_FALSE",
  WEBHOOK_ACTION_ERROR_EXPIRED_WEBHOOK = "WEBHOOK_ACTION_ERROR_EXPIRED_WEBHOOK",
  WEBHOOK_ACTION_ERROR_BAD_REQUEST = "WEBHOOK_ACTION_ERROR_BAD_REQUEST",
  WEBHOOK_ACTION_ERROR_INTERNAL_ERROR = "WEBHOOK_ACTION_ERROR_INTERNAL_ERROR",
}

export type Webhook = {
  webhookID?: string
  callbackToken?: string
  type?: WebhookType
  action?: WebhookAction
  payload?: Uint8Array
  email?: string
  expiration?: string
  used?: boolean
}

export type Webhooks = {
  meta?: ResourceList.ListResponse
  webhooks?: Webhook[]
}

export type ListWebhooksRequest = {
  meta?: ResourceList.ListRequest
}