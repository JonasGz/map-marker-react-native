import AsyncStorage from "@react-native-async-storage/async-storage";

const addData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const id = Math.random().toString();
    await AsyncStorage.setItem(id, jsonValue);
    console.log("Adicionado!");
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
  } catch (e) {
    console.error("Erro ao buscar keys!", e);
  }
};

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("Erro ao remover item!", e);
  }
};

const updateValue = async (id, value) => {
  try {
    const key = String(id);
    const valueStringify = JSON.stringify(value);
    await AsyncStorage.mergeItem(key, valueStringify);
  } catch (e) {
    console.error(e);
  }
};

export { addData, getData, removeValue, getAllKeys, updateValue };
