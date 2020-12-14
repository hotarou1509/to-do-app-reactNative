import {
	ADD_TASK,
	CHECK_TASK,
	DELETE_TASK,
	UNCHECK_TASK,
} from '../constants/reduxConst';

const initialState = {
	taskList: [
		{ id: 1, taskName: 'Task SS', done: false },
		{ id: 2, taskName: 'Task B', done: false },
		{ id: 3, taskName: 'Task C', done: true },
		{ id: 4, taskName: 'Task D', done: false },
		{ id: 5, taskName: 'Task E', done: true },
		{ id: 6, taskName: 'Task F', done: false },
	],
};

const todoAppReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_TASK: {
			let taskListUpdate = [...state.taskList];
			let taskUpdate = taskListUpdate.find(
				(item) => item.taskName === action.taskName,
			);
			taskUpdate.done = true;
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case UNCHECK_TASK: {
			let taskListUpdate = [...state.taskList];
			let taskUpdate = taskListUpdate.find(
				(item) => item.taskName === action.taskName,
			);
			taskUpdate.done = false;
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case DELETE_TASK: {
			let taskListUpdate = [...state.taskList];
			let taskIndex = taskListUpdate.findIndex(
				(item) => item.taskName === action.taskName,
			);
			taskListUpdate.splice(taskIndex, 1);
			state.taskList = taskListUpdate;
			return { ...state };
		}
		case ADD_TASK: {
			let newTask = {
				id: action.id,
				taskName: action.taskName,
				done: false,
			};
			let taskListUpdate = [...state.taskList];
			taskListUpdate.push(newTask);
			state.taskList = taskListUpdate;
			return { ...state };
		}
		default:
			return state;
	}
};

export default todoAppReducer;
