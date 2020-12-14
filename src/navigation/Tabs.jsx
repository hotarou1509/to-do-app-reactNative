import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, icons } from '../constants';
import { Home, AddTask } from '../screens';
import { ToDoTasksList, DoneTasksList } from '../components';

/* Tab Navigation */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const tabOptions = {
	showLabel: false,
	style: {
		height: '8%',
	},
};

const AddTaskButton = () => {
	return (
		<View style={styles.addTaskBtnContainer}>
			<Image
				source={icons.plus}
				resizeMode='contain'
				style={styles.addTaskBtnIcon}
			/>
		</View>
	);
};

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabOptions}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					const tintColor = focused ? COLORS.primary : COLORS.gray;
					switch (route.name) {
						case 'ToDo':
							return (
								<Image
									source={icons.todo}
									resizeMode='contain'
									style={{
										tintColor: tintColor,
										...styles.iconStyle,
									}}
								/>
							);
						case 'Add': {
							return <AddTaskButton />;
						}
						case 'Done':
							return (
								<Image
									source={icons.checked}
									resizeMode='contain'
									style={{
										tintColor: tintColor,
										...styles.iconStyle,
									}}
								/>
							);
					}
				},
			})}>
			<Tab.Screen
				name='ToDo'
				children={() => <Home Content={ToDoTasksList} />}
			/>
			<Tab.Screen name='Add' component={AddTask} />
			<Tab.Screen
				name='Done'
				children={() => <Home Content={DoneTasksList} />}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		width: 25,
		height: 25,
	},
	tabStyle: {
		width: '50%',
		backgroundColor: COLORS.primary,
		height: 70,
		marginTop: 20,
		borderTopRightRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	addTaskBtnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: COLORS.primary,
		top: -10,
		elevation: 5,
	},
	addTaskBtnIcon: {
		width: 23,
		height: 23,
		tintColor: COLORS.white,
	},
});

export default Tabs;
