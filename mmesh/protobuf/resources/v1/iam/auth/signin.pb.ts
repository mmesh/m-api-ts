/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as AuthAuth from "./auth.pb"

export enum SigninMethod {
  SIGNIN_BY_EMAIL = "SIGNIN_BY_EMAIL",
  SIGNIN_BY_SMS = "SIGNIN_BY_SMS",
  SIGNIN_BY_WHATSAPP = "SIGNIN_BY_WHATSAPP",
}

export enum AuthenticationResult {
  AUTHENTICATION_SUCCESSFUL = "AUTHENTICATION_SUCCESSFUL",
  AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED",
  ACCOUNT_DISABLED = "ACCOUNT_DISABLED",
  USER_DISABLED = "USER_DISABLED",
}

export enum SignoutResult {
  SIGNOUT_SUCCESSFUL = "SIGNOUT_SUCCESSFUL",
  SIGNOUT_FAILED = "SIGNOUT_FAILED",
}

export type OTPSigninRequest = {
  userEmail?: string
  method?: SigninMethod
  IPAddress?: string
  userAgent?: string
}

export type OTPSigninResponse = {
  userID?: string
  methodID?: string
  userCreated?: boolean
}

export type LoginRequest = {
  userToken?: string
}

export type OTPAuthenticationRequest = {
  methodID?: string
  code?: string
  sessionToken?: string
  IPAddress?: string
  userAgent?: string
}

export type AuthenticationResponse = {
  result?: AuthenticationResult
  authKey?: AuthAuth.AuthKey
  authExpiresAt?: string
  accountID?: string
  locationID?: string
  federationID?: string
  userID?: string
  isAdmin?: boolean
  setupRequired?: boolean
}

export type SignoutRequest = {
  accountID?: string
  userID?: string
  sessionID?: string
  sessionToken?: string
}

export type SignoutResponse = {
  result?: SignoutResult
}

export type SetUserEmailRequest = {
  accountID?: string
  userID?: string
  email?: string
}

export type VerifyUserEmailRequest = {
  accountID?: string
  userID?: string
  email?: string
  emailID?: string
  code?: string
  IPAddress?: string
  userAgent?: string
}