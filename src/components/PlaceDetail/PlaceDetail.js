import React from 'react';
import { Modal, Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const placeDetail = props => {
    let modalContent = null

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.placeImage} source={props.selectedPlace.image} />
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
                <View style={styles.buttonContainer}>
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
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontWeight: "bold",
        color: "black",
        fontSize: 28,
        justifyContent: "center"
    },
    deleteButton: {
        width: "50%",
        backgroundColor: "#ff3333",
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        marginBottom: 15,
        borderColor: "#fff"

    },
    closeButton: {
        width: "100%",
        backgroundColor: "#0080ff",
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        borderColor: "#fff"

    },
    centerButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
export default placeDetail;