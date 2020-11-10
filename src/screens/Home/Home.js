import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, View, Text } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { getTracks } from "../../redux/operations";

import { styles } from "./styles";
import { getPopularMusic } from "../../api/api";

const Home = ({ navigation, onGetTracks }) => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    getPopularMusic().then((data) => setTracks(data.track));
  }, []);

  // useEffect(() => {
  //   async function getRequest() {
  //     let data = await onGetTracks();
  //     setTracks(data);
  //   }
  //   getRequest();
  // }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {tracks &&
          tracks.map(({ name, playcount, artist }) => (
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
                <Text style={styles.trackName}>{name}</Text>
                <Text style={styles.artistName}>{artist.name}</Text>
              </View>
            </Image>
          ))}
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = {
  onGetTracks: getTracks,
};

export default connect(null, mapDispatchToProps)(Home);
