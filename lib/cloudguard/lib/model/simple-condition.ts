/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Simple Condition object.
 */
export interface SimpleCondition extends model.Condition {
  /**
   * parameter Key
   */
  "parameter"?: string;
  /**
   * type of operator
   */
  "operator"?: model.OperatorType;
  /**
   * type of operator
   */
  "value"?: string;
  /**
   * type of value
   */
  "valueType"?: model.ConditionValueType;

  "kind": string;
}

export namespace SimpleCondition {
  export function getJsonObj(obj: SimpleCondition, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Condition.getJsonObj(obj) as SimpleCondition)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "SIMPLE";
}