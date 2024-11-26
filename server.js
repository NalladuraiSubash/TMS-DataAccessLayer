/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 23 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 11 2023
* Description  : This file is the entry point for the service
**/

/**
 * Importing all the required modules 
 */
const cors = require("cors");
const compression = require("compression");
const basicAuth = require("express-basic-auth");

const express = require("express");
const config = require("./config");

const commons = require("./src/utils/commons");
const endpoints = require("./src/utils/endpoints");

/**
 * Initializing objects from the imported classes
 */
const RestDataAccess = express();
const Config = new config();
const Commons = new commons();
const Endpoints = new endpoints();

/**
 * Adding middlewares to the express object
 */
RestDataAccess.use(cors());
RestDataAccess.use(compression());
RestDataAccess.use(express.json());

/**
 * Adding get service info endpoint without any authentication
 */
RestDataAccess.get(Endpoints.ENDPOINT_BASE_URL, async (request, response) => {
    let executionStartTime = null; let executionEndTime = null;
    try {
        executionStartTime = await Commons.getCurrentDateTime();
        console.log(`GET SERVICE INFO API EXECUTION STARTS AT (${executionStartTime})`);

        const output = ({
            serviceName: Config.TMS_REST_DATA_ACCESS_NAME,
            serviceHost: Config.TMS_REST_DATA_ACCESS_HOST,
            servicePort: Config.TMS_REST_DATA_ACCESS_PORT,
            // eslint-disable-next-line no-undef
            serviceUpTime: `${process.uptime()} sec(s)`
        });
        response.json(output);

        executionEndTime = await Commons.getCurrentDateTime();
        console.info({
            requestURL: request.originalUrl,
            requestHeaders: request.headers,
            requestBody: request.body,
            responseBody: output,
            executionStartTime: executionStartTime,
            executionEndTime: executionEndTime
        });
        console.log(`GET SERVICE INFO API EXECUTION ENDS AT (${executionEndTime})`);
    }
    catch (error) {
        executionEndTime = await Commons.getCurrentDateTime();
        console.error({
            requestURL: request.originalUrl,
            requestMethod: request.method,
            requestHeaders: request.headers,
            requestBody: request.body,
            responseBody: error,
            executionStartTime: executionStartTime,
            executionEndTime: executionEndTime
        });
    }
});

/**
 * Adding basic authentication middleware based on configuration
 */
RestDataAccess.use(basicAuth({ users: { [Config.TMS_REST_DATA_ACCESS_USERNAME]: Config.TMS_REST_DATA_ACCESS_PASSWORD }, unauthorizedResponse: Commons.getUnauthorizedResponse }));

/* Importing all the controller classes (INJECTED USING CODE GENERATOR) */
const TaskControllerVersionOne = require("./src/controllers/version-one/task.controller");
const UserControllerVersionOne = require("./src/controllers/version-one/user.controller");
const StatusControllerVersionOne = require("./src/controllers/version-one/status.controller");
const PriorityControllerVersionOne = require("./src/controllers/version-one/priority.controller");
const SeverityControllerVersionOne = require("./src/controllers/version-one/severity.controller");
const ActivityControllerVersionOne = require("./src/controllers/version-one/activity.controller");

/* Inject the endpoints to the respective controller modules */

RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_TASK + Endpoints.ENDPOINT_VERSION_1, TaskControllerVersionOne);
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_USER + Endpoints.ENDPOINT_VERSION_1, UserControllerVersionOne);
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_STATUS + Endpoints.ENDPOINT_VERSION_1, StatusControllerVersionOne);
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_PRIORITY + Endpoints.ENDPOINT_VERSION_1, PriorityControllerVersionOne);
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_SEVERITY + Endpoints.ENDPOINT_VERSION_1, SeverityControllerVersionOne);
RestDataAccess.use(Endpoints.ENDPOINT_BASE_URL + Endpoints.ENDPOINT_MODULE_ACTIVITY + Endpoints.ENDPOINT_VERSION_1, ActivityControllerVersionOne);

module.exports = RestDataAccess;