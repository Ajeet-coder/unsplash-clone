import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./slices/imagesSlice";
import favouriteSlice from "./slices/favouriteSlice";
import  storage  from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";



const persistconfig={
    key:"root",
    version:1.0,
    storage
}

const reducer=combineReducers({
    image:imagesSlice,
        fav:favouriteSlice
})

const persistreducer=persistReducer(persistconfig,reducer)
// export const store=configureStore({
    
//     reducer:{
//         image:imagesSlice,
//         fav:favouriteSlice

//     }
// })

export const store= configureStore({
    reducer:persistreducer
})