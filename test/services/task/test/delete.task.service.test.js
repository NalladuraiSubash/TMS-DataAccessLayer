/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in delete task service class
**/

/**
 * Importing all required modules here
 */

const deleteTaskServiceData = require("../data/delete.task.service.data")
const deleteTaskService = require("../../../../src/services/task/delete.task.service")

/**
 * Initializing objects for all the imported classes 
 */
const DeleteTaskService = new deleteTaskService();
const DeleteTaskServiceData = new deleteTaskServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.task.ts.001] | FunctionPath : [src/services/task/delete.task.service.js/deleteOneTask()]", () => {


	test(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.description, async () => {

        const output = await DeleteTaskService.deleteOneTask(
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.input.databaseConnector,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.input.apiID,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.input.config,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC001.output)[2])
	});



    test(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.description, async () => {

        const output = await DeleteTaskService.deleteOneTask(
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.input.databaseConnector,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.input.apiID,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.input.config,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.input.input
        )
        expect(output.data).toBe(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.output.data)
        expect(output.status).toBe(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.output.status)
        expect(output.message).toBe(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC002.output.message)        
	});



    test(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.description, async () => {

        const output = await DeleteTaskService.deleteOneTask(
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.input.databaseConnector,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.input.apiID,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.input.config,
            DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.input.input
        )
        expect(output.status).toBe(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.output.status)
        expect(output.message).toBe(DeleteTaskServiceData.DELETE_ONE_TASK_TS001_TC003.output.message)        
	});

});
