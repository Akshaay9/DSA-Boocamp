// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const subStingMax = (s) => {
    const str = s;
    const map = new Map();
    let length = 0;
    let release = 0;
    for (let i = 0; i < str.length; i++) {
      const currElement = str[i];
      while (release < i && map.has(currElement)) {
        const releaseElement = str[release];
        map.delete(releaseElement);
        release += 1;
      }
      map.set(currElement, i);
      length = Math.max(length, i - release + 1);
    }
    return length;
  };
  // console.log(subStingMax("ohvhjdml"));
  
  const subStingMax2 = (s) => {
    const str = s;
    const map = new Map();
    let length = 0;
    let release = 0;
    for (let i = 0; i < str.length; i++) {
      const currElement = str[i];
      if (map.has(currElement) && map.get(currElement) >= release) {
        release = map.get(currElement)+1;
      }
      map.set(currElement, i);
      length = Math.max(length, i - release + 1);
    }
    return length;
  };
  console.log(subStingMax2("ohvhjdml"));
  
  /// BRUTEFORCE
  const isUnique = (str) => {
    return new Set(str).size === str.length;
  };
  
  const str = "bbbbb";
  const subStr = (str) => {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
      let newStr = "";
      for (j = i; j < str.length; j++) {
        newStr += str[j];
        if (isUnique(newStr)) {
          count = Math.max(count, newStr.length);
        }
      }
    }
    return count;
  };
  
  // console.log(subStr(str));
  