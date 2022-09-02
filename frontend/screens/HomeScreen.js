import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../libraries/Colors";
import Post from "../components/Post";

function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<ScrollView style={styles.stories}></ScrollView>
				<ScrollView style={styles.posts}>
					<Post />
				</ScrollView>
			</View>
			<View style={styles.nav}>
				<FontAwesome name="home" size={30} color={Colors.orange} />
				<FontAwesome name="comment" size={30} color={Colors.dark_grey} />
				<FontAwesome name="plus" size={30} color={Colors.dark_grey} />
				<FontAwesome name="search" size={30} color={Colors.dark_grey} />
				<FontAwesome name="user" size={30} color={Colors.dark_grey} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.white,
	},
	content: {
		flex: 1,
	},
	nav: {
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
	},
});

export default HomeScreen;
