import { useContext } from 'react';
import { MusicContext } from '../context/musicContext';

export default function useMusics() {
  const musics = useContext(MusicContext);
  return musics;
}
