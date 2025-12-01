// Oops! This factory function exposes the students array.
// Can you make it private using closure?

const createCourse = (topic, instructor) => {
  const students = [];

  return {
    topic,
    instructor,
    addStudent(name) {
      students.push(name);
    },
    removeStudent(name) {
      const i = students.indexOf(name);
      if (i !== -1) {
        students.splice(i, 1);
      }
    },
    getStudents() {
      return [...students];
    },
  };
};

module.exports = {
  createCourse,
};
