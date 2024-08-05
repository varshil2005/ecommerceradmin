import { combineReducers } from "redux"
import { counterreader } from "./counter.reducer"
import { categoryreader } from "./category.reducer"
import { subCategoryReucer } from "./subcategory.reducer"
import { productreducer } from "./product.reducer"
import Brand from "../../Brand/Brand"
import BrandSlice from "../Slice/Brand.slice"

export const rootReducer  = combineReducers({
    count : counterreader,
    category : categoryreader,
    subcategory : subCategoryReucer,
    product : productreducer,
    Brand : BrandSlice
})