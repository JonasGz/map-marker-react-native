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
        estimatedItemSize={20}
        renderItem={({ item }) => (
          <Tile name={item.name} lat={item.latitude} long={item.longitude} />
        )}
      />
    </SafeAreaView>
  );
};

export default List;
