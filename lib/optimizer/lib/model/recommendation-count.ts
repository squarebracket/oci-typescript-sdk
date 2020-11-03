/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The count of recommendations in a category, grouped by importance.
 */
export interface RecommendationCount {
  /**
   * The level of importance assigned to the recommendation.
   */
  "importance": model.Importance;
  /**
   * The count of recommendations.
   */
  "count": number;
}

export namespace RecommendationCount {
  export function getJsonObj(obj: RecommendationCount): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
