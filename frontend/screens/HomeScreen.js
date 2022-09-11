import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Colors from "../libraries/Colors";
import Header from "../components/Header";
import Post from "../components/Post";
import Navigation from "../components/Navigation";

function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.posts}>
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />
					</View>
				</ScrollView>
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
	content: {
		flex: 1,
	},
	stories: {
		height: 80,
	},
	posts: {
		alignItems: "center",
	},
});

export default HomeScreen;
