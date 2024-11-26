/**
@CreatedBy : Dinesh
@CreatedDate : 08 Jan 2023
@Description : This File Contains Read Operation Related Function For task Schema
 */

/**
 * Importing all the required modules
 */

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const taskMock = require("../../mocks/task.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

module.exports = class readTaskService {


	
	/**
	* CreatedBy    : Nishanth
	* CreatedTime  : Oct 27 2023
	* Description  : This function read  
	**/
	async readTasks(databaseConnector, apiID, config, input) {

		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return taskMock[apiID] }
			else {
				let output = await databaseConnector.Task.findMany(
					Commons.generatePrismaFindManyInput(input)
				).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if (output.length == 0) {
					return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_TASK_NOT_FOUND);
				} else {
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_TASK_READ_SUCCESSFULLY);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}

	/**
	* CreatedBy    : Nishanth
	* CreatedTime  : Oct 27 2023
	* Description  : This function read  
	**/

	async readOneTask(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return taskMock[apiID] }
			else {
				let output = await databaseConnector.Task.findUnique({
					where: {
						TaskID: parseInt(input.taskid)
					},
				}).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if (output == null) {
					return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_TASK_NOT_FOUND);
				}
				else {
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_TASK_HAS_BEEN_FOUND);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}
	/**
	* CreatedBy    : Nishanth S R
	* CreatedTime  : Nov 04 2023
	* Description  : This function read  
	**/
	async readTaskCount(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return taskMock[apiID] }
			else {
				let output = await databaseConnector.Task.aggregate(
					Commons.generatePrismaAggregateInput(input)

				).catch((error) => {
					console.log(error);
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if (output._count == 0) {
					return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_TASK_NOT_FOUND);
				} else {
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_TASK_HAS_BEEN_FOUND);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}

	}

}