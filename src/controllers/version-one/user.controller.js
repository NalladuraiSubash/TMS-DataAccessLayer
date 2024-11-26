/**
* CreatedBy    : Nishanth
* CreatedTime  : OCT 26 2023
* Description  : This file contains the all api endpoint to function mapping for all user module api
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
const createUserService = require("../../services/user/create.user.service");
const readUserService = require("../../services/user/read.user.service");
const readoneUserService = require("../../services/user/read.user.service");
const updateUserService = require("../../services/user/update.user.service");
const deleteUserService = require("../../services/user/delete.user.service");



/* Initializing objects for all the service classes (INJECTED USING CODE GENERATOR) */
const CreateUserService = new createUserService();
const ReadUserService = new readUserService();
const ReadoneUserService = new readoneUserService();
const UpdateUserService = new updateUserService();
const DeleteUserService = new deleteUserService();


/**
 * Initializing the controller object
 */
const UserController = express.Router();


/* Creating all the API endpoint to function mapping (INJECTED USING CODE GENERATOR) */

UserController.post(Endpoints.ENDPOINT_USER, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.user.create.v1"
    Commons.executeController(request, response, apiID, CreateUserService.createOneUser)
});

UserController.post(Endpoints.ENDPOINT_USERS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.user.read.v1"
    Commons.executeController(request, response, apiID, ReadUserService.readUsers)
});

UserController.get(Endpoints.ENDPOINT_ONE_USER, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.user.readone.v1"
    Commons.executeController(request, response, apiID, ReadoneUserService.readOneUser)
});

UserController.patch(Endpoints.ENDPOINT_USERS, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.user.update.v1"
    Commons.executeController(request, response, apiID, UpdateUserService.updateUser)
});

UserController.delete(Endpoints.ENDPOINT_ONE_USER, async (request, response) => {
    const apiID = "tms.api.rest.dataaccess.user.deleteone.v1"
    Commons.executeController(request, response, apiID, DeleteUserService.deleteOneUser)
});



module.exports = UserController;
