
import { useState } from 'react';
import { fetchImages } from './redux/slices/imagesSlice';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from './ImageList';

import Header from './Header';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Favourite from './Favourite';


function App() {

  // Access Key:- {pnFlN2kdK55U97KmTIPDIASuzKdXq2CHMu97Hcgbx6w}
  // Secret key:- {LodQzCtVCelVGM5fsHwltOHGsuGIV4VB8eGAhtdN2w0}

  const [searchValue, setSearchValue] = useState("");
  const images = useSelector(state => state.image.data);

  const dispatch = useDispatch();


  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<ImageList />} />
        <Route path='/imglist' element={<ImageList />}></Route>
        <Route path='/fav' element={<Favourite />} />
      </Routes>





    </>
  );
}

export default App;
