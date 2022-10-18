function moveTen(s){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghij'
    let newS = ''
    for (let i of s) {
      newS += alphabet[alphabet.indexOf(i) + 10] 
    }
    return newS
  }

console.log(moveTen(('codewars'))) // => mynogkbc
console.log(moveTen(('saxophone'))) // => ckhyzryxo
console.log(moveTen(('rambunctious'))) // => bkwlexmdsyec