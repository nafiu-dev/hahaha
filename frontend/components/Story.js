import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../libraries/Colors";

function Story(props) {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		width: 60,
		borderRadius: 15,
		backgroundColor: Colors.black,
		marginLeft: 25,
	},
});

export default Story;
