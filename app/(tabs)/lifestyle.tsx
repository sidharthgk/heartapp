// app/lifestyle.tsx
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TextInput } from "react-native";
import { COLORS, FONTS } from "../theme"; 

export default function LifestyleScreen() {
  const [highSugar, setHighSugar] = useState(false);
  const [fizzyDrinks, setFizzyDrinks] = useState(false);
  const [drugs, setDrugs] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [smokePerDay, setSmokePerDay] = useState<number>(1);
  const [tobaccoPerDay, setTobaccoPerDay] = useState<number>(0);
  const [alcoholUnits, setAlcoholUnits] = useState<number>(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lifestyle</Text>
      <View style={styles.row}>
        <Text style={styles.label}>High sugar/frequency</Text>
        <Switch value={highSugar} onValueChange={setHighSugar} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Fizzy/acidic drinks</Text>
        <Switch value={fizzyDrinks} onValueChange={setFizzyDrinks} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Recreational drugs</Text>
        <Switch value={drugs} onValueChange={setDrugs} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Pregnant or possibly pregnant</Text>
        <Switch value={pregnant} onValueChange={setPregnant} />
      </View>
      <View style={styles.multilineRow}>
        <Text style={styles.label}>Anything dentist should know</Text>
        <TextInput
          style={styles.textInput}
          multiline
          value={additionalInfo}
          onChangeText={setAdditionalInfo}
        />
      </View>

      <View style={styles.numberField}>
        <Text style={styles.label}>Smoke (per day): {smokePerDay}</Text>
      </View>
      <View style={styles.numberField}>
        <Text style={styles.label}>Chew tobacco (per day): {tobaccoPerDay}</Text>
      </View>
      <View style={styles.numberField}>
        <Text style={styles.label}>Alcohol (units per week): {alcoholUnits}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    padding: 16,
  },
  title: {
    fontFamily: FONTS.headingBold,
    fontSize: 20,
    color: COLORS.headingColor,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  multilineRow: {
    marginBottom: 12,
  },
  label: {
    fontFamily: FONTS.body,
    fontSize: 14,
    color: COLORS.paragraphColor,
    marginRight: 10,
    flex: 1,
  },
  textInput: {
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    height: 60,
  },
  numberField: {
    marginBottom: 12,
  },
});
