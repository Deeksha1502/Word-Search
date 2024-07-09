import './Definitions.css';
import { v4 as uuidv4 } from 'uuid';

export const Definitions = ({ word, meanings }) => {
  console.log('this is audio', meanings[0]?.phonetics[0]?.audio);
  console.log('this is meanings', meanings);

  return (
    <div className='meanings'>
      {word === '' ? (
        <span className='subTitle'>Type a word to search</span>
      ) : (
        meanings.map((data) =>
          data.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                key={uuidv4()}
                className='firstMeaning'
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'white', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
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
