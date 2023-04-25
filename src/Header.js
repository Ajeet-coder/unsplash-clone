import React from 'react'
import { useState } from 'react';
import { fetchImages } from './redux/slices/imagesSlice';
import { useDispatch, useSelector } from 'react-redux'
import './Header.css';
import Favourite from './Favourite';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
;

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const fetchimages = () => {
    console.log("Step 1" + searchValue)
    dispatch(fetchImages(searchValue))
   // navigate("/imglist")

  }

 



  return (
    <div className="App">
      <div className="search">


        <span>Search:</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} />
        {/* <button onClick={fetchimages}>

          Send</button> */}
          <Button onClick={fetchimages}>Send</Button>

        <Button
          onClick={() => navigate("/fav")}>
          fev
        </Button>



      </div>

    </div>
  )
}

export default Header
