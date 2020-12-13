import React from 'react';

/* Initiallizing Screens */
import { TaskDetail } from './screens';

/* Initiallizing Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/Tabs';
const Stack = createStackNavigator();

export default ToDoApp = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Home'}>
				{/* Tabs */}
				<Stack.Screen
					name='Home'
					component={Tabs}
					options={{ headerShown: false }}
				/>
				{/* Screens */}
				<Stack.Screen
					name='TaskDetail'
					component={TaskDetail}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
