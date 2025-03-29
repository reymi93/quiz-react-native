import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "../hooks/useTimer";

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  const { timer, starTimer, clearTimer } = useTimer(20);

  useEffect(() => {
    starTimer();
    return () => {
      clearTimer();
    };
  }, [question]);

  useEffect(() => {
    if (timer <= 0) {
      onNext();
    }
  }, [timer]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/*Header */}
        <View>
          <Text style={styles.title}>
            {" "}
            Pregunta {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {/*Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{timer} sec</Text>
          </View>
        ) : (
          <Card title="Bien hecho">
            <Text>
              Preguntas correctas: {score}/{totalQuestions}
            </Text>
            <Text>Mejor Score: {bestScore}</Text>
          </Card>
        )}

        {/*Footer */}
        <CustomButton
          title="Siguiente"
          onPress={onNext}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        ></CustomButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "fdfef4",
    marginTop: 40,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});
