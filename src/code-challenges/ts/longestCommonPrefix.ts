function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let finalResultOfTheFirstElement: string = strs[0];

  for (let i: number = 1; i < strs.length; i++) {
    console.log(strs[i].indexOf(finalResultOfTheFirstElement));
    while (strs[i].indexOf(finalResultOfTheFirstElement) != 0) {
      finalResultOfTheFirstElement = finalResultOfTheFirstElement.slice(
        0,
        finalResultOfTheFirstElement.length - 1
      );
    }
  }
  return finalResultOfTheFirstElement;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
