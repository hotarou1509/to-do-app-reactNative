import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS } from '../constants';
import Task from './Task';

const ToDoTasksList = () => {
	const taskList = useSelector((state) => state.todoAppReducer.taskList);

	return (
		<>
			<View style={styles.listContainer}>
				<Text style={styles.heading}>Tasks list</Text>
				<FlatList
					data={taskList}
					keyExtractor={(item) => `${item.id}`}
					renderItem={({ item }) => {
						if (!item.done) return <Task Content={item} />;
					}}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
	},
	container: {
		left: 0,
		right: 0,
		height: 140,
		marginTop: -140,
	},
	inputContainer: {
		backgroundColor: COLORS.white,
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginHorizontal: 30,
		borderRadius: 30,
		marginTop: 25,
		flexDirection: 'row',
		alignItems: 'center',
		opacity: 0.8,
	},
	textArea: {
		fontWeight: 'bold',
		fontSize: 18,
		width: '95%',
	},
	heading: {
		fontSize: 28,
		color: COLORS.primary,
		fontWeight: '700',
		marginLeft: 20,
		marginBottom: 15,
	},
});

export default ToDoTasksList;
