import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentObject, setCurrentObject] = useState(null);
  const [history, setHistory] = useState([]);

  const addSubject = (subject) => {
    setHistory((histories) => [...histories, subject]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!currentObject ? (
        <>
          <Focus addSubject={setCurrentObject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentObject}
          onTimerEnd={addSubject}
          clearSubject={() => {
            setCurrentObject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
