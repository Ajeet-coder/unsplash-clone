import React from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Header from './Header';

function ImageList() {

    const images=useSelector(state => state.image);
    console.log("under imageList  "+JSON.stringify(images, null, 2))

  return (
    <div className="App">
        <Header/>
      <div className='Gallery'>

        {
          _.values(images.data.results).map((item)=>{
            return <img className='image' key={item.id} src={item.urls.regular}/>
          })
        }
      </div>
      
    </div>
  );
}

export default ImageList
