function fibonacci(num) {
    let a = 0;
    let b = 1;
    let next = a + b;

    while (next < num) {
        a = b;
        b = next;
        next = a + b;
    }

    if (num === next || num === 0 || num === 1) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Teste com um número qualquer
const num = 22;
fibonacci(num);
