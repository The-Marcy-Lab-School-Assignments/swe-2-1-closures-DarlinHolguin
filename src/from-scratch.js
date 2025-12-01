const makeIdFunc = () => {
  let maker = 0;
  const idMaker = () => {
    maker++;
    return maker;
  };
  return idMaker;
};

const makePasswordChecker = (correctPassword) => {
  let guessTimes = 0;

  return (guess) => {
    if (guessTimes === 3) {
      return 'Account locked';
    }
    if (guess === correctPassword) {
      guessTimes++;
      return true;
    }
    guessTimes++;
    return false;
  };
};

const makeMultiplier = (multiplier) => {
  return (arrOfNum) => {
    return arrOfNum.map((num) => num * multiplier);
  };
};

const makeFilterByLength = (maxLength) => {
  return (arrOfStrings) => {
    return arrOfStrings.filter((string) => string.length <= maxLength);
  };
};

const makeGradeTracker = () => {
  const grades = [];

  return {
    addGrade(grade) {
      if (grade >= 0 && grade <= 100) {
        grades.push(grade);
        return true;
      }
      return false;
    },
    getAverage() {
      if (grades.length === 0) return 0;
      return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
    },

  };
};

const makeShoppingList = () => {
  const items = [];

  return {
    getItems() {
      return [...items];
    },
    addItem(item) {
      items.push(item);
      console.log(`${item} successfully added! Now you have ${items.length} item(s).`);
      return items.length;
    },

    removeItem(item) {
      const i = items.indexOf(item);

      if (i !== -1) {
        items.splice(i, 1);
        console.log(`${item} successfully removed. You now have ${items.length} item(s).`);
        return true;
      }
      console.log(`${item} not found.`);
      return false;
    },

  };
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
