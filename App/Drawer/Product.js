import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Product() {
    const [modalVisible, setModalVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
        { label: 'Mens Shirt', value: 'mens shirt' },
    ]);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [items2, setItems2] = useState([
      { label: 'Men', value: 'men' },
      { label: 'Women', value: 'women' },
      { label: 'Mens Shirt', value: 'mens shirt' },
  ]);

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
                        <Text style={style.modalText}>Add Product </Text>
                        <View style = {style.dropdown1}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder={'Choose Category.'}
                        />
                        </View>

                        <View style = {style.dropdown2}>
                        <DropDownPicker
                            open={open2}
                            value={value2}
                            items={items2}
                            setOpen={setOpen2}
                            setValue={setValue2}
                            setItems={setItems2}
                            placeholder={'Choose Sub Category.'}
                            
                        />
                        </View>
                        <TextInput name='category' placeholder=' Product Name ' style={style.input}></TextInput>
                        <TextInput name='category' placeholder='  Product Price' style={style.input}></TextInput>
                        <TextInput name='category' placeholder='Product Description' style={style.input}></TextInput>
                        <Pressable style={style.submitbutton} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ textAlign: 'center', paddingTop: 7, color: 'white' }}>Submit</Text>
                        </Pressable>
                    </View>
                </View>


            </Modal>

            <TouchableOpacity style={style.button} onPress={() => setModalVisible(true)}>
                <Text style={{ textAlign: 'center', paddingTop: 7, color: 'white' }}>ADD Product</Text>
            </TouchableOpacity>

            <View style={style.listmainview}>
                <View style={style.listname}>
                    <Text style={style.listtext}>Men</Text>
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <TouchableOpacity style={{ marginRight: 20 }}><Text><EvilIcons name='pencil' size={35} color='black'></EvilIcons></Text></TouchableOpacity>
                        <TouchableOpacity><Text><MaterialIcons name='delete' size={30} color='red'></MaterialIcons></Text></TouchableOpacity>
                    </View>
                </View>

                <View style={style.listname}>
                    <Text style={style.listtext}>Men</Text>
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <TouchableOpacity style={{ marginRight: 20 }}><Text><EvilIcons name='pencil' size={35} color='black'></EvilIcons></Text></TouchableOpacity>
                        <TouchableOpacity><Text><MaterialIcons name='delete' size={30} color='red'></MaterialIcons></Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>



    )
}

const style = StyleSheet.create({

    button: {
        width: 140,
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


    input: {
        width: 210,
        padding: 15,
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
        width: 250,
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
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },

    listmainview: {
        width: '90%',
        // borderWidth : 2,
        // borderColor : 'white',
        marginHorizontal: 'auto',
        marginTop: 70,
        // backgroundColor : 'white',
    },

    listtext: {
        fontSize: 20,
        color: 'green'
    },

    listname: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 10

    },

    dropdown2 : {
    
      zIndex : 1000
    },

    dropdown2 : {
      marginTop : 20,
      marginBottom : 10,
      zIndex : 999
    }
})


