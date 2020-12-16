import React from 'react';

/* Initiallizing Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/Tabs';
const Stack = createStackNavigator();

const ToDoApp = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={'Home'}>
				{/* Tabs */}
				<Stack.Screen
					name='Home'
					component={Tabs}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ToDoApp;
