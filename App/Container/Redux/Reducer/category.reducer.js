import { ADDCATEGORY, CATEGORYDATA, DELETECATEGORY } from "../Actiontype"

const initialstate = {
    isLoading : false,
    categorydata : [],
    error : null
}




export const categoryreader = (state = initialstate, action) => {
console.log("ffff",action);
    switch (action.type) {
        case CATEGORYDATA : 
            return {   
                isLoading : false,        
                categorydata : action.payload,
                error : null
            }
        case ADDCATEGORY : 
        return {
            isLoading : false,        
            categorydata :state.categorydata.concat(action.payload),
            error : null,
           
        }
        case DELETECATEGORY : 
        return {
            isLoading : false,        
            categorydata :state.categorydata.filter((v) => v.Id !== action.payload),
            error : null,
           
        }
        default  : 
            return state
    }
}