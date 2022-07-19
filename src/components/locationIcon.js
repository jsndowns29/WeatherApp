import React , { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {styles} from '../../style.js';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { getCurrentWeather, selectSelectedLocation } from '../features/selectedLocation/selectedLocationSlice.js';
import { deleteLocation, reindex } from '../features/locationsMenu/locationsMenuSlice.js';
import { Swipeable } from 'react-native-gesture-handler'; 
import axios from 'axios';



export default function LocationIcon({location, locationService, noAddedLocations, index}) {

    const getNameFromCoord = async(lat, lon)=>{

        let name = '';
    
        const APIKey = 'ad9f3fbb812c1f6824629c31dcbcf823';
    
        const query = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`;
        
        await axios.get(query)
        .then(function (response) {
            // handle success
            
            name = response.data.name;
            
    
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
        return name;
    }

    const [name, setName] = useState(location.name);

    //get name of city from location service coordinates 
    useEffect(()=>{
        async function getName(){
            if(locationService === 1){
                location.name = await getNameFromCoord(location.lat, location.lon);
                setName('📍' + location.name + '	');
            }
        }
        getName();
        
    });

    const dispatch = useDispatch();
    
    const weather = () => {
        const data = {lat: location.lat, lon: location.lon, name: location.name};
        dispatch(getCurrentWeather(data));
    }

    //startup display options
    useEffect(()=>{
        //display current location if there are no user added locations on startup
        if(noAddedLocations && locationService){
            weather();
        }
        //display 1st city if user added locations
        else if (!noAddedLocations && !locationService && index===0){
            weather();
        }
    }, []);
       
    
    const state = useSelector(selectSelectedLocation);
    
    
    //remove deleted location from state
    const deleteThisLocation = () =>{
        console.log("deleted id:" + location.id);
        let coords = {
            lat: location.lat,
            lon: location.lon
        }
        dispatch(deleteLocation(coords));

    }
    
    //delete button
    const DeleteAction = () => {
    
        return (
            <Pressable onPress={deleteThisLocation}>
                <View style={[styles.locationIcon, {backgroundColor: 'red'}]}>
                    <Text style={styles.locationIconText}>
                        Delete
                    </Text>
                </View>
            </Pressable>
        );
    }
    

    return (

        //don't allow deletion on for current location, only user added
        <View>
            {locationService !== 1 ?
            <Swipeable
                renderRightActions={DeleteAction}
            >
                <Pressable onPress={weather}>
                    <View style={styles.locationIcon}>
                        <Text style={styles.locationIconText}>
                            {location.name}
                        </Text>
                    </View>
                </Pressable>
            </Swipeable>
            :
            <Pressable onPress={weather}>
                <View style={styles.locationIcon}>
                    <Text style={styles.locationIconText}>
                        {name}
                    </Text>
                </View>
            </Pressable>}
        </View>
    );
}
