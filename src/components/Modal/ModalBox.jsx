import React from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, icons } from '../../constants';
import { hideModalAction } from '../../redux/actions/todoAppActions';
import TaskInput from './TaskInput';

export default function ModalBox(props) {
	const modalVisible = useSelector(
		(state) => state.todoAppReducer.modalVisible,
	);

	const dispatch = useDispatch();

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.');
			}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TaskInput />
					<TouchableOpacity
						style={styles.btnClose}
						onPress={() => {
							dispatch(hideModalAction());
						}}>
						<Image
							source={icons.cancel}
							style={{
								height: 22,
								width: 22,
								tintColor: COLORS.white,
								borderRadius: 11,
							}}></Image>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: COLORS.lightGray,
		borderRadius: 15,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	btnClose: {
		color: COLORS.white,
		height: 24,
		width: 24,
		borderRadius: 12,
		backgroundColor: 'rgba(0,0,0,0.7)',
		justifyContent: 'center',
		alignItems: 'center',
		top: -215,
		right: -155,
	},
});
