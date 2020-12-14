import {
	ADD_TASK,
	CHECK_TASK,
	DELETE_TASK,
	EDIT_TASK,
	UNCHECK_TASK,
} from '../constants/reduxConst';

export const checkTaskAction = (taskName) => {
	return {
		type: CHECK_TASK,
		taskName,
	};
};

export const uncheckTaskAction = (taskName) => {
	return {
		type: UNCHECK_TASK,
		taskName,
	};
};

export const deleteTaskAction = (taskName) => {
	return {
		type: DELETE_TASK,
		taskName,
	};
};

export const editTaskAction = (taskName) => {
	return {
		type: EDIT_TASK,
		taskName,
	};
};

export const addTaskAction = (taskName, id) => {
	return {
		type: ADD_TASK,
		taskName,
		id,
	};
};
