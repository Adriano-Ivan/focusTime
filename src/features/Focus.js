import React, { useState } from "react";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [text, setText] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on ?"
          value={text}
          onChangeText={(text) => {
            setText(text);
          }}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(text)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: "row",
    justifyContent: "top",
  },
  text: {
    color: colors.white,
  },
});
