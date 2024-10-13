import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, SafeAreaView, Button } from "react-native";
import { useLocationProvider } from "../providers/LocationProvider";

const Form = () => {
  const [nameLocation, setNameLocation] = useState("");
  const [latLocation, setLatLocation] = useState("");
  const [longLocation, setLongLocation] = useState("");
  const [colorLocation, setColorLocation] = useState("");
  const { addMarkers, markers } = useLocationProvider();

  const changeNameLocation = (e) => {
    setNameLocation(e);
  };
  const changeLatLocation = (e) => {
    setLatLocation(e);
  };
  const changeLongLocation = (e) => {
    setLongLocation(e);
  };
  const changeColorLocation = (e) => {
    setColorLocation(e);
  };

  const handleSubmit = () => {
    if (nameLocation && latLocation && longLocation && colorLocation) {
      const newLocation = {
        name: nameLocation,
        latitude: latLocation,
        longitude: longLocation,
        color: colorLocation,
      };
      addMarkers(newLocation);
      console.log(markers);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={changeNameLocation}
        value={nameLocation}
        placeholder="Posto Petrobrás"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={changeLatLocation}
        value={latLocation}
        placeholder="Latitude"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={changeLongLocation}
        value={longLocation}
        placeholder="Longitude"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={changeColorLocation}
        value={colorLocation}
        placeholder="Cor do Marker"
      />

      <Button style={styles.button} title="Adicionar" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  textInput: {
    fontSize: 18,
    color: "#444",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 260,
  },
  button: {},
});

export default Form;
