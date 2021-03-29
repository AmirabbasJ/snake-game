function isBackwardDirection(d1, d2) {
  d1 = Object.values(d1);
  d2 = Object.values(d2);

  return d1.map((e) => -e).every((d, i) => d === d2[i]);
}
export { isBackwardDirection };
