// App.js
import React, { useState } from "react";
import {
  View,
  Picker,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from "react-native";
function App() {
  const [selectedAthlete, setAthlete] = useState("Unknown");
  const [text, setText] = useState(undefined);
  const [currentView, setView] = useState("Input");
  const athletes = ["Pascal", "Philipp", "Paula"];

  if (currentView == "Input") {
    return (
      <View style={styles.screen}>
        <Text style={styles.headline}>Trainingsauswertung</Text>

        <Picker
          selectedValue={selectedAthlete}
          onValueChange={(value, index) => setAthlete(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          <Picker.Item
            label="Bitte wähle ein/e Athlet/in aus"
            value="Unknown"
          />
          {athletes.map((athlete, key) => (
            <Picker.Item key={key} label={athlete} value={athlete} />
          ))}
        </Picker>

        <TextInput
          type="number"
          style={styles.picker}
          onChangeText={setText}
          value={text}
          placeholder="Bitte gebe deine Zeit in Sekunden ein"
        />

        {/*disabled={text == undefined || selectedAthlete == "Unknown"} */}
        <Button
          title="Auswerten"
          onPress={() => {
            setView("Auswertung");
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Text style={styles.auswertung}>Ich bin die Auswertung</Text>
        <Button
          color="#841584"
          title="Home"
          onPress={() => {
            setView("Input");
          }}
        />
      </View>
    );
  }
}

export default App;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 24,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
  auswertung: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
