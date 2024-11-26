

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update task service class
**/

/**
 * Importing all required modules here
 */

const updateTaskServiceData = require("../data/update.task.service.data")
const updateTaskService = require("../../../../src/services/task/update.task.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateTaskService = new updateTaskService();
const UpdateTaskServiceData = new updateTaskServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.task.ts.001] | FunctionPath : [src/services/task/update.task.service.js/updateTask()]", () => {

	test(UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.description, async () => {

        const output = await UpdateTaskService.updateTask(
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.input.databaseConnector,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.input.apiID,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.input.config,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateTaskServiceData.UPDATE_TASK_TS001_TC001.output)[2])
	});

    test(UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.description, async () => {

        const output = await UpdateTaskService.updateTask(
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.input.databaseConnector,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.input.apiID,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.input.config,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateTaskServiceData.UPDATE_TASK_TS001_TC002.output.message)        
	});

    test(UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.description, async () => {

        const output = await UpdateTaskService.updateTask(
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.input.databaseConnector,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.input.apiID,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.input.config,
            UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateTaskServiceData.UPDATE_TASK_TS001_TC003.output.message)        
	});

});
