import { Pressable, Text, StyleSheet, View } from "react-native";
import { ComponentProps } from "react";

type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
} & ComponentProps<typeof Pressable>;

export default function CustomButton({
  title,
  rightIcon,
  ...pressableProps
}: CustomButtonProps) {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
