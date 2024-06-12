import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';


export default function Category() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ position: 'relative' }}>
            <Modal
                //  isVisible={modalVisible}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}

            >

                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>Add Category Name</Text>
                        <TextInput name = 'category' placeholder='Category Name' style = {style.input}></TextInput>
                        <Pressable style={style.submitbutton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ textAlign: 'center', paddingTop: 7, color: 'white' }}>Submit</Text>
                        </Pressable>
                    </View>
                </View>


            </Modal>

            <TouchableOpacity style={style.button} onPress={() => setModalVisible(true)}>
                <Text style={{ textAlign: 'center', paddingTop: 7, color: 'white' }}>ADD Category</Text>
            </TouchableOpacity>

        </View>


    )
}

const style = StyleSheet.create({

    button: {
        width: 120,
        // backgroundColor: '#2196F3',
        height: 35,
        marginTop: 20,
        position: 'absolute',
        right: 15,
        borderRadius: 20,
        elevation: 4,
        backgroundColor: '#F194FF',
    },

    submitbutton: {
        width: 120,
        marginTop: 20,
        height: 35,
        borderRadius: 20,
        elevation: 2,
        backgroundColor: '#F194FF',
    },


    input : {
        width : 190,
        padding :15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 0.50,
    },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width :250,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight : 'bold',
        fontSize :20,
        color : 'black'
    },
})


