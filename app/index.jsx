import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { useRouter, router } from "expo-router";
import { LocContext } from "../providers/LocationProvider";

export default function App() {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState(null);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const context = useContext(LocContext);

  const [permissionStatus, requestPermission] =
    Location.useForegroundPermissions();

  useEffect(() => {
    const getPermission = async () => {
      if (!permissionStatus?.granted) {
        const { status } = await requestPermission();
        if (status !== "granted") {
          Alert.alert("Permission to access location was denied.");
          return;
        }
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    getPermission();
  }, [permissionStatus]);

  useEffect(() => {
    // Quando o componente é montado, ajustamos o estado
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Só navega para a rota depois que o componente foi montado
    if (isMounted) {
      // router.push("/add-location");

      console.log(context);
    }
  }, [isMounted, router, context]);

  const addMarkers = (newMarker) => {
    if (markers) {
      setMarkers([...markers, newMarker]);
    } else {
      setMarkers([newMarker]);
    }
  };

  const getMarker = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    const marker = { latitude, longitude };
    addMarkers(marker);
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          onPress={getMarker}
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
              <Marker key={index} coordinate={marker} />
            ))}
          {/* {location && <Marker coordinate={location} />} */}
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
