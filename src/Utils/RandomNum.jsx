import React from 'react';

function RandomNumber() {
  const randomNumber = Math.floor(Math.random() * 30) + 50;
  return randomNumber < 100 ? '0' + randomNumber : randomNumber.toString();
}

export default RandomNumber;
