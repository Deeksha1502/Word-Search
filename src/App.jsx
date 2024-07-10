import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Navbar } from './components/Header';
import { Definitions } from './Definitions/Definitions';
import { useDebounce } from './assets/utils/useDebounce';

export const App = () => {
  const [meanings, setMeanings] = useState([]);

  const [word, setWord] = useState('');
  const debouncedWord = useDebounce(word, 200);

  const dictionaryApi = async () => {
    const category = 'en';
    try {
      if (debouncedWord) {
        const API_ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
        const { data } = await axios.get(API_ENDPOINT);
        console.log(data);

        setMeanings(data);
      } else {
        setMeanings([]);
      }
    } catch (error) {
      console.log(error);
      setMeanings([]);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [debouncedWord]);

  return (
    <>
      <div className='App' style={{ height: '100vh' }}>
        <Container
          maxWidth='md'
          style={{
            height: '100vh',
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar word={word} setWord={setWord} setMeanings={setMeanings} />
          {meanings && <Definitions word={word} meanings={meanings} />}
        </Container>
      </div>
    </>
  );
};
