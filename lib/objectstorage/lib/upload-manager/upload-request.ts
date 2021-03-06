/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Content, RequestDetails } from "./types";

/*
 * Interface for Upload manager Request
 */
export interface UploadRequest {
  /*
   *  contains one of the ContenTypes (blob or filepath)
   */
  content: Content;
  /*
   * request details for upload manager
   */
  requestDetails: RequestDetails;
}
