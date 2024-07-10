import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Navbar } from './components/Header';
import { Definitions } from './Definitions/Definitions';
import { useDebounce } from './assets/utils/useDebounce';
import Header1 from './images/header.jpg';

export const App = () => {
  const [meanings, setMeanings] = useState([]);

  const [word, setWord] = useState('');
  const [wordNotFound, setWordNotFound] = useState(false);
  const debouncedWord = useDebounce(word, 500);

  const dictionaryApi = async () => {
    const category = 'en';
    try {
      if (debouncedWord) {
        const API_ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
        const { data } = await axios.get(API_ENDPOINT);

        setMeanings(data);
        setWordNotFound(false);
      } else {
        setMeanings([]);
        setWordNotFound(false);
      }
    } catch (error) {
      console.log(error);
      setMeanings([]);
      setWordNotFound(true);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [debouncedWord]);

  return (
    <div>
      {/* <div className='w-80 h-40'>
        <img className='w-full h-96 lg:40 object-fit' src={Header1}></img>
      </div> */}
      <div className='flex items-center justify-center p-14'>
        <div className='flex flex-col gap-9'>
          <div className='text-4xl font-bold text-gray-800 mb-4'>Vocab Vault</div>
          <div className='text-lg font-semibold text-gray-600 mb-6' >Look up a word! learn it forever</div>
          <Navbar word={word} setWord={setWord} setMeanings={setMeanings} />
          {meanings && <Definitions word={word} meanings={meanings} wordNotFound={wordNotFound} />}
        </div>
      </div>
    </div>
  );
};
