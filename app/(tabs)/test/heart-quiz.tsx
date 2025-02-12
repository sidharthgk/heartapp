import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, FONTS } from "../../theme";

const questions = [
  { id: 1, text: "Do you experience chest pain, pressure, or discomfort?" },
  { id: 2, text: "Do you find yourself short of breath during routine activities?" },
  { id: 3, text: "Have you noticed rapid, fluttering, or irregular heartbeats?" },
  { id: 4, text: "Have you experienced unexplained dizziness or fainting?" },
  { id: 5, text: "Is there swelling in your feet, ankles, or legs?" },
  { id: 6, text: "Do you feel unusually tired or fatigued, even with adequate rest?" },
  { id: 7, text: "Are you able to perform daily activities without discomfort?" },
];

export default function HeartQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const router = useRouter();

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to results page
      router.push({
        pathname: "/test/heart-quiz-results",
        params: { score: answers.reduce((a, b) => a + b, answer) },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>
        Question {currentQuestion + 1} of {questions.length}
      </Text>

      <Text style={styles.questionText}>{questions[currentQuestion].text}</Text>

      <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={() => handleAnswer(1)}>
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.noButton]} onPress={() => handleAnswer(0)}>
        <Text style={styles.buttonText}>No</Text>
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
  progressText: {
    fontSize: 14,
    fontFamily: FONTS.body,
    color: COLORS.inactiveColor,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 20,
    fontFamily: FONTS.headingBold,
    color: COLORS.headingColor,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  yesButton: {
    backgroundColor: COLORS.mainColorOne,
  },
  noButton: {
    backgroundColor: "#D9534F",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FONTS.bodyBold,
  },
});
