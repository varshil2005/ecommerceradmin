import {SUBCATEGORY} from '../Actiontype';

export const SubCategory = () => async (dispatch) => {
  try {
    let categorydata = [];
    await firestore()
      .collection('Sub Category')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
            console.log("gggg",'User ID: ', documentSnapshot.id, documentSnapshot.data());

          categorydata.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
      });
    console.log('1..............', categorydata);
    dispatch({type: SUBCATEGORY, payload :categorydata});
  } catch (error) {
    console.log(error);
  }
};
