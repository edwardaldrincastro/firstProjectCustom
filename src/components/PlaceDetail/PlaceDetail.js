import React from 'react';
import { Modal, Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const placeDetail = props => {
    let modalContent = null

    if (props.selectedPlace){
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        )
    }
    return (
        <Modal
         onRequestClose={props.onModalClosed}
         visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View style={styles.centerButton}>
                    <TouchableOpacity onPress={props.onItemDeleted}>
                    <View style={styles.deleteButton}>
                    <Text>Delete</Text></View>
                    {/* <Button title="Delete" color="red"/> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.onModalClosed}>
                    <View style={styles.closeButton}>
                    <Text>Close</Text></View>
                    {/* <Button title="Delete" color="red"/> */}
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  modalContainer: {
      margin: 22,

  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
  },
  deleteButton: {
      width: 100,
      backgroundColor: "#ff3333",
      height: 40,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 10

  },
  closeButton: {
    width: 100,
    backgroundColor: "#0080ff",
    height: 40,
    borderRadius: 10,
    alignItems: "center"

},
centerButton : {
    alignItems: "center"
}
})
export default placeDetail;