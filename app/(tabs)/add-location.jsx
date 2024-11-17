import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Form from "../../components/Form";

const AddLocation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form type="add-location" />
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

export default AddLocation;
