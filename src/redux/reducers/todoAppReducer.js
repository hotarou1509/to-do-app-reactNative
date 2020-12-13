const initialState = {
	taskList: [
		{ id: 1, taskName: 'Task A', done: false },
		{ id: 2, taskName: 'Task B', done: false },
		{ id: 3, taskName: 'Task C', done: true },
		{ id: 4, taskName: 'Task D', done: false },
		{ id: 5, taskName: 'Task E', done: true },
		{ id: 6, taskName: 'Task F', done: false },
	],
};

const todoAppReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default todoAppReducer;
