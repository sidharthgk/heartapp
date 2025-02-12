import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../theme";

export default function HeartQuizResults() {
  const { score } = useLocalSearchParams();
  const router = useRouter();

  let resultText = "";
  let resultColor = COLORS.mainColorOne;

  if (Number(score) >= 5) {
    resultText = "High Risk: Please consult a cardiologist.";
    resultColor = "#D9534F";
  } else if (Number(score) >= 3) {
    resultText = "Moderate Risk: Consider monitoring your symptoms.";
  } else {
    resultText = "Low Risk: Your heart health appears to be fine.";
    resultColor = "#28A745";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Assessment Complete</Text>
      <Text style={[styles.resultText, { color: resultColor }]}>{resultText}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/dashboard")}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
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
    fontSize: 22,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
    marginBottom: 15,
  },
  resultText: {
    fontSize: 18,
    fontFamily: FONTS.bodyBold,
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
