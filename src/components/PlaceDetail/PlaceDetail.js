import React from 'react';
import { Modal, Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

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
                {/* </View>*/}
                <View style={{width:"50%", alignItems: "center"}}>
                    <TouchableOpacity onPress={props.onModalClosed}>
                        {/* <View style={styles.closeButton}>
                                <Text>Close</Text>
                            </View> */}
                        <Icon name="md-arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                    </View>

                <View style={{width:"50%", alignItems: "center"}}>
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        {/* <View style={styles.deleteButton}>
                                <Text>Delete</Text>
                            </View> */}
                        <Icon name="md-trash" size={30} color="black" />
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
        fontFamily: "Roboto",
        
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
        justifyContent: "center",
        flexDirection: "row",
        width: "100%"
    }
})
export default placeDetail;