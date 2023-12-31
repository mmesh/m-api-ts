/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ResourceList from "../resource/list.pb"
import * as ServicesProvider from "./provider.pb"

export enum PricingModel {
  PRICING_FREE = "PRICING_FREE",
  PRICING_CUSTOM = "PRICING_CUSTOM",
  PRICING_FIXED = "PRICING_FIXED",
  PRICING_HOURLY = "PRICING_HOURLY",
  PRICING_DAILY = "PRICING_DAILY",
  PRICING_WEEKLY = "PRICING_WEEKLY",
  PRICING_MONTHLY = "PRICING_MONTHLY",
  PRICING_YEARLY = "PRICING_YEARLY",
}

export enum ProductSLA {
  BEST_EFFORT = "BEST_EFFORT",
  BASIC = "BASIC",
  PLUS = "PLUS",
  BUSINESS = "BUSINESS",
  ENTERPRISE = "ENTERPRISE",
}

export enum ProductClass {
  CLASS_UNSPECIFIED = "CLASS_UNSPECIFIED",
  CLASS_CLOUD = "CLASS_CLOUD",
  CLASS_SERVICE = "CLASS_SERVICE",
}

export enum CloudCategory {
  CLOUD_UNSPECIFIED = "CLOUD_UNSPECIFIED",
  CLOUD_NETWORK = "CLOUD_NETWORK",
  CLOUD_COMPUTE = "CLOUD_COMPUTE",
  CLOUD_STORAGE = "CLOUD_STORAGE",
  CLOUD_APP = "CLOUD_APP",
  CLOUD_DATABASE = "CLOUD_DATABASE",
  CLOUD_FUNCTION = "CLOUD_FUNCTION",
}

export enum CloudType {
  CLOUD_TYPE_UNSPECIFIED = "CLOUD_TYPE_UNSPECIFIED",
  CLOUD_NETWORK_BANDWIDTH = "CLOUD_NETWORK_BANDWIDTH",
  CLOUD_COMPUTE_INSTANCE = "CLOUD_COMPUTE_INSTANCE",
  CLOUD_COMPUTE_KUBERNETES_CLUSTER = "CLOUD_COMPUTE_KUBERNETES_CLUSTER",
  CLOUD_COMPUTE_KUBERNETES_NODE = "CLOUD_COMPUTE_KUBERNETES_NODE",
  CLOUD_COMPUTE_NOMAD_CLUSTER = "CLOUD_COMPUTE_NOMAD_CLUSTER",
  CLOUD_STORAGE_VOLUME = "CLOUD_STORAGE_VOLUME",
  CLOUD_APP_CUSTOM = "CLOUD_APP_CUSTOM",
  CLOUD_DATABASE_REDIS = "CLOUD_DATABASE_REDIS",
  CLOUD_FUNCTION_LAMBDA = "CLOUD_FUNCTION_LAMBDA",
}

export enum ServiceCategory {
  SERVICE_UNSPECIFIED = "SERVICE_UNSPECIFIED",
  SERVICE_ADVISORY_SERVICE = "SERVICE_ADVISORY_SERVICE",
  SERVICE_MANAGED_SERVICE = "SERVICE_MANAGED_SERVICE",
  SERVICE_INFRASTRUCTURE_PROJECT = "SERVICE_INFRASTRUCTURE_PROJECT",
  SERVICE_AUTOMATION_PROJECT = "SERVICE_AUTOMATION_PROJECT",
  SERVICE_SOFTWARE_DEVELOPMENT = "SERVICE_SOFTWARE_DEVELOPMENT",
  SERVICE_PROJECT_MANAGEMENT = "SERVICE_PROJECT_MANAGEMENT",
  SERVICE_SPECIAL_PROJECT = "SERVICE_SPECIAL_PROJECT",
  SERVICE_SPECIAL_TASK = "SERVICE_SPECIAL_TASK",
}

