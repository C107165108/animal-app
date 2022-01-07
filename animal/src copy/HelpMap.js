import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Dimensions, View,Text,Image,Animated } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker,Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { TextInput } from 'react-native-gesture-handler';
import { SourceCode } from 'eslint';
// import Geolocation from 'react-native-geolocation-service';


export default function HelpMap(props) {
	const { animals } = props;
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: 22.633333,
				longitude: 120.266670,
				latitudeDelta: 0.1, //半徑
				longitudeDelta: 0.05
			}}
			provider="google"
		>

			{animals.map((animal, index) => (
				<Marker
					key={index}
					coordinate={{ latitude: animal.latitude, longitude: animal.longitude }}
					title={animal.title}
					description={animal.description}
					pinColor={"purple"}

				>
					 <Callout >

					<Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('./images/cat1.jpeg')}
                  style={styles.marker}
                  // resizeMode="cover"
                />
              </Animated.View>
				</Callout>
				</Marker>

			))}
		</MapView>

	);
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	marker: {
    width: 50,
    height: 50,
  },
})