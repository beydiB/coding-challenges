
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
return str.split('').map(x => x.repeat(2)).join('')
}
