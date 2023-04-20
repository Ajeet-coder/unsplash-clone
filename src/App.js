
import { useState } from 'react';
import { fetchImages } from './redux/slices/imagesSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from './ImageList';
import Empty from './Empty';
import Header from './Header';

function App() {

  // Access Key:- {pnFlN2kdK55U97KmTIPDIASuzKdXq2CHMu97Hcgbx6w}
  // Secret key:- {LodQzCtVCelVGM5fsHwltOHGsuGIV4VB8eGAhtdN2w0}

  const [searchValue, setSearchValue]=useState("");
  const images=useSelector(state => state.image.data);

  const dispatch=useDispatch();

  // const fetchimages=()=>{
  //   console.log("Step 1"+searchValue)
  //   dispatch(fetchImages(searchValue))
  
  // }

  if (null!=images) {
    //console.log("if .....")
    return <ImageList  />;
  } 
  return (
    <>
    <Header/>
    
    </>
  );
}

export default App;
