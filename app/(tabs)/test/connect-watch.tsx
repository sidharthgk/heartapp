import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { COLORS, FONTS } from "../../theme";

export default function ConnectWatch() {
  const [connected, setConnected] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Connect Your Smartwatch</Text>
      <Text style={styles.subText}>
        Sync your smartwatch to track real-time heart rate.
      </Text>

      <TouchableOpacity
        style={[styles.button, connected ? styles.connectedButton : {}]}
        onPress={() => setConnected(!connected)}
      >
        <Text style={styles.buttonText}>
          {connected ? "Connected" : "Connect Watch"}
        </Text>
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FONTS.bodyBold,
  },
  connectedButton: {
    backgroundColor: "#008000",
  },
});
