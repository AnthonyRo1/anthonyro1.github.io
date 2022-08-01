
const caesarCipher = (word, inc) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let newStr = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            newStr += ' '
            continue;
        }
        
        const idx = alpha.indexOf(word[i]);
        let newIdx = idx + inc
        while (newIdx > alpha.length - 1) {
           newIdx = newIdx % alpha.length
        } 
        newStr += alpha[newIdx]
    }
    return newStr;
}


console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 100)); // "difve"