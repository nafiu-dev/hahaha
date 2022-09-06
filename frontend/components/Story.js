import React from "react";
import { View, StyleSheet } from "react-native";

function Story(props) {
	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: 50,
		borderRadius: 15,
	},
});

export default Story;
