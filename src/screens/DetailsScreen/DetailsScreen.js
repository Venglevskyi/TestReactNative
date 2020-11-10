import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

import { styles } from "./styles";
import { aboutArtist } from "../../api/api";

const DetailsScreen = ({ route }) => {
  const { name } = route.params;

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    aboutArtist(name).then((data) => setArtist(data));
  }, []);

  return (
    <View style={styles.container}>
      {artist && (
        <Card>
          <Card.Title>{`Artist name: ${artist.name}`}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.cardImage}
            source={{
              uri:
                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            }}
          ></Card.Image>
          <Text style={styles.cardText}>
            {`About artist: ${artist.bio.summary}`}
          </Text>
          <Text style={styles.cardText}>
            {`Tags: ${artist.tags.tag.map((tag) => tag.name)}`}
          </Text>
        </Card>
      )}
    </View>
  );
};
export { DetailsScreen };
