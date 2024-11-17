import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import ButtonComponent from "./ButtonComponent";

const Form = ({ name, lat, long, color, type, id }) => {
  const [nameLocation, setNameLocation] = useState("");
  const [latLocation, setLatLocation] = useState("");
  const [longLocation, setLongLocation] = useState("");
  const [colorLocation, setColorLocation] = useState("");

  useEffect(() => {
    setNameLocation(name || "");
    setLatLocation(lat || "");
    setLongLocation(long || "");
    setColorLocation(color || "");
  }, [name, lat, long, color]);

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

  return (
    <View style={styles.container}>
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
      {type === "edit-location" ? (
        <>
          <ButtonComponent
            id={id}
            name={nameLocation}
            latitude={latLocation}
            longitude={longLocation}
            color={colorLocation}
            type="edit-location"
          />
        </>
      ) : (
        <ButtonComponent
          id={id}
          name={nameLocation}
          latitude={latLocation}
          longitude={longLocation}
          color={colorLocation}
          type="add-location"
        />
      )}
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    fontSize: 18,
    color: "#444",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // width: 260,
  },
  button: {},
});

export default Form;
