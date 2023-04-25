import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { addFev } from './redux/slices/favouriteSlice';
import { Link, useNavigate } from 'react-router-dom';
import { fetchImages } from './redux/slices/imagesSlice';


function ImageList() {

  const [isFevAdded ,setIsFevAdded]=useState(false)

  const images = useSelector(state => state.image);
  console.log("under imageList  " + JSON.stringify(images, null, 2))
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const addfevList = (id, url) => {
    setIsFevAdded(true)
    const data = {
      id,
      url
    }

    dispatch(addFev(data))

    console.log("id  " + id);
    console.log("url " + url)

  }

  


  if (null != images.data) {
    return (
      <div className="App">

        <div className='Gallery'>



          {
            _.values(images.data.results).map((item) => {


              return (
                <>
                  {/* <button type='button' className='favourite-btn btn btn-outline-info' onClick={() => addfevList(item.id, item.urls.regular)}>fev</button> */}


                  <img className='image' onClick={() => addfevList(item.id, item.urls.regular)} key={item.id} src={item.urls.regular}/>


                </>
              )
            })
          }
        </div>

      </div>
    );
  }
  else {
    dispatch(fetchImages("flower"))
    //return <h1>No data found</h1>
  }
}

export default ImageList