/**
 * TenantManager API
 * A description of the TenantManager API
 * OpenAPI spec version: 20200801
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
 * A link between a parent tenancy and a child tenancy.
 */
export interface Link {
  /**
   * OCID of the link.
   */
  "id": string;
  /**
   * OCID of the parent tenancy.
   */
  "parentTenancyId": string;
  /**
   * OCID of the child tenancy
   */
  "childTenancyId": string;
  /**
   * Lifecycle state of the link.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Date-time when this link was created.
   */
  "timeCreated": Date;
  /**
   * Date-time when this link was last updated.
   */
  "timeUpdated"?: Date;
  /**
   * Date-time when this link was terminated.
   */
  "timeTerminated"?: Date;
}

export namespace Link {
  export function getJsonObj(obj: Link): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
