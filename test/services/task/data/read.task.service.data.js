/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read Task service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readTaskServiceData {


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This test function output structure is upto the specification
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.001]
     */
    READ_TASK_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.read.v1",
            config: {
                "ID": 1,
                "Name": "READ TASK",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/taskstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Task has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This test check availabilty flag is there
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.002]
     */
    READ_TASK_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/tasks",
                "IsAvailable": false,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 400,
            message: "Avaliability flag has not been enabled"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This test checks mock is enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.003]
     */
    READ_TASK_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.read.v1",
            config: {
                "ID": 2,
                "Name": "READ TASK",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/tasks",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Task has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.002]
     * Description  : This test checks function's output structure is upto the specification
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.001]
     */
    READ_ONE_TASK_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ TASK",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/task/:taskstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " Task has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.002]
     * Description  : This test checks availabilty flag is there
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.002]
     */
    READ_ONE_TASK_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/task/:taskstatusid",
                "IsAvailable": false,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 400,
            message: "Avaliability flag has not been enabled"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.002]
     * Description  : This test checks mock enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.003]
     */
    READ_ONE_TASK_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ TASK",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/task/:taskstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Task has been readone successfully"
        },
    }

}