import AsyncStorage from "@react-native-async-storage/async-storage";

const addData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("marker", jsonValue);
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

export { addData, getData };
