import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Dimensions, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { TextInput } from 'react-native-gesture-handler';
// import Geolocation from 'react-native-geolocation-service';
import { data } from './data';

export default function HelpMapItem(props) {

	const { animal } = props;
	return (



		<Marker
			coordinate={{
				latitude: animal.latitude,
				longitude: animal.longitude,
			}}
			title="流浪貓咪"
			description="有一隻流浪貓咪在這邊"
		/>


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
	}
})