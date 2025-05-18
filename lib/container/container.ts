/**
 * This should be repalced with a proper config file.
 * a Container is preferred over a class for the sake of simplicity.
 */

import APIClient from "../api/client";

export const CONST_APIV1Url = "/api/";

export const CLIENT_API = new APIClient(CONST_APIV1Url);
