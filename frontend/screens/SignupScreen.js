import React from "react";
import {
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	TextInput,
} from "react-native";
import Colors from "../libraries/Colors";
import { useNavigation } from "@react-navigation/native";

function SignupScreen(props) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Password" />
			<TextInput style={styles.input} placeholder="Confirm password" />
			<TouchableOpacity
				onPress={() => navigation.replace("HomeScreen")}
				style={styles.signupButton}>
				<Text style={styles.signupButtonText}>Sign up</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.replace("LoginScreen")}
				style={styles.loginButton}>
				<Text style={styles.loginButtonText}>
					I already have have an account
				</Text>
			</TouchableOpacity>
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
	input: {
		height: 50,
		borderRadius: 10,
		marginTop: 10,
		width: "80%",
		backgroundColor: Colors.grey,
		paddingLeft: 20,
	},
	loginButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		height: 50,
		width: "80%",
		borderRadius: 10,
		marginTop: 10,
	},
	signupButtonText: {
		color: Colors.white,
		fontWeight: "bold",
	},
	signupButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.orange,
		height: 50,
		width: "80%",
		borderRadius: 10,
		marginTop: 10,
	},
});

export default SignupScreen;
