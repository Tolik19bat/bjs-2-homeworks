function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = new Array();
};

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if ('marks' in Student === true) {
    this.marks.push(marksToAdd);
  }
};

Student.prototype.getAverage = function () {
  if ('marks' in Student === false || this.marks.length === 0) {
    return 0;
  }
  let sumOfRatings = this.marks.reduce(function (quantity, element) {
    quantity + element
  }, 0);
  let numberOfRatings = this.marks.length;
  this.averageRating = sumOfRatings / numberOfRatings;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
