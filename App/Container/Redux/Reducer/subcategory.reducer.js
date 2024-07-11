import {SUBCATEGORY} from '../Actiontype';

const initialstate = {
  isLoading: false,
  subCategorydata: [],
  error: null,
};

export const subCategoryReucer = (state = initialstate, action) => {
  console.log("3....",action);
  switch (action.type) {
    case SUBCATEGORY:
      return {
        isLoading: false,
        subCategorydata: action.payload,
        error: null,
      };
      default : 
      return state;
  }
};
