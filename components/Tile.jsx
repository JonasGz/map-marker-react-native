import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Tile = ({ name, lat, long, color, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "edit-location",
      params: { name, lat, long, color, id },
    });
  };

  return (
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
  );
};

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
