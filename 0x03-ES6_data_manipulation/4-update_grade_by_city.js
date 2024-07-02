import getListStudents from "./0-get_list_students.js";

export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const foundGrade = newGrades.find(grade => grade.studentId === student.id);
            if (foundGrade) {
                return { ...student, grade: foundGrade.grade };
            } else {
                return { ...student, grade: 'N/A' };
            }
        });
}
