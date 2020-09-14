import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Card } from "react-native-elements";

import { getCurrentWeatherByQuery } from "../../api/api";
import { styles } from "./styles";

const WeatherScreen = () => {
  const [inputText, setInputText] = useState("");
  const [weather, setWeather] = useState(null);

  const handleChange = (text) => setInputText(text);

  const handleSubmit = () => {
    getCurrentWeatherByQuery(inputText.toUpperCase()).then((data) =>
      setWeather(data)
    );
    setInputText("");
  };
  // const { request, current } = weather;
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your city"
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        value={inputText}
      />
      {weather && (
        <Card>
          <Card.Title>{weather.request.query}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.cardImage}
            source={{
              uri: weather.current.weather_icons[0],
            }}
          ></Card.Image>
          <Text style={styles.cardText}>
            {`Temperature: ${weather.current.temperature} C`}
          </Text>
          <Text style={styles.cardText}>
            {weather.current.observation_time}
          </Text>
        </Card>
      )}
    </View>
  );
};

export { WeatherScreen };
