import AsyncStorage from "@react-native-async-storage/async-storage";

const addData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const id = Math.random().toString();
    await AsyncStorage.setItem(id, jsonValue);
  } catch (error) {
    console.error("Erro ao salvar item no Storage", error);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("marker");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Erro ao receber valores do Storage", e);
  }
};

const getAllKeys = async () => {
  let keys = [];
  let values = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    values = await AsyncStorage.multiGet(keys);
    const arrayFormatted = values.map(([key, value]) => ({
      [key]: JSON.parse(value),
    }));
    return arrayFormatted;
    // console.log(arrayFormatted);
  } catch (e) {
    // read key error
  }
};

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("0.44944118427125573");
    console.log("removido");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

const removeAll = async () => {
  const keys = await AsyncStorage.getAllKeys();

  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // remove error
  }

  console.log("Done");
};

export { addData, getData, removeValue, getAllKeys, removeAll };
