import {
  createTheme,
  CssBaseline,
  debounce,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@mui/material';
import './Navbar.css';
import categories from '../data/Category';
import PropTypes from 'prop-types';


export const Navbar = ({ category, setCategory, word, setWord, setMeanings }) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
    setMeanings([]);
  };

  const handleInput = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className='navbar'>
      <span className='heading'>{word ? word : 'Search Word'}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <TextField
            className='search'
            label='Search a word'
            id='standard-basic'
            value={word}
            onChange={(e) => handleInput(e.target.value)}
          ></TextField>
          {'   '}

          <TextField
            className='select'
            select
            label='language'
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            helperText='Please select the language'
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  setWord: PropTypes.func.isRequired,
  setMeanings: PropTypes.func.isRequired,
};
