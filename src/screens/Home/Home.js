import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import { styles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello it is my first React Native App</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={() => navigation.navigate("Weather")}>
          <View style={styles.button}>
            <Text style={styles.text}>Go to weather</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate("Movies")}>
          <View style={styles.button}>
            <Text style={styles.text}>Go to movies</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export { Home };
