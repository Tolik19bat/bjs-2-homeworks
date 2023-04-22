function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if ("marks" in this === true) {
    this.marks.push(...marksToAdd);
  }
};

Student.prototype.getAverage = function () {
  if ("marks" in this === false || this.marks.length === 0) {
    return 0;
  }
  let sumOfRatings = this.marks.reduce((acc, elem) => acc + elem, 0);
  let numberOfRatings = this.marks.length;
  return sumOfRatings / numberOfRatings;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
