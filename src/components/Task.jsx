import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native';
import { COLORS, icons } from '../constants';

const btnList = [
	{ btnName: 'edit', btnSrc: icons.edit },
	{ btnName: 'checked', btnSrc: icons.checked },
	{ btnName: 'del', btnSrc: icons.del },
];

const Task = (props) => {
	const { taskName } = props.Content;

	const renderButtons = () => {
		return (
			<View style={styles.btnContainer}>
				<FlatList
					horizontal
					data={btnList}
					keyExtractor={(item) => item.btnName}
					renderItem={({ item }) => (
						<TouchableOpacity>
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
		paddingLeft: 140,
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
