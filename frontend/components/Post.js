import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../libraries/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function Post(props) {
	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				<View style={styles.profile}></View>
				<View style={styles.image}></View>
				<View style={styles.reacts}>
					<FontAwesome name="heart" size={32} color={Colors.grey} />
					<FontAwesome name="comment" size={32} color={Colors.grey} />
					<FontAwesome name="send" size={32} color={Colors.grey} />
					<FontAwesome
						name="save"
						size={32}
						color={Colors.grey}
						style={styles.reactSave}
					/>
				</View>
				<View style={styles.info}>
					<Text style={styles.infoText}>4,566,500 Liked By Afshint2y</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		backgroundColor: Colors.grey,
		height: 500,
		width: 350,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	innerContainer: {
		backgroundColor: Colors.white,
		height: 450,
		width: 300,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: 250,
		width: 250,
		borderRadius: 30,
		backgroundColor: Colors.orange,
	},
	reacts: {
		flexDirection: "row",
		paddingLeft: 25,
		width: "100%",
		alignItems: "flex-start",
	},
	reactSave: {
		paddingLeft: 125,
	},
	info: {
		width: "100%",
		alignItems: "flex-start",
		paddingTop: 10,
		paddingLeft: 25,
	},
	infoText: {
		fontWeight: "bold",
		fontSize: 14,
	},
});

export default Post;
