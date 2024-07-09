import { ADDCATEGORY, CATEGORYDATA, DELETECATEGORY } from "../Actiontype";
import firestore from '@react-native-firebase/firestore';

export const getcategory =  () => async(dispatch) =>  {
    try {
      let categorydata = [];
    await firestore()
      .collection('Category')
      .get()
      .then(querySnapshot => {

        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
            // console.log("lllll",'User ID: ', documentSnapshot.id, documentSnapshot.data());

          categorydata.push({
            Id: documentSnapshot.id,
            ...documentSnapshot.data(),

            
          });
          // console.log(data);
          console.log("hhhhhhhh",categorydata);
        });
      });

      dispatch({type : CATEGORYDATA ,payload : categorydata})
    } catch (error) {
      console.log(error);
    }
    
}

export const addCategory = (data) => async(dispatch) => {

    try {
      await firestore()
      .collection('Category')
      .add(data)
      .then((doc) => {
        console.log('category added!',doc.id);
        dispatch({type:ADDCATEGORY, payload:{...data , id:doc.id}})
      });

     
    } catch (error) {
      console.log(error);
    }
}

export const deletecategoty = (id) => async(dispatch) => {
   try {
    await firestore()
    .collection('Category')
    .doc(id)
    .delete()
    .then(() => {
      console.log('delete', 'User deleted!');
      dispatch({type : DELETECATEGORY , payload : id})
    });

   } catch (error) {
      console.log(error);
   }
}

export const editcategory = () => async(dispatch) => {
  try {
    
  } catch (error) {
    
  }
}