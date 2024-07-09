import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Navbar } from './components/Navbar';
import Definitions from './Definitions/Definitions';

export const App = () => {
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState('');

  const dictionaryApi = async () => {
    try {
      if (word) {
        const API_ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;
        const {data} = await axios.get(API_ENDPOINT);
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
  }, [word, category]);

  return (
    <>
      <div className='App' style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
        <Container
          maxWidth='md'
          style={{
            height: '100vh',
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar
            category={category}
            setCategory={setCategory}
            word={word}
            setWord={setWord}
            setMeanings={setMeanings}
          />
          {meanings && <Definitions word={word} meanings={meanings} category={category} />}
        </Container>
      </div>
    </>
  );
};
