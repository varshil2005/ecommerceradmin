import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { object, string, number, date, InferType, array } from 'yup';
import { useFormik, validateYupSchema } from 'formik';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements';

export default function Category1() {
    const [update, setupdate] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState('option1');
    const [isSelected, setSelection] = useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
        { label: 'Mens Shirt', value: 'mens shirt' },
    ]);

    let userSchema = object({
        name: string().required("Please enter name").matches(/^[a-zA-Z ]+$/, "Please enter valid name"),
        email: string().required().email(),
        number: string().required().matches(/^\d{10}$/, "Mobile number must be 10 digit"),
        age: number().required().min(18, "Minimum 18 age allowed").typeError("Please enter age in digit"),
        password: string().required().matches(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must be 8 combination of alpabet, digit and special symbol.")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            number: '',
            password: ''
        },
        validationSchema: userSchema,
        onSubmit: values => {
            console.log(values);
            setModalVisible(!modalVisible);

        },
    });

    const { handleChange, errors, values, handleSubmit } = formik


    return (
        <ScrollView>
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
                        <View style={style.radioButton}>
                            <RadioButton.Android
                                value="option2"
                                status={selectedValue === 'option2' ?
                                    'checked' : 'unchecked'}
                                onPress={() => setSelectedValue('option2')}
                                color="#007BFF"
                            />
                            <Text style={style.radioLabel}>
                                NextJs
                            </Text>
                        </View>

                        <View style={style.radioButton}>
                            <RadioButton.Android
                                value="option3"
                                status={selectedValue === 'option3' ?
                                    'checked' : 'unchecked'}
                                onPress={() => setSelectedValue('option3')}
                                color="#007BFF"
                            />
                            <Text style={style.radioLabel}>
                                React Native
                            </Text>
                        </View>

                        {/* <View
                            style={{
                                width: 200,
                                position: 'relative',
                                zIndex: 1000,
                                paddingHorizontal: 15,
                            }}>

                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder={'Choose Category.'}
                            />

                        </View> */}

                        <View style={style.container}>
                            <View style={style.checkboxContainer}>
                                <Text>hiii</Text>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={style.checkbox}
                                />

                            </View>

                            <Pressable style={style.submitbutton} onPress={() => handleSubmit()}>
                                <Text style={{ textAlign: 'center', paddingTop: 7, color: 'white' }}> {update ? 'Update' : 'Submit'}</Text>
                            </Pressable>


                        </View>
                    </View>
                    </View>
            </Modal>

          


            <Pressable
                style={[style.button]}
                onPress={() => setModalVisible(true)}>
                <Text style={style.textStyle}>Show Modal</Text>
            </Pressable>

        </ScrollView>
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
        marginBottom: 10,
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
        backgroundColor: 'red',
    },

    submitbutton: {
        width: 120,
        marginTop: 20,
        height: 35,
        borderRadius: 20,
        elevation: 2,
        backgroundColor: '#F194FF',
    },

    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginRight: 10,
        fontSize: 16,
        color: '#333',
    },

    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },


})