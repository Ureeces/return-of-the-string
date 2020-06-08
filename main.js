/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(s) {
  return s + '!';
}

function getFirstCharacter(s) {
  return s[0];
}

function getLastCharacter(s) {
  return s[s.length - 1];
}

function getOneCharacter(s, n) {
  return s[n];
}

function getTwoCharacters(s, n, i) {
  return s[n] + s[i];
}

function makeCapitalized(s) {
  return s.toUpperCase();
}

function yellLouder(s) {
  return s.toUpperCase() + '!!!';
}

function getInitials(s) {
  let space = s.indexOf(' ');
  return s[0].toUpperCase() + '.' + s[space + 1].toUpperCase() + '.';
}





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
