class Student2 {
    constructor(group) {
        this.group = group;
    }
}

function intersection_arr(arr1, arr2) {
    return new Set(arr1.filter(item => arr2.includes(item)));
}

function map_of_items_count(arr) {
    let map = new Map();
    for (let item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        }
        else {
            map.set(item, 1);
        }
    }
    return map;
}

function people_in_max_group(arr) {
    let map = new Map();
    for (let item of arr) {
        let group = item.group;
        if (map.has(group)) {
            map.set(group, map.get(group) + 1);
        }
        else {
            map.set(group, 1);
        }
    }
    return Math.max.apply(Math, Array.from(map.values()));
}

$("#6").on("click", function() {
    console.log(intersection_arr(
        [1, 2, 3, 4, 4, 5],
        [1, 4, 5, 9, 0]
    ));
    
    console.log(map_of_items_count(
        [true, "true", 1, 2, 2, '0', 0]
    ));
    
    let result_number = people_in_max_group(
        [
            new Student2("6203"),
            new Student2("6203"),
            new Student2("6203"),

            new Student2("6204"),

            new Student2("6203"),

            new Student2("6202"),
            new Student2("6202"),
            new Student2("6202"),
            
            new Student2("6201"),
            new Student2("6201"),
        ]
    )
    console.log(result_number);
});