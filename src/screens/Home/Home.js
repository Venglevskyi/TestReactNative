import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, View, Text, Button } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { getTracks } from "../../redux/operations";

import { styles } from "./styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(getTracks());
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {tracks &&
          tracks.map(({ name, playcount, artist, url }) => (
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
              }}
              PlaceholderContent={<ActivityIndicator />}
              key={playcount}
              onPress={() =>
                navigation.navigate("Details", {
                  name: artist.name,
                })
              }
            >
              <View style={styles.wrapper}>
                <Text>{name}</Text>
                <Text>{artist.name}</Text>
                <Text>{url}</Text>
              </View>
            </Image>
          ))}
      </View>
      <Button
        title="Search more tracks"
        color="#6666ff"
        onPress={() => navigation.navigate("Search")}
      ></Button>
    </ScrollView>
  );
};

export { Home };
