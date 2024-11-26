/**
* CreatedBy   : Dinesh
* CreatedTime : Dec 23 2022
* Description : This file contains test data for all the fucntions in commons class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class commonData{


	/**
	 * TestSuiteID  : [tms.api.dataaccess.service.user.ts.001]
	 * TestCaseID   : [tms.api.dataaccess.service.user.tc.001]
	 * FunctionID   : [tms.api.dataaccess.service.user.fun.001]
	 * FunctionPath : [src/services/user/create.vendortenantcontact.service.js/createOneVendorTenantContact()]
	 */
	GENERATE_CONTROLLER_OUTPUT_TS001_TC001 = {
		description : "test function's output structure is upto the specification",
		input : {
            response : null,
            data : null,
            status : 200,
            message : "MESSAGE-OF-THE_API",
            endpoint : "ENDPOINT-OF-THE-API"
		},
		output: {
			outputResponse  : null,
			serviceResponse : {
				status     : 200,
				message    : "MESSAGE-OF-THE_API",
				timestamp  : "CURRENT-API-EXECUTION-TIME",
				endpoint  : "ENDPOINT-OF-THE-API"
			}
        }
	}
    
}