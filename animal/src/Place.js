import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Placesearch from 'react-native-placesearch';


export default class HelpList extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render() {
      return (
        <Placesearch 
        apikey="your api key" // required *
        SelectedAddress={(data)=>console.log(data)} // required *
        onClose={(data)=>console.log(data)}
        country ="country code" //optional
        coordinate={true} //optional
        removeImg = {true} //optional
        StatusBarColor="Your color code" //option *only for android
        StatusBarStyle="" //option  default "dark-content" *only for android
        ContainerBackgroundColor="Your color code" // optional
        // InputContainer = {{'your style goes here'}} //optional
        // MainContainer = {{'your style goes here'}} //optional
        // ListStyle = {{'your style goes here'}} //optional
        // ListTextStyle = {{'your style goes here'}} //optional
        // ListIconStyle = {{'your style goes here'}} //optional
        // ImgStyle = {{'your style goes here'}} //optional
        // Img = {{'your style goes here'}} //optional
        // textInput = {{'your style goes here'}} //optional
        // placeHolder = {{'type any textInput placeholder as you like'}} //optional
        />
      );
  }
}