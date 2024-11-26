/**
* CreatedBy    : Nishanth
* CreatedTime  : OCT 26 2023
* Description  : This file contains the all api endpoint to function mapping for all priority module api
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
const createPriorityService = require("../../services/priority/create.priority.service");
const readPriorityService = require("../../services/priority/read.priority.service");
const readonePriorityService = require("../../services/priority/read.priority.service");
const updatePriorityService = require("../../services/priority/update.priority.service");
const deletePriorityService = require("../../services/priority/delete.priority.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreatePriorityService = new createPriorityService();
const ReadPriorityService = new readPriorityService();
const ReadonePriorityService = new readonePriorityService();
const UpdatePriorityService = new updatePriorityService();
const DeletePriorityService = new deletePriorityService();


/**
 * Initializing the controller object
 */
const PriorityController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

PriorityController.post(Endpoints.ENDPOINT_PRIORITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.priority.create.v1"
    Commons.executeController(request, response, apiID, CreatePriorityService.createOnePriority)
});

PriorityController.post(Endpoints.ENDPOINT_PRIORITIES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.priority.read.v1"
    Commons.executeController(request, response, apiID, ReadPriorityService.readPriorities)
});

PriorityController.get(Endpoints.ENDPOINT_ONE_PRIORITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.priority.readone.v1"
    Commons.executeController(request, response, apiID, ReadonePriorityService.readOnePriority)
});

PriorityController.patch(Endpoints.ENDPOINT_PRIORITIES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.priority.update.v1"
    Commons.executeController(request, response, apiID, UpdatePriorityService.updatePriority)
});

PriorityController.delete(Endpoints.ENDPOINT_ONE_PRIORITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.priority.deleteone.v1"
    Commons.executeController(request, response, apiID, DeletePriorityService.deleteOnePriority)
});



module.exports = PriorityController;
