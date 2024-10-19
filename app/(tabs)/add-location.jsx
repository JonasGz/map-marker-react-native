import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
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
  },
});

export default AddLocation;
