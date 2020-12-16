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
	currentEdit: {
		id: '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
		taskName: '',
		done: false,
	},
};

const getTaskListItemById = (arr, id) => {
	let taskListUpdate = arr;
	return taskListUpdate.find((item) => item.id === id);
};

const getTaskListIndexById = (arr, id) => {
	let taskListUpdate = arr;
	const index = taskListUpdate.findIndex((item) => item.id === id);
	return index;
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
				state.currentEdit.id,
			);
			console.log(checkExistIndex);
			if (checkExistIndex === -1) {
				//add new Task
				let newTask = {
					id: state.currentEdit.id,
					taskName: action.taskName,
					done: false,
				};
				taskListUpdate.push(newTask);
			} else {
				// Edit task
				taskListUpdate[checkExistIndex].taskName = action.taskName;
			}
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case SHOW_MODAL_TO_ADD: {
			state.modalVisible = true;
			state.currentEdit.id = action.id;
			state.currentEdit.taskName = '';
			return { ...state };
		}
		case SHOW_MODAL_TO_EDIT: {
			state.modalVisible = true;
			state.currentEdit.id = action.id;
			state.currentEdit.taskName = getTaskListItemById(
				taskListUpdate,
				action.id,
			).taskName;
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
