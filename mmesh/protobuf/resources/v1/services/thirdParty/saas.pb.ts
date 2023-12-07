/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type GitHub = {
  enabled?: boolean
  accessToken?: string
  webhooksSecret?: string
}

export type PagerDuty = {
  enabled?: boolean
  integrationKey?: string
}

export type Slack = {
  enabled?: boolean
  alertsWebhook?: string
  opsWebhook?: string
}

export type ClickUp = {
  enabled?: boolean
  apiKey?: string
  settingsListURL?: string
}