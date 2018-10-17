import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { connect } from 'react-redux';
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import placeImage from "./src/assets/test.jpg";
import appleImage from "./src/assets/appleImage.jpg"
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  };
  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  };
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  };
  modalClosedHandler = () => {
    this.props.onDeselectPlace()    
  } 
  render() {
    console.log("render", this.state)
    console.log("ARRAYKO", this.props.places)
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        ></PlaceDetail>
        <Image source={appleImage} style={styles.appleImage}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
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
  appleImage: {
    height: 100,
    width: 100
}
}); 

const mapStateToProps = state => {
  return {
    places: state.reducersPlaces.places,
    selectedPlace: state.reducersPlaces.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);