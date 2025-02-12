import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import { COLORS, FONTS } from "../../theme";

export default function EcgUpload(): JSX.Element {
  const router = useRouter();

  const pickDocument = async (): Promise<void> => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (!result.canceled) {
      alert(`Uploaded: ${result.assets[0].name}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upload Your ECG Report</Text>
      <Text style={styles.subText}>
        Select an ECG report file for analysis.
      </Text>

      <TouchableOpacity style={styles.button} onPress={pickDocument}>
        <Text style={styles.buttonText}>Choose File</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontFamily: FONTS.body,
    color: COLORS.paragraphColor,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.mainColorOne,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FONTS.bodyBold,
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: FONTS.body,
    color: COLORS.headingColor,
  },
});
