/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Blob = {
  data?: Uint8Array
}

export type Chunk = {
  sizeInBytes?: string
  chunkChecksum?: Uint8Array
  data?: Uint8Array
  isLastChunk?: boolean
  payloadChecksum?: Uint8Array
}