/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console.
 * OpenAPI spec version: 20200107
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The usage store result.
 */
export interface UsageSummary {
  /**
   * The tenancy OCID.
   */
  "tenantId"?: string;
  /**
   * The tenancy name.
   */
  "tenantName"?: string;
  /**
   * The compartment OCID.
   */
  "compartmentId"?: string;
  /**
   * The compartment path, starting from root.
   */
  "compartmentPath"?: string;
  /**
   * The compartment name.
   */
  "compartmentName"?: string;
  /**
   * The service name that is incurring the cost.
   */
  "service"?: string;
  /**
   * The resource name that is incurring the cost.
   */
  "resourceName"?: string;
  /**
   * The resource OCID that is incurring the cost.
   */
  "resourceId"?: string;
  /**
   * The region of the usage.
   */
  "region"?: string;
  /**
   * The availability domain of the usage.
   */
  "ad"?: string;
  /**
   * The resource size being metered.
   */
  "weight"?: number;
  /**
   * The resource shape.
   */
  "shape"?: string;
  /**
   * The SKU part number.
   */
  "skuPartNumber"?: string;
  /**
   * The SKU friendly name.
   */
  "skuName"?: string;
  /**
   * The usage unit.
   */
  "unit"?: string;
  /**
   * The discretionary discount applied to the SKU.
   */
  "discount"?: number;
  /**
   * The SKU list rate (not discount).
   */
  "listRate"?: number;
  /**
   * Platform for the cost.
   */
  "platform"?: string;
  /**
   * The usage start time.
   */
  "timeUsageStarted": Date;
  /**
   * The usage end time.
   */
  "timeUsageEnded": Date;
  /**
   * The computed cost.
   */
  "computedAmount"?: number;
  /**
   * The usage number.
   */
  "computedQuantity"?: number;
  /**
   * The SPM OverageFlag.
   */
  "overagesFlag"?: string;
  /**
   * The price per unit.
   */
  "unitPrice"?: number;
  /**
   * The price currency.
   */
  "currency"?: string;
  /**
   * The subscription ID.
   */
  "subscriptionId"?: string;
  /**
   * The overage usage.
   */
  "overage"?: string;
  /**
   * For grouping, a tag definition. For filtering, a definition and key.
   */
  "tags"?: Array<model.Tag>;
}

export namespace UsageSummary {
  export function getJsonObj(obj: UsageSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
