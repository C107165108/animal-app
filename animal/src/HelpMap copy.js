import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Dimensions, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { TextInput } from 'react-native-gesture-handler';
// import Geolocation from 'react-native-geolocation-service';
import { data } from './data';
import HelpMapItem from './HelpMapItem';

export default class HelpMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animals: data,
		};
	}

	render() {

		const { animals } = this.state;

		console.log('data')
		return (

			<View>

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
					{	animals.map((animals) => (
							<Marker
							key={animals.id}
								coordinate={{
									latitude: animals.latitude,
									longitude: animals.longitude,
								}}
								title="流浪貓咪"
								description="有一隻流浪貓咪在這邊"
							/>
						))}
				</MapView>
			</View>
		);
	}
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