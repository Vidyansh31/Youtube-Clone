import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import {NoEncryption, Search} from '@mui/icons-material';
import { border } from '@mui/system';

const SearchBar = () => {

  const [searchTerm, setsearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setsearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input className ="search-bar"
        style={{
          backgroundColor: 'transparent',
          border: '0px solid',
          color : '#CCC',
          outline : 'none'
        }}
        placeholder='search'
        value={searchTerm}
        onChange={(e) => {setsearchTerm(e.target.value)}}
      />
      <IconButton type ="submit" sx={{p : '10px', color : 'red'}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar