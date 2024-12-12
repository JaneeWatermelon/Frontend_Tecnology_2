function SumOf2Max(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let sr = a + b + c - max - min;
    return max * sr;
}

function NameZvanie(name, zv = "Рядовой") {
    return (`Имя: ${name}, Звание: ${zv}`);
}

const sayHelloTo = name => (`Hello, ${name}!`);

function funcExprPlusParams(expr, name) {
    return expr(name);
}

let SquareAndCube = (a) => {a**(2+a%2)};

// function SquareAndCube(a) {
//     const evenOrOdd = x => x % 2;
//     if (evenOrOdd(a) == 0) {
//         return a**2;
//     } else {
//         return a**3;
//     }
// }

function Factorial(n) {
    if (n > 1) {
        return n * Factorial(n-1);
    } else {
        return 1;
    }
}

$("#2").on("click", function() {
    alert(SumOf2Max(Number(prompt("1. Ведите первое число")), Number(prompt("1. Ведите второе число")), Number(prompt("1. Ведите третье число"))))

    alert(NameZvanie(prompt("2. Введите имя")));
    alert(NameZvanie(prompt("2. Введите имя"), prompt("2. Введите звание")));

    alert(funcExprPlusParams(sayHelloTo, prompt("3. Введите имя")));

    alert(SquareAndCube(Number(prompt("4. Введите любое целое число"))));

    alert(Factorial(Number(prompt("5. Введите число для поиска факториала"))));
});