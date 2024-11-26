/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains create operation releated functions for activity schema
**/


/**
 * Importing all the required modules
 */
const { Prisma } = require("@prisma/client");
const commons = require("../../utils/commons");
const messages = require("../../utils/messages");

const activityMock = require("../../mocks/activity.mock.json");


/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();


module.exports = class createActivityService {

	/**
	* CreatedBy    : Nishanth S R
	* CreatedTime  : Oct 27 2023
	* Description  : This function stores a record in activity table
	**/
	async createOneActivity(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return activityMock[apiID] }
			else {
				let duplicateRecord = await databaseConnector.Activity.findMany({
					where: input.filter || "null",
					select: { ActivityID: true }
				}).catch((error) => {
					if (error instanceof Prisma.PrismaClientValidationError) {
						throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
					} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
						throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
					} else {
						throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
					}
				});

				var filters = input.filter

				if (duplicateRecord.length === 0 || Object.keys(filters).length === 0) {

					let output = await databaseConnector.Activity.create({
						data: input.data,
					}).catch((error) => {
						if (error instanceof Prisma.PrismaClientValidationError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else {
							throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
						}
					});
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_ACTIVITY_CREATED_SUCCESSFULLY);
				}
				else {
					throw Commons.generateServiceOutput(null, 409, Messages.MESSAGE_DUPLICATE_RECORD)
				}
			}
		} catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, error.message);
		}

	}
};