function randomNumber(10, 1000) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports(randomNumber);
