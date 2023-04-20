import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchImages=createAsyncThunk('fetchImages',async (value)=>{
   // console.log("calling......")
    const response=await fetch(`https://api.unsplash.com/search/photos/?client_id=pnFlN2kdK55U97KmTIPDIASuzKdXq2CHMu97Hcgbx6w&query=${value}&orientation=squarish`)
    return response.json();
})

const initialState = {
    isloading:false,
    data: null,
    isError:false
  }

const imageSlice=createSlice({
    name:'image',
    initialState,

    extraReducers:{
        [fetchImages.pending]:(state,action)=>{
            state.isloading=true;
           
        },
        [fetchImages.fulfilled]:(state,action)=>{
            state.isloading=false;
            state.data=action.payload;
        },
       [fetchImages.rejected]:(state,action)=>{
            console.log("Error ",action.payload);
            state.isError=true;
        }
    }
})

export default imageSlice.reducer;