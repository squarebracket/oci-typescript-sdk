/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * An Analytics Cluster Node is a compute host that is part of an Analytics Cluster.
 *
 */
export interface AnalyticsClusterNode {
  /**
   * The ID of the node within MySQL Analytics Cluster.
   */
  "nodeId": string;
  /**
   * The current state of the MySQL Analytics Cluster node.
   */
  "lifecycleState": AnalyticsClusterNode.LifecycleState;
  /**
   * The date and time the MySQL Analytics Cluster node was created, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The date and time the MySQL Analytics Cluster node was updated, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeUpdated"?: Date;
}

export namespace AnalyticsClusterNode {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AnalyticsClusterNode): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}