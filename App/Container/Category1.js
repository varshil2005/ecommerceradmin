import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { object, string, number, date, InferType, array } from 'yup';
import { useFormik, validateYupSchema } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function Category1() {
    const [update, setupdate] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);

    let userSchema = object({
        name: string().required(),
        age: number().positive().required().integer().min(18),
        email: string().email().required(),
        number : number().required().integer().positive(),
        password : string().required().matches("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Must Contain 8 Characters, One Number and one special case Character"
        )
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            number : '',
            password : ''
        },
        validationSchema: userSchema,
        onSubmit: values => {
            console.log(values);
            setModalVisible(!modalVisible);

        },
    });

    const { handleChange, errors, values, handleSubmit } = formik


    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            // onRequestClose={() => {
            //     Alert.Alert('Modal has been closed.');
            //     setModalVisible(!modalVisible);
            // }}
            >



                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>Add Category Name</Text>
                        <TextInput
                            placeholder='Category Name'
                            style={style.input}
                            onChangeText={handleChange('name')}
                            value={values.name}


                        ></TextInput>
                        <Text style={{ color: 'red', }}>{errors ? errors.name : ''} </Text>
                        <TextInput
                            placeholder='Age'
                            style={style.input}
                            onChangeText={handleChange('age')}
                            value={values.age}
                        // required = {values.}


                        ></TextInput>
                        <Text style={{ color: 'red', }}>{errors ? errors.age : ''}
                        </Text>

                        <TextInput
                            placeholder='email'
                            style={style.input}
                            onChangeText={handleChange('email')}
                            value={values.email}
                        // required = {values.}


                        ></TextInput>
                        <Text style={{ color: 'red', }}>{errors ? errors.email : ''}
                        </Text>


                        <TextInput
                            placeholder='Mobile Number'
                            style={style.input}
                            onChangeText={handleChange('number')}
                            value={values.number}
                        // required = {values.}


                        ></TextInput>
                        <Text style={{ color: 'red', }}>{errors ? errors.number : ''}
                        </Text>

                        <TextInput
                            placeholder='Password'
                            style={style.input}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        // required = {values.}


                        ></TextInput>
                        <Text style={{ color: 'red', }}>{errors ? errors.password : ''}
                        </Text>

                        <Pressable style={style.submitbutton} onPress={() => handleSubmit()}>
                            <Text style={{ textAlign: 'center', paddingTop: 7, color: 'white' }}> {update ? 'Update' : 'Submit'}</Text>
                        </Pressable>
                    </View>
                </View>


            </Modal>

            <Pressable
                style={[style.button, style.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={style.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        width: 190,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 0.50,
        color: 'black'
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


})