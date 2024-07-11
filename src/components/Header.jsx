import { debounce } from '@mui/material';

import { useCallback, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const Navbar = ({ word, setWord }) => {


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

  return (
    <div className='header'>
      
      <div className='inputs'>
       

        <input
          className='border-1 w-full 
            focus:outline-none outline-none p-2 border-r bg-gray-100 rounded-full
            
            text-gray-600'
          onChange={handleInput} placeholder='Search a word...'
        ></input>

        {'   '}

        <FormControl>
          <InputLabel id='demo-simple-select-label'>Lang</InputLabel>
        </FormControl>
      </div>
    </div>
  );
};
