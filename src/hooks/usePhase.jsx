import { useContext, useEffect, useRef } from 'react';
import { MusicContext } from '../context/musicContext';

export default function usePhase(score) {
  const html = useRef(document.querySelector('html'));
  const { themeMusic } = useContext(MusicContext);
  const bodyStyle = html.current.style;
  const shake =
    score < 10
      ? ''
      : score < 18
      ? 'shake-little'
      : score < 27
      ? 'shake'
      : score < 36
      ? 'shake-opacity shake-chunk'
      : score < 46
      ? 'shake-opacity shake-hard'
      : 'shake-opacity shake-crazy';
  useEffect(() => {
    const limScore = Math.min(score, 50);
    if (limScore < 6) themeMusic.rate(1);
    else themeMusic.rate(1 - (limScore - 6) / 50);
    html.current.style = `${bodyStyle};\nfilter: grayscale(${Math.floor(
      (limScore * 150) / 35
    )}%) brightness(${(1 - (limScore * 0.5) / 50).toFixed(
      1
    )}) contrast(${Math.floor(100 + (limScore * 50) / 50)}%) ${
      limScore >= 30 ? ' invert(0.2)' : ''
    };`;
    return () => {
      themeMusic.rate(1);
      html.current.style = '';
    };
  }, [bodyStyle, score, themeMusic]);
  useEffect(() => {
    if (shake !== '')
      document.body.classList.add(...shake.split(' '), 'shake-constant');
    return () => {
      document.body.className = '';
    };
  }, [shake]);
  return shake;
}
