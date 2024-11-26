/**
* CreatedBy    : Dinesh
* CreatedTime  : Dec 23 2022
* ModifiedBy   : Dinesh
* ModifiedTime : Dec 23 2022
* Description  : This file contains all the configurations needed for jest 
**/

const jestConfig = {

	"verbose": false,
	"reporters": [
		"default",
		["./node_modules/jest-html-reporter", {
			"pageTitle": `Tms Data Access - Unit Test Report`,
			"dateFormat":"mm-dd-yyyy HH:MM:ss",
			"includeFailureMsg" : true,
			"outputPath": `test/.reports/Tms Rest Data Access - Unit Test Report.html`
		}]
	]
};

module.exports = jestConfig;