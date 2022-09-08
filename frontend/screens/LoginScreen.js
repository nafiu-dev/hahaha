import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function LoginScreen(props) {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Password" />
			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Log in</Text>
			</TouchableOpacity>
			<TouchableOpacity style={signupButton}>
				<Text style={signupButtonText}>I don't have an account</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default LoginScreen;
