import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { COLORS } from '../constants';
import { addTaskAction } from '../redux/actions/todoAppActions';
import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';

export default function AddTask() {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const handleInputText = (text) => {
		setInput(text);
	};

	const handleOnPress = () => {
		const id = uuidv1(); // Create a unique timestamp random id for each task
		dispatch(addTaskAction(input, id));
	};

	return (
		<>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Add task'
					placeholderTextColor='#b1e5d3'
					style={styles.inputText}
					onChangeText={(text) => handleInputText(text)}
				/>
			</View>
			<TouchableOpacity
				style={styles.btnAdd}
				onPress={handleOnPress}
				disabled={!input.trim()}>
				<Text style={styles.btnText}>Add</Text>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: COLORS.white,
		paddingVertical: 16,
		paddingHorizontal: 20,
		marginHorizontal: 20,
		borderRadius: 15,
		marginTop: 80,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		elevation: 3,
	},
	inputText: {
		fontWeight: 'bold',
		fontSize: 18,
		width: 260,
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
		elevation: 3,
	},
	btnText: {
		fontWeight: 'bold',
		fontSize: 18,
		color: COLORS.white,
	},
});
