import React from "react";
import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../libraries/Colors";

function Navigation(props) {
	return (
		<View style={styles.container}>
			<FontAwesome name="home" size={30} color={Colors.dark_grey} />
			<FontAwesome name="comment" size={30} color={Colors.dark_grey} />
			<FontAwesome name="plus" size={30} color={Colors.dark_grey} />
			<FontAwesome name="search" size={30} color={Colors.dark_grey} />
			<FontAwesome name="user" size={30} color={Colors.dark_grey} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 70,
		width: "100%",
		backgroundColor: Colors.white,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "space-around",
		shadowColor: Colors.black,
		shadowOffset: -5,
		shadowRadius: 20,
		elevation: 10,
		marginTop: "auto",
	},
});

export default Navigation;
