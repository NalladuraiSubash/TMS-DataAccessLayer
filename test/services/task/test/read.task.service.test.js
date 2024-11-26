/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read Task service class
**/

/**
 * Importing all required modules here
 */

const readTaskServiceData = require("../data/read.task.service.data")
const readTaskService = require("../../../../src/services/task/read.task.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadTaskService = new readTaskService();
const ReadTaskServiceData = new readTaskServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.task.ts.001] | FunctionPath : [src/services/task/read.contianer.service.js/readTasks()]", () => {


	test(ReadTaskServiceData.READ_TASK_TS001_TC001.description, async () => {

        const output = await ReadTaskService.readTasks(
            ReadTaskServiceData.READ_TASK_TS001_TC001.input.databaseConnector,
            ReadTaskServiceData.READ_TASK_TS001_TC001.input.apiID,
            ReadTaskServiceData.READ_TASK_TS001_TC001.input.config,
            ReadTaskServiceData.READ_TASK_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadTaskServiceData.READ_TASK_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadTaskServiceData.READ_TASK_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadTaskServiceData.READ_TASK_TS001_TC001.output)[2])
	});



    test(ReadTaskServiceData.READ_TASK_TS001_TC002.description, async () => {

        const output = await ReadTaskService.readTasks(
            ReadTaskServiceData.READ_TASK_TS001_TC002.input.databaseConnector,
            ReadTaskServiceData.READ_TASK_TS001_TC002.input.apiID,
            ReadTaskServiceData.READ_TASK_TS001_TC002.input.config,
            ReadTaskServiceData.READ_TASK_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadTaskServiceData.READ_TASK_TS001_TC002.output.data)
        expect(output.status).toBe(ReadTaskServiceData.READ_TASK_TS001_TC002.output.status)
        expect(output.message).toBe(ReadTaskServiceData.READ_TASK_TS001_TC002.output.message)        
	});



    test(ReadTaskServiceData.READ_TASK_TS001_TC003.description, async () => {

        const output = await ReadTaskService.readTasks(
            ReadTaskServiceData.READ_TASK_TS001_TC003.input.databaseConnector,
            ReadTaskServiceData.READ_TASK_TS001_TC003.input.apiID,
            ReadTaskServiceData.READ_TASK_TS001_TC003.input.config,
            ReadTaskServiceData.READ_TASK_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadTaskServiceData.READ_TASK_TS001_TC003.output.status)
        expect(output.message).toBe(ReadTaskServiceData.READ_TASK_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [tms.api.dataaccess.service.task.ts.002] | FunctionPath : [src/services/task/read.task.service.js/readOneTask()]", () => {


	test(ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.description, async () => {

        const output = await ReadTaskService.readOneTask(
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.input.databaseConnector,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.input.apiID,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.input.config,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadTaskServiceData.READ_ONE_TASK_TS002_TC001.output)[2])
	});



    test(ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.description, async () => {

        const output = await ReadTaskService.readOneTask(
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.input.databaseConnector,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.input.apiID,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.input.config,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.output.data)
        expect(output.status).toBe(ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.output.status)
        expect(output.message).toBe(ReadTaskServiceData.READ_ONE_TASK_TS002_TC002.output.message)        
	});



    test(ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.description, async () => {

        const output = await ReadTaskService.readOneTask(
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.input.databaseConnector,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.input.apiID,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.input.config,
            ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.output.status)
        expect(output.message).toBe(ReadTaskServiceData.READ_ONE_TASK_TS002_TC003.output.message)        
	});

});