import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //MENU SCREEN---------------------------------------------------------
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    locationsMenu: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        
    },
    locationIcon: {
        flex: 1,
        height: 50,
        //backgroundColor: '#87CEFA',
        backgroundColor: '#A9A9A9',
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 1,
        borderRadius: 25,
        borderColor:'black',
        justifyContent: 'center',
        opacity: 0.9
        
    },
    locationIconText: {
        color: '#FDFEFF',
        fontWeight: 'bold',
       // marginLeft: 50,
        fontSize: 26, 
        textShadowColor: 'black', 
        textShadowRadius: 3,         
        textShadowOffset: { 
            width: 2,
            height: 2
        },
        textAlign: 'center'

          
    },
    //DISPLAY SCREEN---------------------------------------------------------
    displaySelected: {
        flex: 1,
        height: 100,
        backgroundColor: '#00BFFF',
        justifyContent: 'flex-start',
        
    },
    selectedCityText: {
        color: '#FDFEFF',
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 37, 
        textShadowColor: 'black', 
        textShadowRadius: 1,         
        textShadowOffset: { 
            width: 2,
            height: 2
        },
        textAlign: 'center'
    },
    selectedTemperatureText: {
        color: '#FDFEFF',
        
        marginTop: 20,
        marginLeft: 20,
        fontSize: 65, 
        textAlign: 'center'
    },
    descriptionText: {
        color: '#FDFEFF',     
        marginTop: 10,
        fontSize: 30, 
        textAlign: 'center'
    },  
    searchIcon: {
       marginTop: 35,
       marginLeft: 315,
       width: 50,
       height: 50,
       
    },
     //SEARCH SCREEN---------------------------------------------------------------
    searchScreen: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        
    },
    searchBox: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor:'black',
        height: 55,
        width: 280,
        marginTop: 7, 
        marginLeft:10,
        textAlign: 'center',
        backgroundColor: '#ececec',
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        marginTop: -20,
        backgroundColor: 'grey',
        height: 70,
        
    },
    searchButton: {
       
        marginTop: 14
        
    },
    searchResultText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
        marginLeft: -80,
    },
    header: {
        height: 70,
        width: 375,
        flexDirection: 'row',
        
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 20    
    },
    headerText: {
        marginTop: 3,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 25,
    },
    backButton: {
        marginTop: 20,
        marginLeft: 50, 
        fontWeight: 'bold',
        fontSize: 100,
    }

  });
  