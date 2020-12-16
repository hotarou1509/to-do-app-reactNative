import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS, icons } from '../../constants';
import {
	checkTaskAction,
	deleteTaskAction,
	uncheckTaskAction,
	showModalToEditAction,
} from '../../redux/actions/todoAppActions';

const btnTodo = [
	{ btnName: 'edit', btnSrc: icons.edit },
	{ btnName: 'checked', btnSrc: icons.checked },
	{ btnName: 'del', btnSrc: icons.del },
];

const btnDone = [
	{ btnName: 'undo', btnSrc: icons.undo },
	{ btnName: 'del', btnSrc: icons.del },
];

const Task = (props) => {
	const { id, taskName, done } = props.Content;
	const dispatch = useDispatch();

	const handleOnPress = (btnName) => {
		switch (btnName) {
			case 'checked':
				dispatch(checkTaskAction(id));
				break;

			case 'undo':
				dispatch(uncheckTaskAction(id));
				break;

			case 'del':
				dispatch(deleteTaskAction(id));
				break;

			case 'edit':
				dispatch(showModalToEditAction(id));
				break;
			default:
				break;
		}
	};

	const renderButtons = () => {
		return (
			<View style={styles.btnContainer}>
				<FlatList
					horizontal
					data={done ? btnDone : btnTodo}
					keyExtractor={(item) => item.btnName}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								handleOnPress(item.btnName);
							}}>
							<View style={styles.btnStyle}>
								<Image
									source={item.btnSrc}
									style={styles.btnIcon}
								/>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		);
	};

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.taskName}>{taskName}</Text>
				{renderButtons()}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		elevation: 2,
		backgroundColor: COLORS.white,
		marginBottom: 16,
		marginHorizontal: 16,
		borderRadius: 15,
		padding: 16,
	},
	taskName: {
		fontSize: 18,
		fontWeight: '700',
		color: COLORS.secondary,
	},
	btnContainer: {
		alignItems: 'flex-end',
	},
	btnStyle: {
		backgroundColor: COLORS.primary,
		height: 40,
		width: 40,
		borderRadius: 5,
		elevation: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 5,
		marginTop: 10,
		marginBottom: 5,
	},
	btnIcon: {
		width: 20,
		height: 20,
		tintColor: COLORS.white,
	},
});

export default Task;
