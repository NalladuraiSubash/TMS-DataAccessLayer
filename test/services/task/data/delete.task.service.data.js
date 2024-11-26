/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 10 2023
* Description : This file contains test data for all the fucntions in delete task service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteTaskServiceData {


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This Test function's checks whether the output structure is up to the specification
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.001]
     */
    DELETE_ONE_TASK_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.delete.v1",
            config: {
                "ID": 1,
                "Name": "UPDATED TASK",
                "Endpoint": "/api/rest/base/dataaccess/1.0.0/task/v1/task/:taskid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "Task has been updated successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This Test case tests the availability flag is there
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.002]
     */
    DELETE_ONE_TASK_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.delete.v1",
            config: {
                "ID": 2,
                "Name": "DELETE TASK",
                "Endpoint": "/api/rest/base/dataaccess/1.0.0/task/v1/task/:taskid",
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
     * Description  : This test case checks if mock enable flag is working
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.003]
     */
    DELETE_ONE_TASK_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.delete.v1",
            config: {
                "ID": 2,
                "Name": "DELETE TASK",
                "Endpoint": "/api/rest/base/dataaccess/1.0.0/task/v1/task/:taskid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Task has been deleted successfully"
        },
    }

}