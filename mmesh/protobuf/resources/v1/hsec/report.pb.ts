/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as HsecResult from "./result.pb"
export type Report = {
  schemaVersion?: number
  createdAt?: string
  artifactName?: string
  artifactType?: string
  metadata?: Metadata
  results?: HsecResult.Result[]
  cycloneDX?: CycloneDX
}

export type Metadata = {
  size?: string
  OS?: OS
  imageID?: string
  diffIDs?: string[]
  repoTags?: string[]
  repoDigests?: string[]
  imageConfig?: ConfigFile
}

export type OS = {
  family?: string
  name?: string
  EOSL?: boolean
  extended?: boolean
}

export type ConfigFile = {
  architecture?: string
  author?: string
  container?: string
  created?: string
  dockerVersion?: string
  history?: History[]
  OS?: string
  rootFS?: RootFS
  config?: Config
  OSVersion?: string
  variant?: string
  OSFeatures?: string[]
}

export type History = {
  author?: string
  created?: string
  createdBy?: string
  comment?: string
  emptyLayer?: boolean
}

export type RootFS = {
  type?: string
  diffIDs?: Hash[]
}

export type Hash = {
  algorithm?: string
  hex?: string
}

export type Config = {
  attachStderr?: boolean
  attachStdin?: boolean
  attachStdout?: boolean
  cmd?: string[]
  healthcheck?: HealthConfig
  domainName?: string
  entrypoint?: string[]
  env?: string[]
  hostname?: string
  image?: string
  labels?: {[key: string]: string}
  onBuild?: string[]
  openStdin?: boolean
  stdinOnce?: boolean
  tty?: boolean
  user?: string
  volumes?: {[key: string]: string}
  workingDir?: string
  exposedPorts?: {[key: string]: string}
  argsEscaped?: boolean
  networkDisabled?: boolean
  macAddress?: string
  stopSignal?: string
  shell?: string[]
}

export type HealthConfig = {
  test?: string[]
  interval?: string
  timeout?: string
  startPeriod?: string
  retries?: number
}

export type CycloneDX = {
  BOMFormat?: string
  specVersion?: number
  serialNumber?: string
  version?: number
  metadata?: BOMMetadata
  components?: Component[]
}

export type BOMMetadata = {
  timestamp?: string
  component?: Component
}

export type Component = {
  BOMRef?: string
  MIMEType?: string
  type?: string
  name?: string
  version?: string
  packageURL?: string
}