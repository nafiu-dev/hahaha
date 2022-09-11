import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Colors from "../libraries/Colors";
import * as ImagePicker from "expo-image-picker";

function UploadImage(props) {
	const [image, setImage] = useState();
	const addImage = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!_image.cancelled) {
			setImage(_image.uri);
		}
	};
	return (
		<View>
			{image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
			<TouchableOpacity onPress={addImage} style={styles.selectImage}>
				<Text style={styles.selectImageText}>Select Image</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.selectImage}>
				<Text style={styles.selectImageText}>Done</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	selectImage: {
		backgroundColor: Colors.orange,
		marginTop: 20,
		height: 50,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	selectImageText: {
		fontWeight: "bold",
		color: Colors.white,
	},
	uploadedImage: {
		marginTop: 30,
		alignSelf: "center",
		height: 300,
		width: 300,
	},
});

export default UploadImage;
