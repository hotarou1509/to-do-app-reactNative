import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { COLORS, images, SIZES } from '../constants';

const Home = (props) => {
	const Content = props.Content;
	/* Rendering Content */

	return (
		<View style={styles.container}>
			{/* Banner Photos */}
			<View style={styles.banner}>
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
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		paddingVertical: SIZES.padding,
		alignItems: 'stretch',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	content: {},
});

export default Home;
