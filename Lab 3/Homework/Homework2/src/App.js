import React from 'react';
import './index.css';

const PianoKey = ({ note, isBlackKey, onClick }) => {
  const className = isBlackKey ? 'black-key' : 'white-key';

  return (
    <div className={`piano-key ${className}`} onClick={() => onClick(note)}>
      {note}
    </div>
  );
};

const App = () => {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const octaves = 7;

  const handleClick = (note) => {
    console.log(`You clicked the key: ${note}`);
    // Add logic for playing sound or any other actions
  };

  return (
    <div className="piano">
      {[...Array(octaves)].map((_, octaveIndex) => (
        <div key={octaveIndex} className="octave">
          {notes.map((note, noteIndex) => {
            const key = note + (octaveIndex + 1);
            const isBlackKey = [1, 3, 6, 8, 10].includes(noteIndex); // indices of black keys

            return (
              <PianoKey
                key={key}
                note={key}
                isBlackKey={isBlackKey}
                onClick={handleClick}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default App;
