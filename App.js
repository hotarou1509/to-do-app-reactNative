import React from 'react';

/* Redux */
import { Provider } from 'react-redux';
import store from './src/redux/configStore';
import ToDoApp from './src/ToDoApp';

export default App = () => {
	return (
		<Provider store={store}>
			<ToDoApp />
		</Provider>
	);
};
