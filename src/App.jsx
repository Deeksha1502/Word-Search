import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Navbar } from './components/Navbar';

export const App = () => {
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState('en');
  const [word, setWord] = useState([]);
  const API_ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(API_ENDPOINT);
      console.log(data);

      setMeaning(data.data);
    } catch (error) {
      console.log(error);
    }
    console.log(meaning);
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

            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar category={category} setCategory={setCategory} word={word} setWord={setWord} />
        </Container>
      </div>
    </>
  );
};
