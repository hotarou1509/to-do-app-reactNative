import React from 'react';
import { useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import { COLORS, icons } from '../../constants';
import { showModalToAddAction } from '../../redux/actions/todoAppActions';
import ModalBox from '../Modal/ModalBox';
import Task from './Task';

const ToDoTasksList = () => {
	const taskList = useSelector((state) => state.todoAppReducer.taskList);
	const dispatch = useDispatch();

	const [isEmpty, setIsEmpty] = useState(true);

	const checkListEmpty = () => {
		let itemExist = taskList.find((item) => item.done === false);
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
		<>
			<View style={styles.listContainer}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingRight: 20,
					}}>
					<Text style={styles.heading}>Tasks list</Text>
					<TouchableOpacity
						onPress={() => {
							dispatch(showModalToAddAction());
						}}>
						<Image
							source={icons.plus}
							style={{ height: 30, width: 30 }}></Image>
					</TouchableOpacity>
				</View>
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
						There is no task created!
					</Text>
				</View>
				<FlatList
					data={taskList}
					keyExtractor={(item) => `${item.id}`}
					renderItem={({ item }) => {
						if (!item.done) return <Task Content={item} />;
					}}
				/>
				<ModalBox />
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
	emptyIcon: {
		height: 64,
		width: 64,
		tintColor: COLORS.primary,
		marginTop: 50,
	},
});

export default ToDoTasksList;
