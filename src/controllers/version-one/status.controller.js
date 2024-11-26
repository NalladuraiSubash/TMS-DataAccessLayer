/**
* CreatedBy    : Nishanth
* CreatedTime  : OCT 26 2023
* Description  : This file contains the all api endpoint to function mapping for all status module api
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
const createStatusService = require("../../services/status/create.status.service");
const readStatusService = require("../../services/status/read.status.service");
const readoneStatusService = require("../../services/status/read.status.service");
const updateStatusService = require("../../services/status/update.status.service");
const deleteStatusService = require("../../services/status/delete.status.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateStatusService = new createStatusService();
const ReadStatusService = new readStatusService();
const ReadoneStatusService = new readoneStatusService();
const UpdateStatusService = new updateStatusService();
const DeleteStatusService = new deleteStatusService();


/**
 * Initializing the controller object
 */
const StatusController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

StatusController.post(Endpoints.ENDPOINT_STATUS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.status.create.v1"
    Commons.executeController(request, response, apiID, CreateStatusService.createOneStatus)
});

StatusController.post(Endpoints.ENDPOINT_STATUSES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.status.read.v1"
    Commons.executeController(request, response, apiID, ReadStatusService.readStatuses)
});

StatusController.get(Endpoints.ENDPOINT_ONE_STATUS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.status.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneStatusService.readOneStatus)
});

StatusController.patch(Endpoints.ENDPOINT_STATUSES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.status.update.v1"
    Commons.executeController(request, response, apiID, UpdateStatusService.updateStatus)
});

StatusController.delete(Endpoints.ENDPOINT_ONE_STATUS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.status.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteStatusService.deleteOneStatus)
});

module.exports = StatusController;