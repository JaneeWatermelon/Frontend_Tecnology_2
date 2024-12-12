function IsSimple(n) {
    let simple = true;
    if (n == 1) {
        return simple;
    }
    for (let i=2; i < n; i++) {
        if (n % i == 0) {
            simple = false;
            break;
        }
    }
    return simple;
};

function Aftomorph(left, right) {
    let str = "";
    for (let a = left; a <= right; a++) {
        let enumerator = 10**(String(a).length);
        if (a**2 % enumerator == a) {
            str += `${a} `;
        }
    }
    return str;
}

function IsPerfect(n) {
    let sum = 0;
    for (let i=1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return true;
    }
    return false;
}

// Вариант 4
// Изначально сделал первую лабу раньше чем объявили о делении по вариантам, поэтому тут остальные тоже есть
function IsOverful(n) {
    let sum = 0;
    for (let i=1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum > n) {
        return true;
    }
    return false;
}
// Вариант 4

function IsNothipotenus(n) {
    for (let i = 1; i < n+1; i++) {
        for (let j = 1; j < i + 1; j++) {
            if (i**2 + j**2 == n**2) {
                return false;
            }
        }
    }
    return true;
}

function Armstrong(left, right) {
    let str = "";
    for (let a = left; a <= right; a++) {
        let len = String(a).length;
        let sum = 0;
        for (let i=0; i < len; i++) {
            sum += (Number(String(a)[i]))**len;
        }
        if (sum == a) {
            str += `${a} `;
        }
    }
    return str;
}

function PiphagorTriples(n) {
    let str = "";
    let count = 0;
    let x = 1
    while (count < n) {
        for (let i = 1; i < x+1; i++) {
            for (let j = 1; j < i + 1; j++) {
                if (i**2 + j**2 == x**2) {
                    str += `\n${i} ${j} ${x}`;
                    count++;
                }
            }
        }
        x++;
    }
    return str;
    
}

// let bool = IsSimple(Number(prompt("1. Проверка числа на простоту")));
// if (bool) {
//     alert("Число простое");
// } else {
//     alert("Число непростое");
// }

// alert(`2. Автоморфные: ${Aftomorph(Number(prompt("2. Введите левое число для поиска автоморфных")), Number(prompt("2. Введите правое число для поиска автоморфных")))}`);

// bool = IsPerfect(Number(prompt("3. Проверка числа на совершенность")));
// if (bool) {
//     alert("Число совершенное");
// } else {
//     alert("Число несовершенное");
// }

$("#1").on("click", function() {
    bool = IsOverful(Number(prompt("4. Проверка числа на избыточность")));
    if (bool) {
        alert("Число избыточное");
    } else {
        alert("Число неизбыточное");
    }
});

// bool = IsNothipotenus(Number(prompt("5. Проверка числа на негипотенузность")));
// if (bool) {
//     alert("Число негипотенузное");
// } else {
//     alert("Число гипотенузное");
// }

// alert(`6. Числа Армстронга: ${Armstrong(Number(prompt("6. Введите левое число для поиска чисел Армстронга")), Number(prompt("6. Введите правое число для поиска чисел Армстронга")))}`);
// alert(`7. Числа Армстронга: ${PiphagorTriples(Number(prompt("7. Ввдеите количество первых Пифагоровых троек, которые вы хотите найти")))}`);
    