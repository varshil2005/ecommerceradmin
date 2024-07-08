import { CATEGORYDATA } from "../Actiontype";

export const getData =  () => async  (dispatch) =>  {
    let categorydata = [];
    const category = await firestore()
      .collection('Category')
      .get()
      .then(querySnapshot => {

        dispatch({type : CATEGORYDATA ,payload : categorydata})
        console.log(category);
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          //   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

          categorydata.push({
            Id: documentSnapshot.id,
            ...documentSnapshot.data(),

            
          });
          // console.log(data);
        });
      });
    
}