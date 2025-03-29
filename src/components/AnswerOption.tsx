import { Text, StyleSheet, Pressable } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOptionProps = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOptionProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      style={[
        styles.container,
        isSelected && { backgroundColor: "#E1f396", borderColor: "#E1f396" },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
