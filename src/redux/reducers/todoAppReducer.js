import {
	CHECK_TASK,
	DELETE_TASK,
	UNCHECK_TASK,
	HIDE_MODAL,
	SHOW_MODAL_TO_ADD,
	SHOW_MODAL_TO_EDIT,
	ADD_EDIT_TASK,
} from '../constants/reduxConst';

const initialState = {
	taskList: [],
	modalVisible: false,
	currentEdit: { id: '', taskName: '' },
};

const getTaskListItemById = (arr, id) => {
	let taskListUpdate = arr;
	return taskListUpdate.find((item) => item.id === id);
};

const getTaskListIndexById = (arr, id) => {
	let taskListUpdate = arr;
	return taskListUpdate.findIndex((item) => item.id === id);
};

const todoAppReducer = (state = initialState, action) => {
	let taskListUpdate = [...state.taskList];
	switch (action.type) {
		case CHECK_TASK: {
			let taskUpdate = getTaskListItemById(taskListUpdate, action.id);
			taskUpdate.done = true;
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case UNCHECK_TASK: {
			let taskUpdate = getTaskListItemById(taskListUpdate, action.id);
			taskUpdate.done = false;
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case DELETE_TASK: {
			let taskIndex = getTaskListIndexById(taskListUpdate, action.id);
			taskListUpdate.splice(taskIndex, 1);
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case ADD_EDIT_TASK: {
			let checkExistIndex = getTaskListIndexById(
				taskListUpdate,
				action.id,
			);
			if (checkExistIndex === -1) {
				let newTask = {
					id: action.id,
					taskName: action.taskName,
					done: false,
				};
				taskListUpdate.push(newTask);
			} else {
				taskListUpdate[checkExistIndex].taskName = action.taskName;
			}
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case SHOW_MODAL_TO_ADD: {
			state.modalVisible = true;
			state.currentEdit.taskName = '';
			return { ...state };
		}
		case SHOW_MODAL_TO_EDIT: {
			state.modalVisible = true;
			state.currentEdit = getTaskListItemById(taskListUpdate, action.id);
			return { ...state };
		}
		case HIDE_MODAL: {
			state.modalVisible = false;
			return { ...state };
		}
		default:
			return state;
	}
};

export default todoAppReducer;