export enum ServiceType {
  SERVICE_TYPE_UNSPECIFIED = "SERVICE_TYPE_UNSPECIFIED",
  SERVICE_ADVISORY_SERVICE_ARCHITECTURE = "SERVICE_ADVISORY_SERVICE_ARCHITECTURE",
  SERVICE_ADVISORY_SERVICE_SUPPORT = "SERVICE_ADVISORY_SERVICE_SUPPORT",
  SERVICE_MANAGED_SERVICE_CLOUD = "SERVICE_MANAGED_SERVICE_CLOUD",
  SERVICE_MANAGED_SERVICE_ONPREM = "SERVICE_MANAGED_SERVICE_ONPREM",
  SERVICE_MANAGED_SERVICE_INFRASTRUCTURE_MAINTENANCE = "SERVICE_MANAGED_SERVICE_INFRASTRUCTURE_MAINTENANCE",
  SERVICE_MANAGED_SERVICE_SOFTWARE_MAINTENANCE = "SERVICE_MANAGED_SERVICE_SOFTWARE_MAINTENANCE",
  SERVICE_INFRASTRUCTURE_PROJECT_NETWORK = "SERVICE_INFRASTRUCTURE_PROJECT_NETWORK",
  SERVICE_INFRASTRUCTURE_PROJECT_CLOUD = "SERVICE_INFRASTRUCTURE_PROJECT_CLOUD",
  SERVICE_INFRASTRUCTURE_PROJECT_ONPREM = "SERVICE_INFRASTRUCTURE_PROJECT_ONPREM",
  SERVICE_INFRASTRUCTURE_PROJECT_MIGRATION = "SERVICE_INFRASTRUCTURE_PROJECT_MIGRATION",
  SERVICE_AUTOMATION_PROJECT_SIMPLE = "SERVICE_AUTOMATION_PROJECT_SIMPLE",
  SERVICE_AUTOMATION_PROJECT_COMPLEX = "SERVICE_AUTOMATION_PROJECT_COMPLEX",
  SERVICE_SOFTWARE_DEVELOPMENT_SIMPLE = "SERVICE_SOFTWARE_DEVELOPMENT_SIMPLE",
  SERVICE_SOFTWARE_DEVELOPMENT_COMPLEX = "SERVICE_SOFTWARE_DEVELOPMENT_COMPLEX",
  SERVICE_SOFTWARE_DEVELOPMENT_SUPPORT = "SERVICE_SOFTWARE_DEVELOPMENT_SUPPORT",
  SERVICE_SOFTWARE_DEVELOPMENT_MAINTENANCE = "SERVICE_SOFTWARE_DEVELOPMENT_MAINTENANCE",
  SERVICE_SOFTWARE_DEVELOPMENT_FEATURE_REQUEST = "SERVICE_SOFTWARE_DEVELOPMENT_FEATURE_REQUEST",
  SERVICE_PROJECT_MANAGEMENT_SIMPLE = "SERVICE_PROJECT_MANAGEMENT_SIMPLE",
  SERVICE_PROJECT_MANAGEMENT_COMPLEX = "SERVICE_PROJECT_MANAGEMENT_COMPLEX",
  SERVICE_SPECIAL_PROJECT_SIMPLE = "SERVICE_SPECIAL_PROJECT_SIMPLE",
  SERVICE_SPECIAL_PROJECT_COMPLEX = "SERVICE_SPECIAL_PROJECT_COMPLEX",
  SERVICE_SPECIAL_TASK_SIMPLE = "SERVICE_SPECIAL_TASK_SIMPLE",
  SERVICE_SPECIAL_TASK_COMPLEX = "SERVICE_SPECIAL_TASK_COMPLEX",
  SERVICE_SPECIAL_TASK_INCIDENT_RESPONSE = "SERVICE_SPECIAL_TASK_INCIDENT_RESPONSE",
  SERVICE_SPECIAL_TASK_SECURITY_ASSESSMENT = "SERVICE_SPECIAL_TASK_SECURITY_ASSESSMENT",
  SERVICE_SPECIAL_TASK_HEALTH_CHECKING = "SERVICE_SPECIAL_TASK_HEALTH_CHECKING",
  SERVICE_SPECIAL_TASK_COMPLIANCE_ASSESSMENT = "SERVICE_SPECIAL_TASK_COMPLIANCE_ASSESSMENT",
}

export enum ServiceScope {
  SCOPE_UNDEFINED = "SCOPE_UNDEFINED",
  SCOPE_ALL = "SCOPE_ALL",
  SCOPE_DESIGN = "SCOPE_DESIGN",
  SCOPE_IMPLEMENTATION = "SCOPE_IMPLEMENTATION",
  SCOPE_MAINTENANCE = "SCOPE_MAINTENANCE",
  SCOPE_SUPPORT = "SCOPE_SUPPORT",
}

export type Product = {
  serviceID?: string
  providerID?: string
  productID?: string
  stripeProductID?: string
  name?: string
  description?: string
  unitLabel?: string
  available?: boolean
  pricingModel?: PricingModel
  priceFixed?: number
  priceHourly?: number
  priceDaily?: number
  priceWeekly?: number
  priceMonthly?: number
  priceYearly?: number
  SLA?: ProductSLA
  class?: ProductClass
  cloudCategory?: CloudCategory
  cloudType?: CloudType
  serviceCategory?: ServiceCategory
  serviceType?: ServiceType
  serviceScope?: ServiceScope
  locations?: string[]
  langs?: string[]
  opMgrs?: string[]
  salesReps?: string[]
  creationDate?: string
  lastModified?: string
}

export type Products = {
  meta?: ResourceList.ListResponse
  products?: Product[]
}

export type ListProductsRequest = {
  meta?: ResourceList.ListRequest
  provider?: ServicesProvider.Provider
}