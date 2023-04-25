import React from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ImageList from '../ImageList'
import Favourite from '../Favourite'


function Routing() {
    return (
        <Router>

            <Routes>
           
            <Route path='/fav' element={Favourite}/>
               
            </Routes>


        </Router>
    )
}

export default Routing
