import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttonContainer: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 150,
    backgroundColor: "#97d1cb",
    padding: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
});

export { styles };
