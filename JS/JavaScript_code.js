
const student = {
    name: "Craftsman",
    age: 19,
    major: "Computer Science",
    grades: [86, 90, 78, 95],
    calculateAverage: function() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}