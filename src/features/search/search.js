import React , { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {styles} from '../../../style.js';
import { StyleSheet, Text, View, Pressable, Button, SafeAreaView, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { selectSearch, getSearchSuggestions, clearSearchResults } from './searchSlice.js';
import SearchSuggestion from "../../components/searchSuggestion.js";
import { useNavigation } from '@react-navigation/native';



export default function Search() {
    
    const [search, setSearch] = useState('');
    //get search sugestions
    const state = useSelector(selectSearch);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    

    //update search query state and dispatch api call with query
    const updateSearch = (query) => {
        setSearch(query);
        dispatch(clearSearchResults())           
    }
    //call API for search results
    const queryAPI = () => {
        if(search !== ""){
            dispatch(getSearchSuggestions(search));
        }
    }

    //triggered by back button
    let goHome = () => {
        dispatch(clearSearchResults())
        return navigation.navigate('Home')
    }

    //check if there are search results saved in state, if not render placeholder
    let results;
    if(Object.keys(state).length > 0){
        let key = 0;
        results = state.search.map((location)=>(
                  
            <SearchSuggestion key={key = key + 1} location={location} />
                
    
        ));
    }else{
        results = <Text></Text>;
    }
    

    return (
        <SafeAreaView style={styles.searchScreen} > 

            <View style={styles.header}>
                <Button 
                    style={styles.backButton}
                    onPress={goHome}
                    title={'\u21e6'}
                    color="black"
                />
                <Text style={styles.headerText}>Add a new city</Text>
            </View>

            <View style={styles.searchContainer}>
                
                <TextInput
                    style={styles.searchBox}
                    placeholder="Search new locations"
                    onChangeText={updateSearch}
                    value={search}
                    autoFocus={true}
                    clearButtonMode='always'
                    onSubmitEditing={()=>{
                        queryAPI();
                    }}
                                   
                /> 
                    
                <View style={styles.searchButton}>
                <Button
                    
                    onPress={queryAPI}
                    title="search"
                    color="white"
                     
                />
                </View>

            </View>
            {results}
            
            
                      
        </SafeAreaView>
    );
}