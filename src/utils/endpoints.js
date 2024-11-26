/**
* CreatedBy   : Nishanth
* CreatedTime : 04 Nov 2023
* Description : This file contains all endpoints for application
 */

module.exports = class endpoints {

	//Common Endpoints
	ENDPOINT_METRICS = "/metrics"

	// Tms endpoint of the REST service
	ENDPOINT_BASE_URL = "/api/rest/tms/dataaccess";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_MODULES */
	ENDPOINT_MODULE_TASK = "/1.0.0/task"
	ENDPOINT_MODULE_USER = "/1.0.0/user"
	ENDPOINT_MODULE_STATUS = "/1.0.0/status"
	ENDPOINT_MODULE_PRIORITY = "/1.0.0/priority"
	ENDPOINT_MODULE_SEVERITY = "/1.0.0/severity"
	ENDPOINT_MODULE_ACTIVITY = "/1.0.0/activity"

	// Endpoint versions for the REST Service
	ENDPOINT_VERSION_1 = "/v1";
	ENDPOINT_VERSION_2 = "/v2";

	/* INJECT_ENDPOINT_FOR_DIFFERENT_TABLES */

	ENDPOINT_TASK = "/task";
	ENDPOINT_TASKS = "/tasks";
	ENDPOINT_ONE_TASK = "/task/:taskid";

	ENDPOINT_USER = "/user";
	ENDPOINT_USERS = "/users";
	ENDPOINT_ONE_USER = "/user/:userid";

	ENDPOINT_STATUS = "/status";
	ENDPOINT_STATUSES = "/statuses";
	ENDPOINT_ONE_STATUS = "/status/:statusid";

	ENDPOINT_PRIORITY = "/priority";
	ENDPOINT_PRIORITIES = "/priorities";
	ENDPOINT_ONE_PRIORITY = "/priority/:priorityid";

	ENDPOINT_SEVERITY = "/severity";
	ENDPOINT_SEVERITIES = "/severities";
	ENDPOINT_ONE_SEVERITY = "/severity/:severityid";

	ENDPOINT_ACTIVITY = "/activity";
	ENDPOINT_ACTIVITIES = "/activities";
	ENDPOINT_ONE_ACTIVITY = "/activity/:activityid";

};