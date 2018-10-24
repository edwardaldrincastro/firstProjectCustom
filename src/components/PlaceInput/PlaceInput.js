import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ""
    })
  };

  render() {
    return (
      <View style={styles.inputContainer}>
          <TextInput
            placeholder="Where do you want to go?"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput} />
        <View style={styles.buttonStyle}>
          {/* <Button
          title="Go"
          style={styles.placeButtonDesign}
          onPress={this.placeSubmitHandler}
        /> */}
          <TouchableOpacity onPress={this.placeSubmitHandler}>
            <View style={styles.placeButton}>
              <Text>Go</Text></View>
            {/* <Button title="Delete" color="red"/> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "80%"
  },
  placeButtonDesign: {
    width: "100%",
    color: "white"
  },
  placeButton: {
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderEndWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 30  

  }, buttonStyle: {
    width : "50%",
    backgroundColor: "white",
  }
});

export default PlaceInput;
