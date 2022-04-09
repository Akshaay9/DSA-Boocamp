// https://www.geeksforgeeks.org/count-distinct-elements-in-every-window-of-size-k/

// https://www.geeksforgeeks.org/count-distinct-elements-in-every-window-of-size-k/

const count = (arr, k) => {
    const map = new Map();
    let distinct = 0;
    let release = 0;
    let answerArr = [];
    // aquire
    for (let i = 0; i < k; i++) {
      const currElement = arr[i];
      if (map.has(currElement)) {
        map.set(currElement, map.get(currElement) + 1);
      } else {
        map.set(currElement, 1);
        distinct += 1;
      }
    }
    answerArr.push(distinct);
    // release and aquire
    for (let j = k; j < arr.length; j++) {
      const releaseElement = arr[release];
      map.set(releaseElement, map.get(releaseElement) - 1);
      release += 1;
      if (map.get(releaseElement) === 0) {
        map.delete(releaseElement);
        distinct -= 1;
      }
      const currElement = arr[j];
      if (map.has(currElement)) {
        map.set(currElement, map.get(currElement) + 1);
      } else {
        map.set(currElement, 1);
        distinct += 1;
      }
      answerArr.push(distinct);
    }
    return answerArr;
  };
  console.log(count([1, 2, 1, 3, 4, 2, 3], 4));
  


// brute force
const count = (arr, k) => {
    let disEle = 0;
  
    for (let i = 0; i <= arr.length - k; i++) {
      let newSet = new Set([]);
      for (let j = i; j < i + k; j++) {
        newSet.add(arr[j]);
      }
      disEle += newSet.size;
    }
    return disEle
  };
  console.log(count([1, 2, 4, 4], 2));
  