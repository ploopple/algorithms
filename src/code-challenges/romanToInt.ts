interface OBJTYPE {
  i: {
    value: number;
    char: string;
  };
  v: {
    value: number;
    char: string;
  };
  x: {
    value: number;
    char: string;
  };
  c: {
    value: number;
    char: string;
  };
  d: {
    value: number;
    char: string;
  };
  m: {
    value: number;
    char: string;
  };
}

const obj: any = [
  { value: 1, char: "I" },
  { value: 5, char: "V" },
  { value: 10, char: "X" },
  { value: 50, char: "L" },
  { value: 100, char: "C" },
  { value: 500, char: "D" },
  { value: 1000, char: "M" },
];
function romanToInt(s: string): number {
  let result: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    // obj.map((resObj: any) => {
    //   if (s[i] === resObj.char) {
    //     console.log(resObj);
    //     if (s[i + 1]) {
    //       obj.map((resObj2: any) => {
    //         if (s[i + 1] === resObj2.char) {
    //           console.log(resObj2);
    //         }
    //       });
    //     }
    //     result += resObj.value;
    //   }
    // });

    for (let j: number = 0; j < obj.length; j++) {
      if (s[i] === obj[j].char) {
        if (s[i + 1] === obj[j].char) {
          console.log(s[i + 1], obj[j]);
          result += obj[j].value - 1;
          i++;
          break;
        }
        // console.log(s[i], obj[j]);
        result += obj[j].value;
      }
    }
  }

  console.log(result);
  return result;
}

romanToInt("IV");
