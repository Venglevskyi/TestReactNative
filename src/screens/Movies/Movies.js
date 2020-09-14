import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

import { showPopularMovies } from "../../api/api";
import { styles } from "./styles";

const MoviesScreen = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    showPopularMovies().then((data) => setMovies(data));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {movies &&
          movies.map(({ poster_path, id }) => (
            <Image
              key={id}
              source={{
                uri: `http://image.tmdb.org/t/p/w500/${poster_path}`,
              }}
              style={styles.image}
              PlaceholderContent={<ActivityIndicator />}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export { MoviesScreen };
