const displayInfo = "8 * 5 + 6 - 10 / 5 * 3 + 5";

const calculate = (strOperation) => {
  strOperation = strOperation.split(" ");
  if (isNaN(strOperation[strOperation.length - 1])) {
    strOperation.pop();
  } else if (isNaN(strOperation[0])) {
    strOperation.shift();
  }

  let index = 0;
  while (true) {
    if (isNaN(strOperation[index])) {
      /* strOperation[index] is not a number */
      if (["*", "/"].includes(strOperation[index])) {
        let result = 0;
        switch (strOperation[index]) {
          case "*":
            result =
              Number(strOperation[index - 1]) * Number(strOperation[index + 1]);
            break;
          case "/":
            result =
              Number(strOperation[index - 1]) / Number(strOperation[index + 1]);
            break;
        }
        strOperation.splice(index - 1, 3, String(result));
        index -= 1;
      }
    }
    index += 1;
    if (!strOperation.includes('*') && !strOperation.includes('/')) break;
  }

  index = 0;
  while (true) {
    if (isNaN(strOperation[index])) {
      /* strOperation[index] is not a number */
      if (["+", "-"].includes(strOperation[index])) {
        let result = 0;
        switch (strOperation[index]) {
          case "+":
            result =
              Number(strOperation[index - 1]) + Number(strOperation[index + 1]);
            break;
          case "-":
            result =
              Number(strOperation[index - 1]) - Number(strOperation[index + 1]);
            break;
        }
        strOperation.splice(index - 1, 3, String(result));
        index -= 1;
      }
    }
    index += 1;
    if (!strOperation.includes('+') && !strOperation.includes('-')) break;
  }

  return strOperation.join(" ");
};

console.log(calculate(displayInfo));
