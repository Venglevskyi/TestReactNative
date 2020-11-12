import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { Input, Card } from "react-native-elements";
import { searchTrack } from "../../redux/operations";

import { styles } from "./styles";

const FindTrack = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();
  const track = useSelector((state) => state.searchTrack);

  const handleChange = (text) => setTextInput(text);

  const handleSubmit = () => {
    dispatch(searchTrack(textInput.toUpperCase()));
    setTextInput("");
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your track"
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        value={textInput}
      />
      {track &&
        track.map((track) => (
          <Card>
            <Card.Title>{`Artist: ${track.artist}`}</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>{}</Text>
            <Text style={styles.cardText}>{`Track name: ${track.name}`}</Text>
          </Card>
        ))}
    </View>
  );
};

export { FindTrack };
