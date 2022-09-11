import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Navigation from "../components/Navigation";
import UploadImage from "../components/UploadImage";
import Colors from "../libraries/Colors";

function PostScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<TextInput style={styles.inputBox} placeholder="Post title" />
				<TextInput style={styles.inputBox} placeholder="Post descroption" />
				<UploadImage />
			</View>
			<Navigation />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
	},
	inputBox: {
		marginTop: 20,
		paddingLeft: 20,
		backgroundColor: Colors.grey,
		height: 50,
		width: 300,
		borderRadius: 10,
	},
});

export default PostScreen;
