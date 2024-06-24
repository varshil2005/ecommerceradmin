import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {object, string, number, date, InferType, array, boolean} from 'yup';
import {useFormik, validateYupSchema, yupToFormErrors} from 'formik';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as Yup from 'yup';

export default function Category1() {
  const [update, setupdate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isSelecteds, setSelection] = useState(false);
  const [selectdrop, setSelectdrop] = useState('');


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Men', value: 'men'},
    {label: 'Women', value: 'women'},
    {label: 'Mens Shirt', value: 'mens shirt'},
  ]);

  let userSchema = object({
    name: Yup.string()
      .required('Please enter name')
      .matches(/^[a-zA-Z ]+$/, 'Please enter valid name'),

    email:  Yup.string().required().email(),
    number:  Yup.string()
      .required()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digit'),

    age:  Yup.number()
      .required()

      .min(18, 'Minimum 18 age allowed')

      .typeError('Please enter age in digit'),

    password:  Yup.string()
      .required()

      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,

        'Password must be 8 combination of alpabet, digit and special symbol.',
      ),

    checkbox: Yup.boolean().required('Please select the checkbox').oneOf([true]),
    radiobutton: Yup.string().required('Please select at list one'),
    dropdown: Yup.string().required('Please select category')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      number: '',
      password: '',
      checkbox: '',
      radiobutton: '',
      dropdown: '',
    },

    validationSchema: userSchema,

    onSubmit: values => {
      console.log(values);
      setModalVisible(!modalVisible);
    },
  });

  const {handleChange, errors, values, handleSubmit , setFieldValue} = formik;

  console.log(errors);
  console.log(values);
  return (
    <ScrollView>
      <Modal
        isVisible={modalVisible}
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
              placeholder="Name"
              placeholderTextColor={'black'}
              style={style.input}
              onChangeText={handleChange('name')}
              value={values.name}></TextInput>

            <Text style={{color: 'red'}}>{errors ? errors.name : ''} </Text>

            <TextInput
              placeholder="Age"
              placeholderTextColor={'black'}
              style={style.input}
              onChangeText={handleChange('age')}
              value={values.age}

              // required = {values.}
            ></TextInput>

            <Text style={{color: 'red'}}>{errors ? errors.age : ''}</Text>

            <TextInput
              placeholder="email"
              placeholderTextColor={'black'}
              style={style.input}
              onChangeText={handleChange('email')}
              value={values.email}

              // required = {values.}
            ></TextInput>

            <Text style={{color: 'red'}}>{errors ? errors.email : ''}</Text>

            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor={'black'}
              style={style.input}
              onChangeText={handleChange('number')}
              value={values.number}

              // required = {values.}
            ></TextInput>

            <Text style={{color: 'red'}}>{errors ? errors.number : ''}</Text>

            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              style={style.input}
              onChangeText={handleChange('password')}
              value={values.password}

              // required = {values.}
            ></TextInput>

            <Text style={{color: 'red'}}>{errors ? errors.password : ''}</Text>

            <View style={style.radioButton}>
              <RadioButton.Android
                value="option2"
                status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                onPress={() =>{ setSelectedValue('option2');setFieldValue('radiobutton' , 'NextJs')}}
                color="#007BFF"
                onChangeText={handleChange('radiobutton')}
                
              />

              <Text style={style.radioLabel}>NextJs</Text>
            </View>

            <View style={style.radioButton}>
              <RadioButton.Android
                value="option3"
                status={selectedValue === 'option3' ? 'checked' : 'unchecked'}
                onPress={() =>{ setSelectedValue('option3');setFieldValue('radiobutton' , 'React Native')}}
                color="#007BFF"
                onChangeText={handleChange('radiobutton')}
              />

              <Text style={style.radioLabel}>React Native</Text>
            </View>

            <Text style={{color: 'red', marginBottom: 20}}>
             
              {selectedValue ? '' : errors.radiobutton}
            </Text>
            

            <View
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
                onPress={() => setSelectdrop(!selectdrop)}
                onChangeText={handleChange('dropdown')}
                onSelectItem={(items) => setFieldValue('dropdown',items.value)}
              />
            </View>

            <Text style={{color: 'red', marginBottom: 20}}>
              {selectdrop ? '' : errors.dropdown}
            </Text>

            <BouncyCheckbox
              size={25}
              fillColor="red"
              unFillColor="#FFFFFF"
              text="Custom Checkbox"
              iconStyle={{borderColor: 'red'}}
              innerIconStyle={{borderWidth: 2}}
              textStyle={{fontFamily: 'JosefinSans-Regular'}}
              onPress={() => {setSelection(!isSelecteds); setFieldValue('checkbox',!isSelecteds)}}
              onChangeText={handleChange('checkbox')}
            />

            <Text style={{color: 'red'}}>
              {isSelecteds ? '' : errors.checkbox}
            </Text>

            <Pressable
              style={style.submitbutton}
              onPress={() => handleSubmit()}>
              <Text
                style={{textAlign: 'center', paddingTop: 7, color: 'white'}}>
                {' '}
                {update ? 'Update' : 'Submit'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={style.button} onPress={() => setModalVisible(true)}>
        <Text style={style.textStyle}>Show Modal</Text>
      </Pressable>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  label: {
    marginTop: 24,

    color: 'black',
  },

  input: {
    width: 190,

    padding: 15,

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.25,

    shadowRadius: 4,

    elevation: 0.5,

    color: 'black',

    // backgroundColor : 'red'
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

    color: 'black',
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

    color: 'green',
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

    marginBottom: 10,
  },

  button: {
    width: 120,
    // backgroundColor: '#2196F3',
    height: 35,
    marginTop: 20,
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

  checkbox1: {
    alignSelf: 'center',
  },

  textStyle: {
    color: 'red',
  },
});
