/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains all common functions for TmsRestDataAccess Service
**/

/**
 * Importing all the required modules
 */
const lodash = require('lodash');
const { PrismaClient } = require("@prisma/client");

const config = require("../../config");
const messages = require("../utils/messages");
const apiConfig = require("../../api.config.json");


/**
 * Initializing objects for all the imported classes
 */
const Config = new config();
const Messages = new messages();

/**
 * Initializing the database client object
 */
let databaseClient = null;

module.exports = class commons {

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 04 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 04 2022
	* Description  : This function gets the current datetime
	**/
	async getCurrentDateTime() {
		try {
			return new Date().toISOString();
		} catch (error) {
			console.log(error);
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Nov 18 2022
	* Description  : This function handles unauthorized response
	* (NOTE : Tried reusing the generateControllerOutput function to generate the statandard api response it does not work 
	*  for some reason, so have implemented it like this)
	**/
	getUnauthorizedResponse(request) {
		let output = {
			outputResponse: null,
			serviceResponse: {
				status: 401,
				message: Messages.MESSAGE_BASIC_AUTH_FAILED,
				timestamp: new Date().toLocaleString(),
				endpoint: request.originalUrl
			}
		};
		return output
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 23 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 23 2022
	* Description  : This function generates service response object for all APIs
	**/
	generateControllerOutput(response, data, status, message, endpoint) {
		let output = {
			outputResponse: data,
			serviceResponse: {
				status: status,
				message: message,
				timestamp: new Date().toLocaleString(),
				endpoint: endpoint
			}
		};
		if (response === null) {
			return output;
		} else {
			response.status(status);
			return output;
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 23 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 23 2022
	* Description  : This function generates service response o
	**/
	generateServiceOutput(data, status, message) {
		let output = {
			data: data,
			status: status,
			message: message
		};
		return output
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 23 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 23 2022
	* Description  : This function generates service response o
	**/
	generateServiceOutputForAvalibalityNotEnabled() {
		let output = this.generateServiceOutput(null, 400, Messages.MESSAGE_AVAILABILITY_NOT_ENABLED);
		return output
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function parses the JSON with bigint in the object 
	* (Without object generated by prisma cannot be converted to json)
	**/
	parseControllerOutput(input) {
		const output = JSON.parse(JSON.stringify(input, (_, v) => typeof v === "bigint" ? `${v}n` : v).replace(/"(-?\d+)n"/g, (_, a) => a));
		console.log("console-7")
		return output;
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function executes controller functions
	**/
	async executeController(request, response, apiID, serviceFunction) {
		// Initializing global variables
		let executionStartTime = null; let executionEndTime = null; let serviceOutput = null;
		try {
			executionStartTime = await this.getCurrentDateTime();
			console.log(`${apiConfig[apiID].Name} API EXECUTION STARTS AT (${executionStartTime})`);
			const databaseConnection = this.getDatabaseConnection();
			const databaseConnector = this.generateDatabaseConnector(databaseConnection);

			if (apiID.includes("readone") || apiID.includes("deleteone")) {
				serviceOutput = await serviceFunction(databaseConnector, apiID, apiConfig[apiID], request.params);
			}
			else {
				serviceOutput = await serviceFunction(databaseConnector, apiID, apiConfig[apiID], request.body);
			}
			console.log(`${apiConfig[apiID].Name} SERVICE OUTPUT : (${serviceOutput})`);
			const controllerOutput = this.generateControllerOutput(response, serviceOutput.data, serviceOutput.status, serviceOutput.message, request.originalUrl);
			response.json(this.parseControllerOutput(controllerOutput));
			executionEndTime = await this.getCurrentDateTime();
			console.log(`${apiConfig[apiID].Name} API EXECUTION ENDS AT (${executionEndTime})`);
			console.info({
				requestURL: request.originalUrl,
				requestMethod: request.method,
				requestHeaders: request.headers,
				requestBody: JSON.stringify(request.body),
				responseBody: JSON.stringify(this.parseControllerOutput(controllerOutput)),
				executionStartTime: executionStartTime,
				executionEndTime: executionEndTime
			});
		} catch (error) {
			console.error("ERROR IN EXECUTE CONTROLLER FUNCTION : ", error)
			if (error.status == null) {
				let controllerOutput = this.generateControllerOutput(response, null, 500, error.message, request.originalUrl);
				response.json(controllerOutput);
			}
			let controllerOutput = this.generateControllerOutput(response, error.output ? error.data : null, error.status, error.message, request.originalUrl);
			response.json(this.parseControllerOutput(controllerOutput));
			executionEndTime = await this.getCurrentDateTime();
			console.error({
				requestURL: request.originalUrl,
				requestMethod: request.method,
				requestHeaders: request.headers,
				requestBody: JSON.stringify(request.body),
				responseBody: JSON.stringify(this.parseControllerOutput(controllerOutput)),
				executionStartTime: executionStartTime,
				executionEndTime: executionEndTime
			});
		}
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function gets  the db connection string based on tenant and merchant key
	**/
	getDatabaseConnection() {
		const databaseConnection = Config.TMS_REST_DATA_ACCESS_DATABASE_CONNECTIONS
		return databaseConnection;
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function get the default database to connect
	**/
	async getDefaultDatabaseConnection() {
		try {
			const databaseConnection = Config.TMS_REST_DATA_ACCESS_DATABASE_CONNECTIONS;
			if (databaseConnection.isDefault == true) {
				return databaseConnection;
			}
		} catch (error) {
			throw { data: null, status: 500, message: error.message };
		}
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* ModifiedBy   : Dinesh
	* ModifiedTime : Dec 26 2022
	* Description  : This function generates the prisma database connection statically and stores in a variable
	**/
	async generateDefaultDatabaseConnector() {
		try {
			const databaseConnection = await this.getDefaultDatabaseConnection();
			const databaseURL = databaseConnection.databaseURL;
			databaseClient = new PrismaClient(
				{
					datasources: {
						db: {
							url: databaseURL,
						},
					},
				}
			);
			console.log(`${Messages.MESSAGE_CONNECTED_TO_DEFAULT_DATABASE} : ${JSON.stringify(databaseConnection)}`);
		} catch (error) {
			throw { output: null, status: 500, message: error.message };
		}
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Dec 26 2022
	* Description  : This function generates database connection object
	**/
	generateDatabaseConnector(databaseConnection) {
		try {
			if (Config.TMS_REST_DATA_ACCESS_DEFAULT_DATABASE_CONNECTION_ENABLED) {
				return databaseClient;
			} else {
				const databaseConnector = new PrismaClient(
					{
						datasources: {
							db: {
								url: databaseConnection.databaseURL,
							},
						},
					}
				);
				return databaseConnector;
			}
		} catch (error) {
			throw { output: null, status: 500, message: error.message };
		}
	}


	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Jan 09 2023
	* ModifiedBy   : Dinesh
	* ModifiedTime : Jan 09 2023
	* Description  : This function returns relevant query object for given request for read multiple api 
	**/
	generatePrismaFindManyInput(input) {
		let output
		try {
			let { filter, fields, limit, page, sort } = input
			page = limit * page;
			if (lodash.isEmpty(input)) {
				throw { data: null, status: 400, message: Messages.MESSAGE_INVALID_FILTER_OBJECT }
			} else if (fields && Object.keys(fields).length === 0) {
				output = {
					where: filter,
					take: limit,
					skip: page,
					orderBy: sort
				}
			}
			else {
				output = {
					where: filter,
					select: fields,
					take: limit,
					skip: page,
					orderBy: sort
				}
			}
			return output
		} catch (error) {
			throw { data: null, status: 500, message: error.message }
		}
	}

	/**
	* CreatedBy    : Dinesh
	* CreatedTime  : Jan 09 2023
	* ModifiedBy   : Dinesh
	* ModifiedTime : Jan 09 2023
	* Description  : This function returns relevant query object for given request for read count api 
	**/

	generatePrismaAggregateInput(input) {
		let output
		try {
			let { filter } = input
			output = {
				where: filter,
				_count: true
			}
			return output
		} catch (error) {
			throw { data: null, status: 500, message: error.message }
		}
	}
};