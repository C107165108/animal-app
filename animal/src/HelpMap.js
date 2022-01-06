import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { TextInput } from 'react-native-gesture-handler';
// import Geolocation from 'react-native-geolocation-service';


      
const initialState = {
  latitude: null,
  longitude: null,
  // latitude: 22.633333, 
  // longitude: 120.266670,
  latitudeDelta: 0.1, //大約半徑3公里
  longitudeDelta: 0.05,
};

const HelpMap = () => {
  const [curentPosition, setCurentPosition] = useState(initialState);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setCurentPosition({
          ...curentPosition,
          latitude,
          longitude,
        });
      },
      (error) => alert(error.message),
      { timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  return curentPosition.latitude ? (
  
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      showsUserLocation
      initialRegion={curentPosition}
    >
      <Marker
        coordinate={{
          latitude: 22.633333, 
          longitude: 120.266670,
        }}
        // image={require('../system3-2/images/map-marker.png')}
        // title="流浪貓咪"
        // description="有一隻流浪貓咪在這邊"
      />
    </MapView>
  ) : (
    <ActivityIndicator style={{ flex: 1 }} animating size="large" />
  );
};

export default HelpMap;

