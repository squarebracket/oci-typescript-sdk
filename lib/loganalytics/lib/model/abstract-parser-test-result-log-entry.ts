/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * AbstractParserTestResultLogEntry
 */
export interface AbstractParserTestResultLogEntry {
  /**
   * extra info attributes
   */
  "extraInfoAttributes"?: { [key: string]: string };
  /**
   * field name value map
   */
  "fieldNameValueMap"?: { [key: string]: string };
  /**
   * field position value map
   */
  "fieldPositionValueMap"?: { [key: string]: string };
  /**
   * fields
   */
  "fields"?: { [key: string]: string };
  /**
   * log entry
   */
  "logEntry"?: string;
  /**
   * match status
   */
  "matchStatus"?: string;
  /**
   * match status description
   */
  "matchStatusDescription"?: string;
}

export namespace AbstractParserTestResultLogEntry {
  export function getJsonObj(obj: AbstractParserTestResultLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
