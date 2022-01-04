

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import StreetView from 'react-native-streetview';
import Geolocation from '@react-native-community/geolocation';

const location = {
  latitude: 37.809473,
  longitude: -122.47614,
  radius: 50,
};


const initialState = {
  latitude: 0,
  longitude: 0,
  //latitude: 22.633333, 高雄
  //longitude: 120.266670,
  latitudeDelta: 0.1, //大約半徑3公里
  longitudeDelta: 0.05,
};

export default class Location extends Component {
  constructor() {
    super();
    this.state = {
      curentPosition: initialState,
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        this.setState({
          curentPosition: {
            ...this.state.curentPosition,
            latitude,
            longitude,
          },
        });
      },
      (error) => alert(error.message),
      { timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    const { curentPosition } = this.state;
    return (
      <View style={styles.container}>
        <StreetView
          style={styles.streetView}
          allGesturesEnabled={true}
          coordinate={{
            latitude: curentPosition.latitude,
            longitude: curentPosition.longitude,
          }}
          pov={{
            tilt: parseFloat(0),
            bearing: parseFloat(0),
            zoom: parseInt(1),
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// import React, { Component } from 'react';
// import {
//     View,
//     TextInput,
// } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// export default class Location extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             initialRegion: {
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             }
//         };
//     }
//     render() {
//         return (
//             <View>
//                 <MapView  initialRegion={this.state.initialRegion}/>
//                 <View style={{ position: 'absolute', top: 10, width: '100%' }}>
//                     <TextInput
//                         style={{
//                             borderRadius: 10,
//                             margin: 10,
//                             color: '#000',
//                             borderColor: '#666',
//                             backgroundColor: '#FFF',
//                             borderWidth: 1,
//                             height: 45,
//                             paddingHorizontal: 10,
//                             fontSize: 18,
//                         }}
//                         placeholder={'Search'}
//                         placeholderTextColor={'#666'}
//                     />
//                 </View>
//             </View>
//         )
//     }
// }