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
      ? 'shake-opacity shake-rotate'
      : score < 46
      ? 'shake-opacity shake-hard'
      : 'shake-opacity shake-crazy';
  useEffect(() => {
    const limScore = Math.min(score, 50);
    if (limScore < 6) themeMusic.rate(1);
    else themeMusic.rate(1 - (limScore - 6) / 50);
    if (limScore >= 40)
      html.current.style = `${bodyStyle};\nfilter: grayscale(100%) brightness(0.7) contrast(1000000000%) invert(.9)`;
    else
      html.current.style = `${bodyStyle};\nfilter: grayscale(${Math.floor(
        (limScore * 150) / 50
      )}%) brightness(${(1 - (limScore * 0.5) / 50).toFixed(
        1
      )}) contrast(${Math.floor(100 + (limScore * 50) / 50)}%) ${
        limScore >= 36 ? `invert(${(limScore * 0.9) / 40})` : ''
      };`;
    const el = html.current;
    return () => {
      themeMusic.rate(1);
      el.style = '';
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
