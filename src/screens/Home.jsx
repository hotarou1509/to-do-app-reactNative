import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { COLORS, images, SIZES } from '../constants';

const Home = (props) => {
	const Content = props.Content;
	/* Rendering Content */

	return (
		<View style={styles.container}>
			{/* Banner Photos */}
			<View style={styles.banner}>
				<Text style={styles.logo}>My Todo</Text>
				<Image
					source={images.bannerBg}
					resizeMode='cover'
					style={styles.bannerImg}
				/>
			</View>
			{/* Content Panel */}
			<View style={styles.contentPanel}>
				<Content style={styles.content} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	banner: {
		height: '35%',
	},
	bannerImg: {
		width: '100%',
		height: '100%',
	},
	contentPanel: {
		flex: 1,
		marginTop: -40,
		backgroundColor: COLORS.lightGray,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: SIZES.padding,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	logo: {
		fontSize: 50,
		color: COLORS.white,
		fontWeight: 'bold',
		position: 'absolute',
		top: '25%',
		left: '10%',
		elevation: 3,
	},
});

export default Home;
