import React, { createContext, useContext, useState, useEffect } from "react";
import * as Location from "expo-location";
import { addData, getAllKeys } from "../AsyncStorage/AsyncStorage";

const LocContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState(null);

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
    const getMarkersDb = async () => {
      try {
        const markersDb = await getAllKeys();
        if (markersDb) {
          setMarkers(markersDb);
        }
      } catch (error) {
        console.error("Erro ao pegar os dados do Storage", error);
      }
    };

    getMarkersDb();
  }, [markers]);

  const addMarkers = async (newMarker) => {
    try {
      await addData(newMarker);
      const markersDb = await getAllKeys();
      setMarkers(markersDb);
      console.log("adicionei ao setMarkers");
    } catch (e) {
      console.error(e);
    }
  };

  const getMarker = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    const marker = { latitude, longitude };
    addMarkers(marker);
  };

  return (
    <LocContext.Provider
      value={{
        location,
        setLocation,
        markers,
        setMarkers,
        getMarker,
        addMarkers,
      }}
    >
      {children}
    </LocContext.Provider>
  );
};

export const useLocationProvider = () => useContext(LocContext);
