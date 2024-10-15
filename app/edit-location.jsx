import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const EditLocation = () => {
  const { name, lat, long } = useLocalSearchParams();
  return <Text>{name}</Text>;
};

export default EditLocation;
