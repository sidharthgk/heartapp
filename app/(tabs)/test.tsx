import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, FONTS } from "../theme";

export default function Test() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Health Test</Text>
      <Text style={styles.subText}>
        Select an option below to analyze your heart health.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/test/ecg-upload")}>
        <Text style={styles.buttonText}>Upload ECG Report</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/test/connect-watch")}>
        <Text style={styles.buttonText}>Connect Smartwatch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/test/heart-quiz")}>
        <Text style={styles.buttonText}>Take Health Assessment</Text>
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
});
