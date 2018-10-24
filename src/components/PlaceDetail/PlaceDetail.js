import React from 'react';
import { Modal, Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const placeDetail = props => {
    let modalContent = null

    if (props.selectedPlace) {
        modalContent = (
            <View style={styles.modalContentContainer}>
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
                <View style={styles.centerButtons}>
                    <View style={styles.deleteContainer}>
                        <TouchableOpacity onPress={props.onItemDeleted}>
                            <View style={styles.deleteButton}>
                                <Text>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.closeContainer}>
                        <TouchableOpacity onPress={props.onModalClosed}>
                            <View style={styles.closeButton}>
                                <Text>Close</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: "100%",
        flexDirection: "column"

    },
    modalContentContainer: {
        margin: 20,
        alignItems: "center"
    },
    deleteContainer: {
        width: "100%",
    },
    closeContainer: {
        width: "100%",
    },
    placeImage: {
        width: "80%",
        height: 200,
        justifyContent: "center"
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
        width: "50%",
        backgroundColor: "#0080ff",
        height: 40,
        borderRadius: 15,
        alignItems: "center",
        borderColor: "#fff"

    },
    centerButtons: {
        alignItems: "center"
    }
})
export default placeDetail;