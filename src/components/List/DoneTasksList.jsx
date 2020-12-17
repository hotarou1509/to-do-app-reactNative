import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { COLORS, icons } from '../../constants';
import Task from './Task';

const DoneTaskList = () => {
	const taskList = useSelector((state) => state.todoAppReducer.taskList);

	const [isEmpty, setIsEmpty] = useState(true);

	const checkListEmpty = () => {
		let itemExist = taskList.find((item) => item.done === true);
		if (itemExist) {
			setIsEmpty(false);
			return;
		}
		setIsEmpty(true);
	};

	useEffect(() => {
		checkListEmpty();
	}, [taskList]);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Done list</Text>
			<View
				style={{
					display: isEmpty ? 'flex' : 'none',
					alignItems: 'center',
					opacity: 0.7,
				}}>
				<Image
					source={icons.empty}
					style={{
						...styles.emptyIcon,
					}}
				/>
				<Text style={{ color: COLORS.secondary }}>
					There is no task competed!
				</Text>
			</View>
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
	emptyIcon: {
		height: 64,
		width: 64,
		tintColor: COLORS.primary,
		marginTop: 50,
	},
});

export default DoneTaskList;
