import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

import { styles } from "./styles";
import { getDetailsTrack } from "../../redux/operations";

const DetailsScreen = ({ route }) => {
  const { name } = route.params;
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetailsTrack(name));
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
            {`Tags: ${artist.tags.tag.map((item) => item.name)}`}
          </Text>
        </Card>
      )}
    </View>
  );
};
export { DetailsScreen };
