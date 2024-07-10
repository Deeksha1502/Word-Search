import './Definitions.css';
import { v4 as uuidv4 } from 'uuid';

export const Definitions = ({ word, meanings, wordNotFound }) => {
  return (
    <div className='meanings'>
      {word === '' ? (
        <span className='subTitle'>Type a word to search</span>
      ) : wordNotFound ? (
        <span className='subTitle'>Word does not exist</span>
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
