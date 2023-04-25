import { createSlice } from "@reduxjs/toolkit";


const initialState = []
const favouriteSlice=createSlice({
    name:"favourite",
    initialState,

    reducers:{
        addFev(state=initialState,action){
            console.log("under imageList  "+JSON.stringify(action.payload, null, 2))
            const id=action.payload.id
            const url=action.payload.url
            console.log("id 1 "+id);
            console.log("url 1 "+url)
           state.push({
            id,
            url
           })
           
            
        }
    }

})

export const {addFev}=favouriteSlice.actions;
export default favouriteSlice.reducer;