import { React } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { removeValue } from "../AsyncStorage/AsyncStorage";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tile = ({ name, lat, long, color, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "edit-location",
      params: { name, lat, long, color, id },
    });
  };

  const handleRemove = async () => {
    try {
      const key = String(id);
      await removeValue(key);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <TileContainer onPress={handleClick}>
        <Container>
          <ContainerTitle>
            <NameText> {name}</NameText>
            <ColorMarker color={color} />
          </ContainerTitle>

          <InfoContainer>
            <InfoText>Lat: {lat}</InfoText>
            <InfoText>Long: {long}</InfoText>
            <InfoText>Color: {color}</InfoText>
          </InfoContainer>
        </Container>
      </TileContainer>
      <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
        <Ionicons name="remove-circle" size={32} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  removeButton: {
    padding: 10,
    borderRadius: 10,
  },
  textRemoveButton: {
    color: "#fff",
  },
});

const TileContainer = styled(TouchableOpacity)`
  margin-bottom: 10px;
`;

const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 16px;
  background-color: #ddd;
  border-radius: 10px;
  gap: 10px;
`;

const NameText = styled.Text`
  font-size: 16px;
`;

const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 10px;
  padding-left: 4px;
`;

const InfoText = styled.Text``;

const ColorMarker = styled.SafeAreaView`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ color }) => color || "#ddd"};
`;

export default Tile;
