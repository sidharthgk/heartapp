import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { COLORS, FONTS } from "../theme";

// A reusable progress bar component (no SVG needed).
function ProgressBar({ progress = 0, color = "#4ecdc4" }) {
  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBarFill,
          {
            width: `${progress}%`,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
}

export default function VitalsDashboard() {
  // Sample data
  const heartRate = 85;
  const maxHeartRate = 120; // example max threshold
  const steps = 12543;
  const dailyStepsGoal = 10000;

  // Calculate progress as a percentage
  const heartRateProgress = Math.min((heartRate / maxHeartRate) * 100, 100);
  const stepsProgress = Math.min((steps / dailyStepsGoal) * 100, 100);

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Your Vitals</Text>
          <Text style={styles.subHeading}>Daily Overview</Text>
        </View>

        <View style={styles.cardsContainer}>
          {/* Heart Rate Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Heart Rate</Text>
            </View>
            <Text style={styles.cardValue}>{heartRate}</Text>
            <Text style={styles.cardUnit}>bpm</Text>
            {/* Progress Bar for Heart Rate */}
            <ProgressBar
              progress={heartRateProgress}
              color="#ff6b6b" // a red-ish color
            />
            <Text style={styles.goalLabel}>Max: {maxHeartRate} bpm</Text>
          </View>

          {/* Steps Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Steps</Text>
            </View>
            <Text style={styles.cardValue}>{steps}</Text>
            <Text style={styles.cardUnit}>steps</Text>
            {/* Progress Bar for Steps */}
            <ProgressBar progress={stepsProgress} color="#4ecdc4" />
            <Text style={styles.goalLabel}>
              Daily Goal: {dailyStepsGoal} steps
            </Text>
          </View>
        </View>

        {/* You can add more vitals cards here (e.g. Calories, Sleep) */}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get("window");
const CARD_GAP = 16;
const CARD_WIDTH = (width - CARD_GAP * 3) / 2; // two cards per row, with margins

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    flex: 1,
    paddingHorizontal: CARD_GAP,
    marginBottom: 50, // space for navbar
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 24,
  },
  heading: {
    fontSize: 32,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
  },
  subHeading: {
    fontSize: 16,
    fontFamily: FONTS.body,
    color: COLORS.paragraphColor,
    marginTop: 4,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: CARD_WIDTH,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: FONTS.bodyBold,
    color: COLORS.headingColor,
  },
  cardValue: {
    fontSize: 28,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
    marginTop: 4,
  },
  cardUnit: {
    fontSize: 14,
    fontFamily: FONTS.body,
    color: COLORS.paragraphColor,
    marginBottom: 8,
  },
  goalLabel: {
    fontSize: 12,
    fontFamily: FONTS.body,
    color: COLORS.inactiveColor,
    marginTop: 6,
    textAlign: "right",
  },
  /* Progress Bar Styles */
  progressBarContainer: {
    height: 8,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4,
  },
});
