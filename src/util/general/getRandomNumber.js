function getRandomNumber(from, to) {
  return Math.floor(Math.random() * (from - to) + to);
}

export { getRandomNumber };
