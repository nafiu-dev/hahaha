import React from "react";
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import Colors from "../libraries/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function MessageViewScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<FontAwesome
					name="arrow-left"
					size={32}
					color={Colors.white}
					style={styles.arrow}
				/>
				<Text>Person Personson</Text>
			</View>
			<View style={styles.messageHistory}></View>
			<View style={styles.messageInput}>
				<TextInput style={styles.inputBox} />
				<TouchableOpacity style={styles.sendButton}>
					<Text style={styles.sendButtonText}>Send</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		marginTop: 40,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	messageHistory: {
		flex: 1,
	},
	messageInput: {
		flexDirection: "row",
	},
	inputBox: {
		backgroundColor: Colors.grey,
		height: 50,
		width: 250,
		marginRight: 20,
		borderRadius: 10,
	},
	sendButton: {
		backgroundColor: Colors.orange,
		height: 50,
		width: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		marginBottom: 20,
	},
	sendButtonText: {
		color: Colors.white,
	},
	header: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.orange,
	},
	arrow: {
		alignSelf: "flex-start",
	},
});

export default MessageViewScreen;
