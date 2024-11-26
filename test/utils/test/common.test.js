/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Dec 23 2022
* Description   : This file contains tests for all the fucntions in commons class
**/

/**
 * Importing all required modules here
 */

const commonData = require("../data/common.data");
const commons = require("../../../src/utils/commons");

/**
 * Initializing objects for all the imported classes 
 */
const Commons = new commons();
const CommonData = new commonData();


describe("TestSuiteID : [tms.api.dataaccess.service.vendortenantcontact.ts.001] | FunctionPath : [src/services/vendor/create.vendortenantcontact.service.js/createOneVendorTenantContact()]", () => {

	test(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.description, async () => {

        const output = await Commons.generateControllerOutput(
            CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.input.response,
            CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.input.data,
            CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.input.status,
            CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.input.message,
            CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.input.endpoint,
        )
        expect(output).toHaveProperty(Object.keys(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.output)[1])

        expect(output.serviceResponse).toHaveProperty(Object.keys(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.output.serviceResponse)[0])
        expect(output.serviceResponse).toHaveProperty(Object.keys(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.output.serviceResponse)[1])
        expect(output.serviceResponse).toHaveProperty(Object.keys(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.output.serviceResponse)[2])
        expect(output.serviceResponse).toHaveProperty(Object.keys(CommonData.GENERATE_CONTROLLER_OUTPUT_TS001_TC001.output.serviceResponse)[3])

        
	});

});