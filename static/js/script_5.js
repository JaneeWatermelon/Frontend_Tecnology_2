// Вариант 4

function mul_between_min_and_max(arr) {
    let min_val = 10**10;
    let max_val = 0;
    let min_index;
    let max_index;
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < min_val) {
            min_index = i;
            min_val = val;
        }
        if (val > max_val) {
            max_index = i;
            max_val = val;
        }
    }
    if (min_index != undefined) {
        if (max_index - min_index > 1) {
            return arr.slice(min_index + 1, max_index).reduce((mul, current_value) => mul * current_value, 1);
        }
    }
    return NaN;
}

function double_to_single_arr(arr) {
    let single_arr = [];
    for (let i = 0; i < arr.length; i++) {
        let min_val = 10*10;
        let inner_arr = arr[i];
        for (let j = 0; j < inner_arr.length; j++) {
            let inner_val = inner_arr[j];
            if (inner_val < min_val && inner_val % 2 == 0) {
                min_val = inner_val;
            }
        }
        single_arr.push(min_val != 10*10 ? min_val : NaN);
    }
    return single_arr;
}

$("#5").on("click", function() {
    let arr = [1, 2, 3, 1, 9, 50];
    let double_arr = [
        [1, 2, 3, 4],
        [1, 9, 3, 7],
        [],
        [0, 0, 0],
    ];
    console.log(mul_between_min_and_max(arr));
    console.log(double_to_single_arr(double_arr));
});