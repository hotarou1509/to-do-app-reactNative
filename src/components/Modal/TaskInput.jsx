import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS } from '../../constants';
import {
	addEditTaskAction,
	hideModalAction,
} from '../../redux/actions/todoAppActions';

export default function TaskInput() {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const currentEdit = useSelector(
		(state) => state.todoAppReducer.currentEdit,
	);

	useEffect(() => {
		setInput(currentEdit.taskName);
	}, [currentEdit]);

	const handleInputText = (text) => {
		setInput(text);
	};

	const handleOnPress = () => {
		dispatch(addEditTaskAction(input));
		setInput('');
		dispatch(hideModalAction());
	};

	return (
		<View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Add task'
					placeholderTextColor='#b1e5d3'
					style={styles.inputText}
					onChangeText={(text) => handleInputText(text)}
					value={input}
				/>
			</View>
			<TouchableOpacity
				style={styles.btnAdd}
				onPress={handleOnPress}
				disabled={!input.trim()}>
				<Text style={styles.btnText}>Save</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: COLORS.white,
		paddingVertical: 16,
		paddingHorizontal: 20,
		marginHorizontal: 10,
		borderRadius: 15,
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		elevation: 3,
	},
	inputText: {
		fontWeight: 'bold',
		fontSize: 18,
		width: 200,
	},
	btnAdd: {
		backgroundColor: COLORS.primary,
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginHorizontal: 20,
		borderRadius: 15,
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		elevation: 10,
	},
	btnText: {
		fontWeight: 'bold',
		fontSize: 18,
		color: COLORS.white,
	},
});
