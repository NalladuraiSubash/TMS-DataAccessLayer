/**
* CreatedBy   : Nishanth S R 
* CreatedTime : Nov 02 2023
* Description : The file contains the data for test for task
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class createTaskServiceData {

    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Description  : This Test function's checks whether the output structure is up to the specification
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.001]
     */
    CREATE_ONE_TASK_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.create.v1",
            config: {
                "ID": 1,
                "Name": "CREATE TASK",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/task",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "Task has been created successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.task.ts.001]
     * Descripton   : This test checks mock enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.task.tc.002]
     */
    CREATE_ONE_TASK_TS001_TC002 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.task.create.v1",
            config: {
                "ID": 2,
                "Name": "CREATE TASK",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/task/v1/task",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] Task has been created successfully"
        },
    }

}