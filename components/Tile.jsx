import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRouter, router } from "expo-router";
import { TouchableOpacity } from "react-native";

const Tile = ({ name, lat, long, color, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "edit-location",
      params: { name, lat, long, color, id },
    });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Text style={styles.name}> {name}</Text>
        <View style={styles.containerInfos}>
          <Text>Latitude: {lat}</Text>
          <Text>Longitude: {long}</Text>
          <Text>Color: {color}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 16,
    backgroundColor: "#ddd",
    margin: 8,
    borderRadius: 10,
    gap: 10,
  },
  name: {
    fontSize: 16,
  },
  containerInfos: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    paddingLeft: 4,
  },
});

export default Tile;
