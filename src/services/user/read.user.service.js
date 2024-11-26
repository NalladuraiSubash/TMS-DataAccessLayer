/**
@CreatedBy : Dinesh
@CreatedDate : 08 Jan 2023
@Description : This File Contains Read Operation Related Function For user Schema
 */

/**
 * Importing all the required modules
 */

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const userMock = require("../../mocks/user.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

module.exports = class readUserService {

	/**
	* CreatedBy    : Nishanth
	* CreatedTime  : Oct 27 2023
	* Description  : This function read  
	**/
	async readUsers(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return userMock[apiID] }
			else {
				let output = await databaseConnector.User.findMany(
					Commons.generatePrismaFindManyInput(input)
				).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if (output.length == 0) {
					return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_USER_NOT_FOUND);
				} else {
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_READ_SUCCESSFULLY);
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

	async readOneUser(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return userMock[apiID] }
			else {
				let output = await databaseConnector.User.findUnique({
					where: {
						UserID: parseInt(input.userid)
					},
				}).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if (output == null) {
					return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_USER_NOT_FOUND);
				}
				else {
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_HAS_BEEN_FOUND);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}

}