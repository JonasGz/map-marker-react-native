import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useRouter, router } from "expo-router";
import { LocContext, useLocationProvider } from "../providers/LocationProvider";

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
    router.push("/add-location");
    // console.log(location);
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
            markers.map((marker, index) => (
              <Marker
                title={marker.name}
                description={`Lat: ${marker.latitude} Long: ${marker.longitude}`}
                pinColor={marker.color}
                key={index}
                coordinate={marker}
              />
            ))}
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
