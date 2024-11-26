/**
* CreatedBy    : Nishanth
* CreatedTime  : OCT 26 2023
* Description  : This file contains the all api endpoint to function mapping for all severity module api
**/

/**
 *  Importing all the required modules
 */
const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Endpoints = new endpoints();


/* Importing all the services classes (INJECTED USING CODE GENERATOR) */
const createSeverityService = require("../../services/severity/create.severity.service");
const readSeverityService = require("../../services/severity/read.severity.service");
const readoneSeverityService = require("../../services/severity/read.severity.service");
const updateSeverityService = require("../../services/severity/update.severity.service");
const deleteSeverityService = require("../../services/severity/delete.severity.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateSeverityService = new createSeverityService();
const ReadSeverityService = new readSeverityService();
const ReadoneSeverityService = new readoneSeverityService();
const UpdateSeverityService = new updateSeverityService();
const DeleteSeverityService = new deleteSeverityService();


/**
 * Initializing the controller object
 */
const SeverityController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

SeverityController.post(Endpoints.ENDPOINT_SEVERITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.severity.create.v1"
    Commons.executeController(request, response, apiID, CreateSeverityService.createOneSeverity)
});

SeverityController.post(Endpoints.ENDPOINT_SEVERITIES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.severity.read.v1"
    Commons.executeController(request, response, apiID, ReadSeverityService.readSeverities)
});

SeverityController.get(Endpoints.ENDPOINT_ONE_SEVERITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.severity.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneSeverityService.readOneSeverity)
});

SeverityController.patch(Endpoints.ENDPOINT_SEVERITIES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.severity.update.v1"
    Commons.executeController(request, response, apiID, UpdateSeverityService.updateSeverity)
});

SeverityController.delete(Endpoints.ENDPOINT_ONE_SEVERITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.severity.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteSeverityService.deleteOneSeverity)
});



module.exports = SeverityController;
