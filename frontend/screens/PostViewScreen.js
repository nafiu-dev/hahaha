import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../libraries/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Comment from "../components/Comment";

function PostViewScreen(props) {
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.replace("HomeScreen")}>
						<AntDesign name="back" size={24} color={Colors.black} />
					</TouchableOpacity>
				</View>
				<View style={styles.image}></View>
				<View style={styles.reacts}>
					<AntDesign name="heart" size={24} color={Colors.red} />
					<AntDesign name="message1" size={24} color={Colors.black} />
					<AntDesign name="arrowright" size={24} color={Colors.black} />
					<AntDesign name="save" size={24} color={Colors.black} />
				</View>
				<View style={styles.comments}>
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		marginTop: 40,
		backgroundColor: Colors.white,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		height: 50,
		width: 350,
		paddingLeft: 20,
		backgroundColor: Colors.grey,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	image: {
		height: 350,
		width: 350,
		backgroundColor: Colors.orange,
	},
	reacts: {
		flexDirection: "row",
		backgroundColor: Colors.grey,
		height: 50,
		width: 350,
		alignItems: "center",
		justifyContent: "space-around",
	},
	comments: {
		width: 350,
		paddingTop: 5,
	},
});

export default PostViewScreen;
