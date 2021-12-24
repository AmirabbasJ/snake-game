import { createContext, useRef } from 'react';
import React from 'react';
import theme from '../assets/musics/theme.mp3';
import explosion from '../assets/musics/explosion.mp3';
import { Howl } from 'howler';

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const themeMusic = useRef(new Howl({ src: [theme], loop: true, rate: 1 }));
  const explosionMusic = useRef(new Howl({ src: [explosion], volume: 0.4 }));
  return (
    <MusicContext.Provider
      value={{
        themeMusic: themeMusic.current,
        explosion: explosionMusic.current,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
