
/**
* CreatedBy    : Dinesh
* CreatedTime  : Jan 05 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Jan 05 2022
* Description  : This file contains all the configurations needed for the service
**/

module.exports = class config {

	// Basic Configuration
	TMS_REST_DATA_ACCESS_NAME = "TMS-Rest-Data-Access!";
	TMS_REST_DATA_ACCESS_HOST = "localhost";
	TMS_REST_DATA_ACCESS_PORT = "3000";

	TMS_REST_DATA_ACCESS_USERNAME = "QP0192923232LD";
	TMS_REST_DATA_ACCESS_PASSWORD = "927NBGJJ0283HKA74782";

	// TMS-Rest-Data-Access datatabase Connection Configurations
	TMS_REST_DATA_ACCESS_DEFAULT_DATABASE_CONNECTION_ENABLED = true;

	TMS_REST_DATA_ACCESS_DATABASE_CONNECTIONS = {
		isDefault: true,
		databaseURL: "postgresql://tmsdb11262024_user:2U5EG90pd1mdKOX10fAckc2BQThHutLY@dpg-ct2m2r9u0jms738spek0-a.oregon-postgres.render.com/tmsdb11262024",
		databaseName: "tmsdb11262024"
	};
};