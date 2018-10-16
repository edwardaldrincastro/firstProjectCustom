import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import placeImage from "./src/assets/test.jpg";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
        return {  
          places: prevState.places.concat({
          key: toString(Math.random()),
          name: placeName,
          image: {
            uri: "https://www.w3schools.com/w3images/fjords.jpg"
          }
        })
      };
    });
  };
  placeSelectedHandler = key => {
    this.setState(prevState => {

      return {
        selectedPlace: prevState.places.find( place => {
          return place.key === key
          })
      }
    });
  };
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace : null
      };
    });
  };
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
    
  } 
  render() {
    console.log("render", this.state)
    console.log("ARRAYKO", this.state.places)
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        ></PlaceDetail>
        <Image source={placeImage} style={styles.placeImage}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 80
}
}); 