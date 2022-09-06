import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../libraries/Colors";

function Header(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>Piqobe</Text>
			<FontAwesome name="gear" size={24} color={Colors.black} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		flexDirection: "row",
		width: "80%",
		justifyContent: "center",
	},
	name: {
		fontWeight: "bold",
		fontSize: 32,
	},
});

export default Header;
