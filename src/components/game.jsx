import React, { useState } from 'react';
import MusicContextProvider from '../context/musicContext';
import ScoreContextProvider from '../context/scoreContext';
import Board from './board';
import LostMenu from './LostMenu';
import Menu from './menu';

const Game = () => {
  const [state, setState] = useState('start');

  return (
    <MusicContextProvider>
      <ScoreContextProvider>
        {state === 'game' ? (
          <Board setState={setState} />
        ) : state === 'start' ? (
          <Menu setState={setState} />
        ) : (
          <LostMenu setState={setState} />
        )}
      </ScoreContextProvider>
    </MusicContextProvider>
  );
};

export default Game;
