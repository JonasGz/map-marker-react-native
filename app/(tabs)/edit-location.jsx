import { useLocalSearchParams } from "expo-router";
import React from "react";
import Form from "../../components/Form";
import { SafeAreaView, StyleSheet } from "react-native";

const EditLocation = () => {
  const { name, lat, long, color, id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {(name, lat, long, color, id) && (
        <Form
          id={id}
          name={name}
          lat={lat}
          long={long}
          color={color}
          type="edit-location"
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    margin: 20,
  },
});

export default EditLocation;
