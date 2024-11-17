import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Platform } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { useRouter, router } from "expo-router";
import { useLocationProvider } from "../../providers/LocationProvider";
import useOrientation from "../../hooks/useOrientation";
import List from "../../components/List";

export default function App() {
  const router = useRouter();
  const { location, markers } = useLocationProvider();
  const { isPortrait } = useOrientation();

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

  if (!isPortrait) {
    return (
      <View style={stylesLandscape.container}>
        <List />
        {location && (
          <MapView
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              showsUserLocation,
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
                    draggable
                    onCalloutPress={() => handleClick(key, value)}
                    title={value.name}
                    description={`Lat: ${value.latitude} Long: ${value.longitude}`}
                    pinColor={value.color}
                    key={index}
                    coordinate={{
                      latitude:
                        Platform.OS === "ios" ? latitude : parseFloat(latitude),
                      longitude:
                        Platform.OS === "ios"
                          ? longitude
                          : parseFloat(longitude),
                    }}
                  />
                );
              })}
          </MapView>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {location && (
          <MapView
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
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
                      latitude:
                        Platform.OS === "ios" ? latitude : parseFloat(latitude),
                      longitude:
                        Platform.OS === "ios"
                          ? longitude
                          : parseFloat(longitude),
                    }}
                  />
                );
              })}
          </MapView>
        )}
      </View>
    );
  }
}

const stylesLandscape = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
