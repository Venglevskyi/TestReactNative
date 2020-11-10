import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  image: {
    width: 200,
    height: 300,
    resizeMode: "cover",
    marginBottom: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export { styles };
