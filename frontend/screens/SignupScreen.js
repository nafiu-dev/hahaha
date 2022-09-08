import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function SignupScreen(props) {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Password" />
			<TextInput style={styles.input} placeholder="Confirm password" />
			<TouchableOpacity style={styles.signupButton}>
				<Text style={styles.signupButtonText}>Sign up</Text>
			</TouchableOpacity>
			<TouchableOpacity style={signinButton}>
				<Text style={signinButtonText}>I already have have an account</Text>
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

export default SignupScreen;
