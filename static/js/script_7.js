let students_array = [
    new Student("Евгений", "Синицын"),
    new Student("Дмитрий", "Киселёв"),
    new Student("Данила", "Ефимов"),
    new Student("Вадим", "Доценко"),
    new Student("Алексей", "Бак"),
]

let sorted_arr = students_array.sort(function(a, b) {
    if (a.last_name < b.last_name) {
        return -1;
    }
    if (a.last_name > b.last_name) {
        return 1;
    }
    if (a.last_name == b.last_name) {
        if (a.first_name < b.first_name) {
            return -1;
        }
        if (a.first_name > b.first_name) {
            return 1;
        }
        return 0;
    }
});

function binarySearch(array, first_name, last_name, start = 0, end = array.length - 1) { 
    const middle = Math.round((start + end) / 2);
    if (array[middle] != undefined && first_name == array[middle].first_name && last_name == array[middle].last_name) { 
        return array[middle];
    }
    if (start >= end) { 
        return undefined;
    }
    if (last_name < array[middle].last_name) {
        return binarySearch(array, first_name, last_name, start, middle - 1);
    } else {
        return binarySearch(array, first_name, last_name, middle + 1, end);
    }
}

$("#7").on("click", function() {
    console.log(binarySearch(sorted_arr, "Алексей", "Бак"));
    console.log(binarySearch(sorted_arr, "Данил", "Ефимов"));
    console.log(binarySearch(sorted_arr, "Евгений", "Синицын"));
    console.log(binarySearch(sorted_arr, "", ""));
});
