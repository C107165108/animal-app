

import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import StreetView from 'react-native-streetview';
import Geolocation from '@react-native-community/geolocation';
import { TextInput } from 'react-native-gesture-handler';

// const location = {
//   latitude: 37.809473,
//   longitude: -122.47614,
//   radius: 50,
// };


const initialState = {
  latitude: 22.723826907971404,
  longitude: 120.36387777399943,
  //latitude: 22.633333, 高雄
  //longitude: 120.266670,
  latitudeDelta: 0.1, //大約半徑3公里
  longitudeDelta: 0.05,
};

export default class HelpStreet extends Component {
  constructor() {
    super();
    this.state = {
      curentPosition: null,
    };
  }



  // onChange = (value) => {
  //   this.setState({
  //     curentPosition: value,
  //   });
  // };

  // componentDidMount() {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       const { longitude, latitude } = position.coords;
  //       this.setState({
  //         curentPosition: {
  //           ...this.state.curentPosition,
  //           latitude,
  //           longitude,
  //         },
  //       });
  //     },
  //     (error) => alert(error.message),
  //     { timeout: 20000, maximumAge: 1000 },
  //   );
  // }

  render() {
    const initialState = {
      latitude: 22.723826907971404,
      longitude: 120.36387777399943,
    }

    return (
      <View style={styles.container}>
        <View>
          {/* <TextInput value={curentPosition} placeholder='輸入' onChange={onChange} style={styles.search}> </TextInput> */}
        </View>
        <View>
          <StreetView
            style={styles.streetView}
            allGesturesEnabled={true}
            coordinate={{
              latitude: initialState.latitude,
              longitude: initialState.longitude,
            }}
            pov={{
              tilt: parseFloat(0),
              bearing: parseFloat(0),
              zoom: parseInt(1),
            }}

          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  streetView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 35,
  },
  search: {
    backgroundColor: 'red',
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