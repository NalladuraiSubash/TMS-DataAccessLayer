module.exports = class messages {

	/**
	 * Common messages
	 */
	MESSAGE_SERVICE_RUNNING_SUCESSFULLY = "tms-Rest-Data-Access is now running on";
	MESSAGE_AVAILABILITY_NOT_ENABLED = "Avaliability flag has not been enabled";
	MESSAGE_MISSING_REQUEST_HEADER = "Missing 'TenantKey' or 'MerchantKey' in the request headers";
	MESSAGE_INVALID_REQUEST_HEADERS = "'TenantKey' or 'MerchantKey' in the request headers is not valid";
	MESSAGE_BASIC_AUTH_FAILED = "Basic authentication failed, incorrect username or password";
	MESSAGE_UNABLE_TO_CONNECT_TO_DATABASE = "Unable to establish connection with the database";
	MESSAGE_CONNECTED_TO_DEFAULT_DATABASE = "Connection has been established with the default database";
	MESSAGE_INVALID_FILTER_OBJECT = "Request cannot be processed due to invalid filter object";
	MESSAGE_DUPLICATE_RECORD = "Record with given filter already exist";

	/* Messages For APIs (INJECTED USING CODE GENERATOR) */
	MESSAGE_TASK_CREATED_SUCCESSFULLY = "Task has been created successfully";
	MESSAGE_TASK_READ_SUCCESSFULLY = "Task has been read successfully";
	MESSAGE_TASK_HAS_BEEN_FOUND = "Task has been readone successfully";
	MESSAGE_TASK_UPDATED_SUCCESSFULLY = "Task has been updated successfully";
	MESSAGE_TASK_DELETED_SUCCESSFULLY = "Task has been deleted successfully";
	MESSAGE_TASK_NOT_FOUND = "Task has not been found for the given filter"

	MESSAGE_USER_CREATED_SUCCESSFULLY = "User has been created successfully";
	MESSAGE_USER_READ_SUCCESSFULLY = "User has been read successfully";
	MESSAGE_USER_HAS_BEEN_FOUND = "User has been readone successfully";
	MESSAGE_USER_UPDATED_SUCCESSFULLY = "User has been updated successfully";
	MESSAGE_USER_DELETED_SUCCESSFULLY = "User has been deleted successfully";
	MESSAGE_USER_NOT_FOUND = "User has not been found for the given filter"

	MESSAGE_STATUS_CREATED_SUCCESSFULLY = "Status has been created successfully";
	MESSAGE_STATUS_READ_SUCCESSFULLY = "Status has been read successfully";
	MESSAGE_STATUS_HAS_BEEN_FOUND = "Status has been readone successfully";
	MESSAGE_STATUS_UPDATED_SUCCESSFULLY = "Status has been updated successfully";
	MESSAGE_STATUS_DELETED_SUCCESSFULLY = "Status has been deleted successfully";
	MESSAGE_STATUS_NOT_FOUND = "Status has not been found for the given filter"

	MESSAGE_PRIORITY_CREATED_SUCCESSFULLY = "Priority has been created successfully";
	MESSAGE_PRIORITY_READ_SUCCESSFULLY = "Priority has been read successfully";
	MESSAGE_PRIORITY_HAS_BEEN_FOUND = "Priority has been readone successfully";
	MESSAGE_PRIORITY_UPDATED_SUCCESSFULLY = "Priority has been updated successfully";
	MESSAGE_PRIORITY_DELETED_SUCCESSFULLY = "Priority has been deleted successfully";
	MESSAGE_PRIORITY_NOT_FOUND = "Priority has not been found for the given filter"

	MESSAGE_SEVERITY_CREATED_SUCCESSFULLY = "Severity has been created successfully";
	MESSAGE_SEVERITY_READ_SUCCESSFULLY = "Severity has been read successfully";
	MESSAGE_SEVERITY_HAS_BEEN_FOUND = "Severity has been readone successfully";
	MESSAGE_SEVERITY_UPDATED_SUCCESSFULLY = "Severity has been updated successfully";
	MESSAGE_SEVERITY_DELETED_SUCCESSFULLY = "Severity has been deleted successfully";
	MESSAGE_SEVERITY_NOT_FOUND = "Severity has not been found for the given filter"

	MESSAGE_ACTIVITY_CREATED_SUCCESSFULLY = "Activity has been created successfully";
	MESSAGE_ACTIVITY_READ_SUCCESSFULLY = "Activity has been read successfully";
	MESSAGE_ACTIVITY_HAS_BEEN_FOUND = "Activity has been readone successfully";
	MESSAGE_ACTIVITY_UPDATED_SUCCESSFULLY = "Activity has been updated successfully";
	MESSAGE_ACTIVITY_DELETED_SUCCESSFULLY = "Activity has been deleted successfully";
	MESSAGE_ACTIVITY_NOT_FOUND = "Activity has not been found for the given filter"

}