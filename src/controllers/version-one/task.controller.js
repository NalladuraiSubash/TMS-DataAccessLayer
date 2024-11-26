/**
* CreatedBy    : Nishanth
* CreatedTime  : OCT 26 2023
* Description  : This file contains the all api endpoint to function mapping for all task module api
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
const createTaskService = require("../../services/task/create.task.service");
const readTaskService = require("../../services/task/read.task.service");
const readOneTaskService = require("../../services/task/read.task.service");
const countTaskService = require("../../services/task/read.task.service");
const updateTaskService = require("../../services/task/update.task.service");
const deleteTaskService = require("../../services/task/delete.task.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateTaskService = new createTaskService();
const ReadTaskService = new readTaskService();
const ReadOneTaskService = new readOneTaskService();
const CountTaskService = new countTaskService();
const UpdateTaskService = new updateTaskService();
const DeleteTaskService = new deleteTaskService();


/**
 * Initializing the controller object
 */
const TaskController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

TaskController.post(Endpoints.ENDPOINT_TASK, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.task.create.v1"
    Commons.executeController(request, response, apiID, CreateTaskService.createOneTask)
});

TaskController.post(Endpoints.ENDPOINT_TASKS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.task.read.v1"
    Commons.executeController(request, response, apiID, ReadTaskService.readTasks)
});

TaskController.get(Endpoints.ENDPOINT_ONE_TASK, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.task.readone.v1"
    Commons.executeController(request, response, apiID, ReadOneTaskService.readOneTask)
});

TaskController.post(Endpoints.ENDPOINT_TASKS+Endpoints.ENDPOINT_METRICS, async(request, response) => {
    const apiID = "tms.api.rest.dataaccess.task.readone.v1"
    Commons.executeController(request, response, apiID, CountTaskService.readTaskCount) 
});

TaskController.patch(Endpoints.ENDPOINT_TASKS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.task.update.v1"
    Commons.executeController(request, response, apiID, UpdateTaskService.updateTask)
});

TaskController.delete(Endpoints.ENDPOINT_ONE_TASK, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.task.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteTaskService.deleteOneTask)
});



module.exports = TaskController;
