import { createTheme, CssBaseline, MenuItem, TextField, ThemeProvider } from '@mui/material';
import './Navbar.css';
import categories from '../data/Category';

export const Navbar = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };

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
            onChange={(e) => setWord(e.target.value)}
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
