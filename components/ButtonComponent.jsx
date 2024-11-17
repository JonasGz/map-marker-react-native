import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { useLocationProvider } from "../providers/LocationProvider";
import {
  getAllKeys,
  removeValue,
  updateValue,
} from "../AsyncStorage/AsyncStorage";

const ButtonComponent = ({ id, name, latitude, longitude, color, type }) => {
  const { addMarkers, markers } = useLocationProvider();
  const [isClick, setIsClick] = useState(false);

  const handleSubmit = async () => {
    try {
      if (name && latitude && longitude && color) {
        const newLocation = {
          name: name,
          latitude: latitude,
          longitude: longitude,
          color: color,
        };
        await addMarkers(newLocation);
        setIsClick(!isClick);
      }
    } catch (error) {
      console.error("Erro ao adicionar localização", error);
    }
  };

  const handleEdit = async () => {
    try {
      const editLocation = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        color: color,
      };
      await updateValue(id, editLocation);
      setIsClick(!isClick);
    } catch (error) {
      console.error("Não foi possível atualizar a localização!", error);
    }
  };

  useEffect(() => {
    if (isClick) {
      const timer = setTimeout(() => {
        setIsClick(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isClick]);

  if (type === "edit-location") {
    return (
      <>
        <TouchableOpacity onPress={handleEdit} style={styles.button}>
          <Text style={styles.text}>Editar</Text>
        </TouchableOpacity>
        {isClick && <Text>Localização atualizada com sucesso!</Text>}
      </>
    );
  }
  if (type === "remove-location") {
    return (
      <>
        <TouchableOpacity onPress={handleRemove} style={styles.button}>
          <Text style={styles.text}>Remove</Text>
        </TouchableOpacity>
        {isClick && <Text>Localização atualizada com sucesso!</Text>}
      </>
    );
  }

  if (type === "add-location") {
    return (
      <>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
        {isClick && <Text>Localização adicionada com sucesso!</Text>}
      </>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 28,
    paddingRight: 28,
    borderRadius: 10,
    maxWidth: 120,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default ButtonComponent;
