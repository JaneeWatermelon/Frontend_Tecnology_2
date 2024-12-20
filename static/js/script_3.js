const studentInfo = {
    "first_name": "Jane",
    "last_name": "Sinitsyn",
    "marks": [
        {"subject": "math", "mark": 5},
        {"subject": "phisycs", "mark": 4},
    ],
    showInfo() {
        console.log(`Имя: ${this.first_name}, Фамилия: ${this.last_name}`);
        console.log(`Оценки:`);
        for (let i=0; i < this.marks.length; i++) {
            let mark_info = this.marks[i];
            console.log(`Предмет: ${mark_info.subject}, Оценка: ${mark_info.mark}`);
        };
    }
}

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.marks = [];
    }
    showInfo() {
        console.log(`Имя: ${this.first_name}, Фамилия: ${this.last_name}`);
        if (this.marks.length) {
            console.log(`Оценки:`);
            for (let i=0; i < this.marks.length; i++) {
                let mark_info = this.marks[i];
                console.log(`Предмет: ${mark_info.subject}, Оценка: ${mark_info.mark}`);
            };
        } else {
            console.log("Оценок пока нет");
        }
        
    }
    midMark() {
        let mid = 0;
        if (this.marks.length) {
            for (let i=0; i < this.marks.length; i++) {
                let mark_info = this.marks[i];
                mid += mark_info.mark;
            };
            console.log(mid / this.marks.length);
            return mid / this.marks.length;
        } 
        return mid;
    }
    showAllMarksBySubject(subject) {
        let str = "";
        if (this.marks.length) {
            console.log("Оценки: ");
            for (let i=0; i < this.marks.length; i++) {
                let mark_info = this.marks[i];
                
                if (mark_info != undefined && subject == mark_info["subject"]) {
                    str += `${mark_info.mark} `;
                }
            };
            console.log(str);
        } else {
            console.log("Оценок пока нет");
        }
    }
    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }
    deleteMarkBySubject(subject) {
        for (let i=0; i < this.marks.length; i++) {
            let mark_info = this.marks[i];
            if (mark_info != undefined && subject == mark_info["subject"]) {
                delete this.marks[i];
            }
        };
    }
}

$("#3").on("click", function() {
    const newStudent = new Student("Jane", "Sin");

    console.log(newStudent.midMark());
    newStudent.showInfo();
    newStudent.showAllMarksBySubject("Математика");
    newStudent.addMark("Математика", 5);
    newStudent.addMark("Математика", 4);
    console.log(newStudent.midMark());
    newStudent.showInfo();
    newStudent.showAllMarksBySubject("Математика");
    newStudent.deleteMarkBySubject("Математика");
    console.log(newStudent.marks);
    newStudent.showAllMarksBySubject("Математика");
});
