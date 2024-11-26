/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 23 2022
* ModifiedBy   : Dinesh 
* ModifiedTime : Jan 23 2022
* Description  : This file is the entry point for the service
**/

/**
 * Importing all the required modules
 */
const config = require("./config");

const messages = require("./src/utils/messages");
const commons = require("./src/utils/commons");

const RestDataAccess = require("./server");

/**
 * Initializing objects from the imported classes
 */
const Config = new config();
const Commons = new commons();
const Messages = new messages();


/**
 * Connect with the Database if static database connection if dynamic database connection is enabled
 */
if (Config.TMS_REST_DATA_ACCESS_DEFAULT_DATABASE_CONNECTION_ENABLED) {
	Commons.generateDefaultDatabaseConnector();
}


/**
 * Starting the service based on the security configuration
 */
RestDataAccess.listen(Config.TMS_REST_DATA_ACCESS_PORT);
console.log(Messages.MESSAGE_SERVICE_RUNNING_SUCESSFULLY + ` {${Config.TMS_REST_DATA_ACCESS_HOST}` + ":" + `${Config.TMS_REST_DATA_ACCESS_PORT}} `);