import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function Navigation(props) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
				<FontAwesome name="home" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity>
				<FontAwesome name="comment" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity>
				<FontAwesome name="plus" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("ExploreScreen")}>
				<FontAwesome name="search" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
				<FontAwesome name="user" size={30} color={Colors.dark_grey} />
			</TouchableOpacity>
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
