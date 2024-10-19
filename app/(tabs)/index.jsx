import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useRouter, router } from "expo-router";
import { useLocationProvider } from "../../providers/LocationProvider";
import useOrientation from "../../hooks/useOrientation";

export default function App() {
  const router = useRouter();
  const { location, markers } = useLocationProvider();

  const orientation = useOrientation();

  const handleClick = (key, value) => {
    router.push({
      pathname: "edit-location",
      params: {
        name: value.name,
        lat: value.latitude,
        long: value.longitude,
        color: value.color,
        id: key,
      },
    });
  };

  const consoleTest = () => {
    // router.push("/list-location");
    // console.log(getAllKeys());
    // console.log(markers);
    // removeValue();
    // console.log(location);
    // removeAll();
    // console.log("essa é a orientarion", orientation);
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          onPress={() => consoleTest()}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
        >
          {markers &&
            markers.map((marker, index) => {
              const key = Object.keys(marker)[0];
              const value = marker[key];
              const latitude = value.latitude;
              const longitude = value.longitude;

              return (
                <Marker
                  onCalloutPress={() => handleClick(key, value)}
                  title={value.name}
                  description={`Lat: ${value.latitude} Long: ${value.longitude}`}
                  pinColor={value.color}
                  key={index}
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                />
              );
            })}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
