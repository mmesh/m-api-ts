/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Layer = {
  digest?: string
  diffID?: string
  createdBy?: string
}

export type Location = {
  startLine?: number
  endLine?: number
}

export type Code = {
  lines?: Line[]
}

export type Line = {
  number?: number
  content?: string
  isCause?: boolean
  annotation?: string
  truncated?: boolean
  highlighted?: string
  firstCause?: boolean
  lastCause?: boolean
}