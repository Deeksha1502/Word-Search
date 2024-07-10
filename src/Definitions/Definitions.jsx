
import { v4 as uuidv4 } from 'uuid';

export const Definitions = ({ word, meanings, wordNotFound }) => {
  return (
    <div>
    
      {word === '' ? (
        <span className='border-2 p-3 rounded-md'>Type a word to search</span>
      ) : wordNotFound ? (
        <span className='subTitle'>Word does not exist</span>
      ) : (
        meanings.map((data) =>
          data.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div key={uuidv4()} className='p-4 border-2'>
                <span><b> • Meaning: </b>{def.definition}</span>
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
  );
};
