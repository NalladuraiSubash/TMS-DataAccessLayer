/**
* CreatedBy    : Nishanth
* CreatedTime  : OCT 26 2023
* Description  : This file contains the all api endpoint to function mapping for all activity module api
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
const createActivityService = require("../../services/activity/create.activity.service");
const readActivityService = require("../../services/activity/read.activity.service");
const readoneActivityService = require("../../services/activity/read.activity.service");
const updateActivityService = require("../../services/activity/update.activity.service");
const deleteActivityService = require("../../services/activity/delete.activity.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateActivityService = new createActivityService();
const ReadActivityService = new readActivityService();
const ReadoneActivityService = new readoneActivityService();
const UpdateActivityService = new updateActivityService();
const DeleteActivityService = new deleteActivityService();


/**
 * Initializing the controller object
 */
const ActivityController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

ActivityController.post(Endpoints.ENDPOINT_ACTIVITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.activity.create.v1"
    Commons.executeController(request, response, apiID, CreateActivityService.createOneActivity)
});

ActivityController.post(Endpoints.ENDPOINT_ACTIVITIES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.activity.read.v1"
    Commons.executeController(request, response, apiID, ReadActivityService.readActivities)
});

ActivityController.get(Endpoints.ENDPOINT_ONE_ACTIVITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.activity.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneActivityService.readOneActivity)
});

ActivityController.patch(Endpoints.ENDPOINT_ACTIVITIES, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.activity.update.v1"
    Commons.executeController(request, response, apiID, UpdateActivityService.updateActivity)
});

ActivityController.delete(Endpoints.ENDPOINT_ONE_ACTIVITY, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.activity.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteActivityService.deleteOneActivity)
});



module.exports = ActivityController;
