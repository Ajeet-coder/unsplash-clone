import React from 'react'
import { useState } from 'react';
import { fetchImages } from './redux/slices/imagesSlice';
import { useDispatch, useSelector } from 'react-redux'
import './Header.css';

function Header() {
    const [searchValue, setSearchValue]=useState("");
    const dispatch=useDispatch();

    const fetchimages=()=>{
        console.log("Step 1"+searchValue)
        dispatch(fetchImages(searchValue))
       
      }


  return (
    <div className="App">
      <div className="search">


        <span>Search:</span>
        <input
        style={{width:"60%"}}
         type="text" 
        value={searchValue} 
        onChange={(e)=>setSearchValue(e.target.value)}/>
        <button onClick={fetchimages}>Send</button>
      </div>
    </div>
  )
}

export default Header
