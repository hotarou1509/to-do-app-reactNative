import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../constants';
import Task from './Task';

const DoneTaskList = () => {
	const taskList = useSelector((state) => state.todoAppReducer.taskList);
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Done list</Text>
			<FlatList
				data={taskList}
				keyExtractor={(item) => `${item.id}`}
				renderItem={({ item }) => {
					if (item.done) return <Task Content={item} />;
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
	heading: {
		fontSize: 28,
		color: COLORS.primary,
		fontWeight: '700',
		marginLeft: 20,
		marginBottom: 15,
	},
});

export default DoneTaskList;
