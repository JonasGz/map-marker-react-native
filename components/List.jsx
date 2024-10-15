import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { useLocationProvider } from "../providers/LocationProvider";
import Tile from "./Tile";

const List = () => {
  const { markers } = useLocationProvider();
  return (
    <SafeAreaView>
      <FlatList
        data={markers}
        keyExtractor={(item) => Object.keys(item)[0]}
        estimatedItemSize={20}
        renderItem={({ item }) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            <Tile
              name={value.name}
              lat={value.latitude}
              long={value.longitude}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default List;
