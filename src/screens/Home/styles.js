import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  image: {
    width: 180,
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
