import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {styles} from '../../style.js';
import LocationsMenu from '../features/locationsMenu/locationsMenu.js';
import SelectedLocation from '../features/selectedLocation/selectedLocation.js' 

export default function Home() {
    return (
      <View style={styles.container} >
        <SelectedLocation />    
        <LocationsMenu />
      </View>
    );
  }