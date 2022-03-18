// Link=https://leetcode.com/problems/fibonacci-number/

// 1) Recursive
const recursive = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return recursive(num - 2) + recursive(num - 1);
};

const start = () => {
  return recursive(2);
};
console.log(start());

TC = 0(n ^ 2) || 0(2 ^ n);
SC = 0(n);

// 2) DP approach

const recursiveDp = (num, map) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  if (map[num]) {
    return map[num];
  }
  const ans = recursiveDp(num - 2, map) + recursiveDp(num - 1, map);
  map[num] = ans;
  return ans;
};

const startrecursiveDp = () => {
  return recursiveDp(4, {});
};

console.log(startrecursiveDp());

TC =0(n) 
SC=0(n)

