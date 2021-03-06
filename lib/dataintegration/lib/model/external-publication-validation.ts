/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about external published task validation.
 */
export interface ExternalPublicationValidation {
  /**
   * Total number of validation messages.
   */
  "totalMessageCount"?: number;
  /**
   * Total number of validation error messages.
   */
  "errorMessageCount"?: number;
  /**
   * Total number of validation warning messages.
   */
  "warnMessageCount"?: number;
  /**
   * Total number of validation information messages.
   */
  "infoMessageCount"?: number;
  /**
   * Detailed information of the data flow object validation.
   */
  "validationMessages"?: { [key: string]: Array<model.ValidationMessage> };
  /**
   * Objects use a 36 character key as unique ID. It is system generated and cannot be modified.
   */
  "key"?: string;
}

export namespace ExternalPublicationValidation {
  export function getJsonObj(obj: ExternalPublicationValidation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
