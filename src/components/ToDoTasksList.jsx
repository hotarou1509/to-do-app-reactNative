import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Task from './Task';

const ToDoTasksList = () => {
	const taskList = useSelector((state) => state.todoAppReducer.taskList);
	return (
		<View style={styles.container}>
			<FlatList
				data={taskList}
				keyExtractor={(item) => `${item.id}`}
				renderItem={({ item }) => {
					if (!item.done) return <Task Content={item} />;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
});

export default ToDoTasksList;
