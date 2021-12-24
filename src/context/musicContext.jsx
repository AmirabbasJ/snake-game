import { createContext, useRef } from 'react';
import React from 'react';
import music from '../assets/musics/theme.mp3';
import { Howl } from 'howler';

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const themeMusic = useRef(new Howl({ src: [music], loop: true }));

  return (
    <MusicContext.Provider value={{ themeMusic: themeMusic.current }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
