import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialstate = {
  isLoading: false,
  branddata: [],
  error: null,
};

export const addbrand = createAsyncThunk(
  'brand/addbrand',

  async (data) => {
    console.log('kkkkkkkkkk', data);

    try {
        const docResponse = await firestore()
        .collection('Brand')
        .add(data)
        .then((doc) => {
          console.log('User added!');
            console.log("hllooooo",doc.id);
  
            
        });

        console.log("hhhhhhhhhhh", {...data , id : docResponse.id});
        
        // return {...data , id : docResponse.id}
        
    } catch (error) {
        console.log("oooyujknnnnnnnn", error);
        
    }
  },
);

export const getBrand = createAsyncThunk(
    'category/fetchcategory', async () => {
  try {
    let brand = [];
    await firestore()
      .collection('Brand')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          // console.log("lllll",'User ID: ', documentSnapshot.id, documentSnapshot.data());

          brand.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
          // console.log(data);
          console.log('hhhhhhhh', brand);
        });
      });

    return brand;
  } catch (error) {
    console.log(error);
  }
});

export const deletebrand = createAsyncThunk(
  'brand/deletebrand',

  async id => {
    console.log('kkkkkkkkkk', id);

    try {
      console.log('idddddddddddd', id);
      await firestore()
        .collection('Brand')
        .doc(id)
        .delete()
        .then(doc => {
          console.log('delete', 'User deleted!');
        });

      return id;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updatebrand = createAsyncThunk(
  'brand/updatebrand',

  async data => {
    console.log('kkkkkkkkkk', data);

    try {
      const temp = {...data};
      delete temp.id;
      console.log('temppp', temp);
      await firestore()
        .collection('Brand')
        .doc(data.id)
        .set(temp)
        .then(() => {
         console.log("User Update");
         
        });
    } catch (error) {
      console.log(error);
    }
  },
);

const brandslice = createSlice({
  name: 'Brand',
  initialState: initialstate,
  extraReducers: builder => {
    builder.addCase(addbrand.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("nnnnnnn",action);
      
      state.branddata = action.payload;
    });

    builder.addCase(getBrand.fulfilled, (state, action) => {
      // Add user to the state array
      state.branddata = action.payload;
    });

    builder.addCase(deletebrand.fulfilled, (state, action) => {
      // Add user to the state array
      state.branddata = action.payload.id;
    });

    builder.addCase(updatebrand.fulfilled, (state, action) => {
        // Add user to the state array
        state.branddata = action.payload;
    });
  },
});

export default brandslice.reducer;
