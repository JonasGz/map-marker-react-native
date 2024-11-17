import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useLocationProvider } from "../providers/LocationProvider";
import Tile from "./Tile";

const List = () => {
  const { markers } = useLocationProvider();
  return (
    <SafeAreaView>
      <FlatList
        style={style.list}
        data={markers}
        keyExtractor={(item) => Object.keys(item)[0]}
        estimatedItemSize={20}
        renderItem={({ item }) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          return (
            <>
              <Tile
                id={key}
                name={value.name}
                lat={value.latitude}
                long={value.longitude}
                color={value.color}
              />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
});

export default List;
