import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VDetail, CDetail, Search} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor : '#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" exact element={<VDetail/>}/>
        <Route path="/channel/:id" exact element={<CDetail/>}/>
        <Route path="/search/:searchTerm" exact element={<Search/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App;