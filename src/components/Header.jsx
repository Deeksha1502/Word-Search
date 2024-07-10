import { debounce, TextField } from '@mui/material';
import './Header.css';

import { useCallback, useState } from 'react';
import Select from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export const Navbar = ({ word, setWord }) => {
  const [language, setLanguage] = useState('English');

  const debouncedSetWord = useCallback(
    debounce((text) => {
      setWord(text);
    }, 500),
    []
  );

  const handleInput = (e) => {
    const text = e.target.value;
    e.target.value = text;
    debouncedSetWord(text);
  };

  const handleMenuChange = () => {
    setLanguage(language);
  };

  return (
    <div className='header'>
    
   
      <span className='heading'>{word ? word : 'Search Word'}</span>
      <div className='inputs'>
        <TextField
          className='search'
          label='Search a word'
          id='standard-basic'
          onChange={handleInput}
        ></TextField>
        {'   '}

        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id='demo-simple-select-label'>Lang</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={language}
            label='Age'
            onChange={handleMenuChange}
          >
            <MenuItem value={language}>English</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
