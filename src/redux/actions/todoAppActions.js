import {
	ADD_EDIT_TASK,
	CHECK_TASK,
	DELETE_TASK,
	HIDE_MODAL,
	SHOW_MODAL_TO_ADD,
	SHOW_MODAL_TO_EDIT,
	UNCHECK_TASK,
} from '../constants/reduxConst';

export const checkTaskAction = (id) => {
	return {
		type: CHECK_TASK,
		id,
	};
};

export const uncheckTaskAction = (id) => {
	return {
		type: UNCHECK_TASK,
		id,
	};
};

export const deleteTaskAction = (id) => {
	return {
		type: DELETE_TASK,
		id,
	};
};

export const addEditTaskAction = (taskName) => {
	return {
		type: ADD_EDIT_TASK,
		taskName,
	};
};

export const showModalToAddAction = (id) => {
	return {
		type: SHOW_MODAL_TO_ADD,
		id,
	};
};

export const showModalToEditAction = (id) => {
	return {
		type: SHOW_MODAL_TO_EDIT,
		id,
	};
};

export const hideModalAction = (id) => {
	return {
		type: HIDE_MODAL,
		id,
	};
};
