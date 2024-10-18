import { useLocalSearchParams } from "expo-router";
import React from "react";
import Form from "../../components/Form";

const EditLocation = () => {
  const { name, lat, long, color, id } = useLocalSearchParams();
  return (
    <Form
      id={id}
      name={name}
      lat={lat}
      long={long}
      color={color}
      type="edit-location"
    />
  );
};

export default EditLocation;
