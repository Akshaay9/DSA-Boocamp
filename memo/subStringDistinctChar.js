// https://www.geeksforgeeks.org/count-of-substrings-having-all-distinct-characters/

// hashmp

const uniqstr = (str) => {
    const map = new Map();
    let count = 0;
    let release = 0;
    for (let i = 0; i < str.length; i++) {
      const currStr = str[i];
      while (release < i && map.has(currStr)) {
        map.delete(str[release]);
        release += 1;
      }
      map.set(currStr, 1);
      count += i - release + 1;
    }
    return count;
  };
  console.log(uniqstr("gfg"));
  
  /// BRUTEFORCE
  const isUnique = (str) => {
    return new Set(str).size === str.length;
  };
  
  const str = "gfg";
  const subStr = (str) => {
    let result = [];
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
      let newStr = "";
      for (j = i; j < str.length; j++) {
        newStr += str[j];
        result.push(newStr);
        if (isUnique(newStr)) {
          count += 1;
        }
      }
    }
    return { result: result, count };
  };
  
  console.log(subStr(str));
  