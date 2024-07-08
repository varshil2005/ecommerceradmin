import { CATEGORYDATA } from "../Actiontype"

const data1 = {
    data : []
}

export const categoryreader = (state = data1 , action) => {

    switch (action.type) {
        case CATEGORYDATA : 
            return {           
                data : action.payload
            }
        default  : 
            return state
    }
}