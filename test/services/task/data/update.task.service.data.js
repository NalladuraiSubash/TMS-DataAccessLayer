/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete task service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteTaskServiceData {


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This test checks the function's output structure is upto the specification
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.001]
     */
    UPDATE_TASK_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE tasks",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/tasks",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] Task has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This test checks the availabilty flag is there
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.002]
     */

    UPDATE_TASK_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE TASKS",
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
     * Description  : This test checks mock enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.002]
     */
    UPDATE_TASK_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE TASKS",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/tasks",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Task has been updated successfully"
        },
    }

}
