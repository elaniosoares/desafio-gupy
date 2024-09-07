function countLetterA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log(`A letra 'a' não aparece na string.`);
    }
}

// Teste com uma string qualquer
const str = "JavaScript é uma linguagem fantástica!";
countLetterA(str);
