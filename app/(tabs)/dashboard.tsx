import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS } from "../theme";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* User Profile */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userDetails}>Age: 30 | Male</Text>
        </View>
      </View>

      {/* Latest Tests */}
      <Text style={styles.sectionTitle}>Latest Tests</Text>
      <View style={styles.testCard}>
        <Text style={styles.testTitle}>ECG Report</Text>
        <Text style={styles.testDetails}>Normal | 24 Jan 2025</Text>
      </View>
      <View style={styles.testCard}>
        <Text style={styles.testTitle}>Heart Rate</Text>
        <Text style={styles.testDetails}>72 BPM | 22 Jan 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    padding: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 20,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
  },
  userDetails: {
    fontSize: 14,
    fontFamily: FONTS.body,
    color: COLORS.paragraphColor,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
    marginBottom: 10,
  },
  testCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  testTitle: {
    fontSize: 16,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
  },
  testDetails: {
    fontSize: 14,
    fontFamily: FONTS.body,
    color: COLORS.paragraphColor,
  },
});
