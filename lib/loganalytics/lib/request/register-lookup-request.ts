/**
 *
 *
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
import stream = require("stream");
export interface RegisterLookupRequest extends common.BaseRequest {
  /**
   * The Log Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * type - possible values are Lookup or Dictionary
   */
  "type": RegisterLookupRequest.Type;
  /**
   * file containing data for lookup creation
   */
  "registerLookupContentFileBody": Blob | stream.Readable | ReadableStream | string;
  /**
   * A filter to return only log analytics entities whose name matches the entire name given. The match
   * is case-insensitive.
   *
   */
  "name"?: string;
  /**
   * Description of the fields to get
   */
  "description"?: string;
  /**
   * character Encoding
   */
  "charEncoding"?: string;
  /**
   * is hidden
   */
  "isHidden"?: boolean;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace RegisterLookupRequest {
  export enum Type {
    Lookup = "Lookup",
    Dictionary = "Dictionary"
  }
}