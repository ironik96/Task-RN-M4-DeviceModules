import * as React from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { FileSystemUploadType } from "expo-file-system";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(
    "https://cdn.sick.com/media/ZOOM/2/82/782/IM0077782.png"
  );
  const [text, setText] = useState("Pick an image");

  const handleOcr = async () => {
    console.log("handleOcr");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      // FileSystem.uploadAsync()
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.text_container}>
          <TouchableOpacity onPress={handleOcr}>
            <Text style={styles.card_title}>Pick an image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template: {
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  text_container: {
    position: "absolute",
    width: 250,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "white",
    textAlign: "center",
  },
});
