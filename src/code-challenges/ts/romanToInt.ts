function romanToInt(s: string): number {
  const obj: { value: number; char: string }[] = [
    { value: 1, char: "I" },
    { value: 5, char: "V" },
    { value: 10, char: "X" },
    { value: 50, char: "L" },
    { value: 100, char: "C" },
    { value: 500, char: "D" },
    { value: 1000, char: "M" },
  ];
  let result: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    const index1: number = obj.findIndex((v) => v.char === s[i]);
    switch (s[i]) {
      case "I":
        if (s[i + 1]) {
          const index2: number = obj.findIndex((v) => v.char === s[i + 1]);
          if (s[i - 1]) {
            const index3: number = obj.findIndex((v) => v.char === s[i - 1]);
            if (obj[index3].value === obj[index1].value) {
              (result += obj[index3].value), obj[index1].value;
              break;
            }
          }
          if (obj[index1].value >= obj[index2].value) {
            result += obj[index1].value;
          } else {
            result += obj[index2].value - obj[index1].value;
            i++;
          }
        } else {
          result += obj[index1].value;
        }
        break;
      case "V":
        if (s[i + 1]) {
          const index2: number = obj.findIndex((v) => v.char === s[i + 1]);
          if (s[i - 1]) {
            const index3: number = obj.findIndex((v) => v.char === s[i - 1]);
            if (obj[index3].value === obj[index1].value) {
              (result += obj[index3].value), obj[index1].value;
              break;
            }
          }
          if (obj[index1].value >= obj[index2].value) {
            result += obj[index1].value;
          } else {
            result += obj[index2].value - obj[index1].value;
            i++;
          }
        } else {
          result += obj[index1].value;
        }
        break;
      case "X":
        if (s[i + 1]) {
          const index2: number = obj.findIndex((v) => v.char === s[i + 1]);
          if (s[i - 1]) {
            const index3: number = obj.findIndex((v) => v.char === s[i - 1]);
            if (obj[index3].value === obj[index1].value) {
              (result += obj[index3].value), obj[index1].value;
              break;
            }
          }
          if (obj[index1].value >= obj[index2].value) {
            result += obj[index1].value;
          } else {
            result += obj[index2].value - obj[index1].value;
            i++;
          }
        } else {
          result += obj[index1].value;
        }
        break;
      case "L":
        if (s[i + 1]) {
          const index2: number = obj.findIndex((v) => v.char === s[i + 1]);
          if (s[i - 1]) {
            const index3: number = obj.findIndex((v) => v.char === s[i - 1]);
            if (obj[index3].value === obj[index1].value) {
              (result += obj[index3].value), obj[index1].value;
              break;
            }
          }
          if (obj[index1].value >= obj[index2].value) {
            result += obj[index1].value;
          } else {
            result += obj[index2].value - obj[index1].value;
            i++;
          }
        } else {
          result += obj[index1].value;
        }
        break;
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "C":
        if (s[i + 1]) {
          const index2: number = obj.findIndex((v) => v.char === s[i + 1]);
          if (s[i - 1]) {
            const index3: number = obj.findIndex((v) => v.char === s[i - 1]);
            if (obj[index3].value === obj[index1].value) {
              (result += obj[index3].value), obj[index1].value;
              break;
            }
          }
          if (obj[index1].value >= obj[index2].value) {
            result += obj[index1].value;
          } else {
            result += obj[index2].value - obj[index1].value;
            i++;
          }
        } else {
          result += obj[index1].value;
        }
        break;
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      case "D":
        if (s[i + 1]) {
          const index2: number = obj.findIndex((v) => v.char === s[i + 1]);
          if (s[i - 1]) {
            const index3: number = obj.findIndex((v) => v.char === s[i - 1]);
            if (obj[index3].value === obj[index1].value) {
              (result += obj[index3].value), obj[index1].value;
              break;
            }
          }
          if (obj[index1].value >= obj[index2].value) {
            result += obj[index1].value;
          } else {
            result += obj[index2].value - obj[index1].value;
            i++;
          }
        } else {
          result += obj[index1].value;
        }
        break;
      case "M":
        result += obj[index1].value;
        break;
    }
  }
  return result;
}

console.log(romanToInt("III")); //3
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); //1994
console.log(romanToInt("MDCCCLXXXIV")); //1884
console.log(romanToInt("MMCCCXCIX")); //2399
console.log(romanToInt("CXC")); //190
