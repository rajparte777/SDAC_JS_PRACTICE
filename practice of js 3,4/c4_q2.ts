class Studentt {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class School {
    static totalStudent: number = 0;

    studentList: Studentt[] = [];

    addStudent(student: Studentt): void {
        this.studentList.push(student);
        School.totalStudent++;
    }

    static totalCount(): number {
        return School.totalStudent;
    }
}

const school = new School();

const s1 = new Studentt(1, "Raj");
school.addStudent(s1);

console.log(School.totalCount()); // Output: 1