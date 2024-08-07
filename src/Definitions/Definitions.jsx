import { v4 as uuidv4 } from 'uuid';
import { DarkModeProvider } from '../DarkMode/DarkModeContext';

export const Definitions = ({ word, meanings, wordNotFound }) => {
  return (
    <div className=''>
      <div className='text-gray-800 dark:text-white'>
        {word === '' ? (
          <span className=' bg-white dark:bg-gray-700 text-2xl border-2 p-3 rounded-md'>
            Type a word to search
          </span>
        ) : wordNotFound ? (
          <span className='bg-white dark:bg-gray-700 text-2xl'>Word does not exist</span>
        ) : (
          meanings.map((data) =>
            data.meanings.map((item) =>
              item.definitions.map((def) => (
                <div key={uuidv4()} className='p-4 border-2 text-2xl'>
                  <span>
                    <b> • Meaning: </b>
                    {def.definition}
                  </span>
                  <hr style={{ backgroundColor: 'white', width: '100%' }} />
                  {def.example && (
                    <span>
                      <b> • Example: </b>
                      {def.example}
                    </span>
                  )}
                </div>
              ))
            )
          )
        )}
      </div>
    </div>
  );
};
