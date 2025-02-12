import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "./theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Heart Health</Text>
      <Text style={styles.subText}>
        Track your heart condition and get insights.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
  },
  subText: {
    fontSize: 16,
    fontFamily: FONTS.body,
    color: COLORS.paragraphColor,
    marginTop: 10,
  },
});
