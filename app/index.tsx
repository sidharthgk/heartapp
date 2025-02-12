import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, FONTS } from "./theme";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Heart Health</Text>
      <Text style={styles.subText}>
        Monitor your heart, track symptoms, and stay informed.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/dashboard")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FONTS.bodyBold,
  },
});
