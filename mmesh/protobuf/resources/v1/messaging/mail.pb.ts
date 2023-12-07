/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as MessagingMessage from "./message.pb"

export enum MailTemplate {
  UNDEFINED = "UNDEFINED",
  ACCOUNT_CONFIRMATION = "ACCOUNT_CONFIRMATION",
  EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION",
  PASSWORD_RESET = "PASSWORD_RESET",
  MAGIC_LOGIN_LINK = "MAGIC_LOGIN_LINK",
}

export type MailMessage = {
  messageID?: string
  timestamp?: string
  sender?: MessagingMessage.Contact
  replyTo?: MessagingMessage.Contact
  recipient?: MessagingMessage.Contact
  subject?: string
  htmlBody?: string
  textBody?: string
  providerID?: string
  status?: MessagingMessage.MessageStatus
  retries?: number
  lastModified?: string
}

export type MailMessages = {
  meta?: ResourceList.ListResponse
  mailMessages?: MailMessage[]
}

export type ListMailMessagesRequest = {
  meta?: ResourceList.ListRequest
}

export type SendMailRequest = {
  rcptEmail?: string
  mailTemplate?: MailTemplate
  link?: string
}