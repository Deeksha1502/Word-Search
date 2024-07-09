import './Definitions.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Definitions({ word, category, meanings }) {
  console.log("this is audio",meanings[0]?.phonetics[0]?.audio);
  console.log("this is meanings",meanings);
  
  return (
    <div className='meanings'>
      {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: '#fff', borderRadius: 10 }}
          controls
        >
          Your browser does not support audio :/
        </audio>
      )}
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
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s)=>`${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

Definitions.propTypes = {
  word: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  meanings: PropTypes.arrayOf(
    PropTypes.shape({
      meanings: PropTypes.arrayOf(
        PropTypes.shape({
          definitions: PropTypes.arrayOf(
            PropTypes.shape({
              definition: PropTypes.string,
              example: PropTypes.string,
              synonyms: PropTypes.arrayOf(PropTypes.string),
            })
          ),
        })
      ),
      phonetics: PropTypes.arrayOf(
        PropTypes.shape({
          audio: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Definitions;
