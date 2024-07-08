
const data = {
    data : null
}

export const categoryreader = (state = data , action) => {

    switch (action.type) {
        case 'CATEGORYDATA' : 
            return {           
                data : action.payload
            }
    }
}