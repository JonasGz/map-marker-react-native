import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useRouter, router } from "expo-router";
import { LocContext, useLocationProvider } from "../providers/LocationProvider";
import {
  getAllKeys,
  removeAll,
  removeValue,
} from "../AsyncStorage/AsyncStorage";

export default function App() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { location, markers, getMarker } = useLocationProvider();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
    }
  }, [isMounted, router]);

  const consoleTest = () => {
    router.push("/list-location");
    // getAllKeys();
    // console.log(markers);
    // removeValue();
    // console.log(location);
    // removeAll();
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
              return (
                <Marker
                  title={value.name}
                  description={`Lat: ${value.latitude} Long: ${value.longitude}`}
                  pinColor={value.color}
                  key={index}
                  coordinate={{
                    latitude: value.latitude,
                    longitude: value.longitude,
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
