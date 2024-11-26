/** 
* CreatedBy   	: Nishanth
* CreatedTime 	: Nov 02 2023
* Description   : This file contains tests for all the fucntions in create task service class
**/

/**
 * Importing all required modules here
 */

const createTaskServiceData = require("../data/create.task.service.data")
const createTaskService = require("../../../../src/services/task/create.task.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateTaskService = new createTaskService();
const CreateTaskServiceData = new createTaskServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.task.ts.001]", () => {


    test(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.description, async () => {

        const output = await CreateTaskService.createOneTask(
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.input.databaseConnector,
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.input.apiID,
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.input.config,
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC001.output)[2])
    });

    test(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.description, async () => {

        const output = await CreateTaskService.createOneTask(
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.input.databaseConnector,
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.input.apiID,
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.input.config,
            CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.input.input
        )
        expect(output.status).toBe(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.output.status)
        expect(output.message).toBe(CreateTaskServiceData.CREATE_ONE_TASK_TS001_TC002.output.message)
    });

});