const makeIdFunc = () => {
  let maker = 0;
  const idMaker = () => {
    maker++
    return maker
  }
  return idMaker
};



const makePasswordChecker = (correctPassword) => {
  let guessTimes = 0
  return (guess) => {

    if (guessTimes === 3) {
      return 'Account locked'
    }
    if (guess === correctPassword) {
      guessTimes++
      return true
    } else {
      guessTimes++
      return false
    }
  }

};


const makeMultiplier = (multiplier) => {
  return (arrOfNum) => {
    return arrOfNum.map(num => num * multiplier)
  }

};

const makeFilterByLength = (maxLength) => {
  return (arrOfStrings) => {
    return arrOfStrings.filter(string => string.length <= maxLength)

  }
};

const makeGradeTracker = () => {
  const grades = []
  return students = {
    name:

  }


};

const makeShoppingList = () => {

};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
