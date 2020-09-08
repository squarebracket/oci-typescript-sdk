/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * EfdRegexResult
 */
export interface EfdRegexResult {
  /**
   * baseFieldName
   */
  "baseFieldName"?: string;
  /**
   * id
   */
  "id"?: number;
  "matchResult"?: model.RegexMatchResult;
  /**
   * parsedFieldCount
   */
  "parsedFieldCount"?: number;
  /**
   * parsedFields
   */
  "parsedFields"?: { [key: string]: string };
  /**
   * regex
   */
  "regex"?: string;
  /**
   * status
   */
  "status"?: string;
  /**
   * statusDescription
   */
  "statusDescription"?: string;
  /**
   * isValidRegexSyntax
   */
  "isValidRegexSyntax"?: boolean;
  /**
   * violations
   */
  "violations"?: Array<model.Violation>;
}

export namespace EfdRegexResult {
  export function getJsonObj(obj: EfdRegexResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchResult": obj.matchResult
          ? model.RegexMatchResult.getJsonObj(obj.matchResult)
          : undefined,

        "violations": obj.violations
          ? obj.violations.map(item => {
              return model.Violation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}