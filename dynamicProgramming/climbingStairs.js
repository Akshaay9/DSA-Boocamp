 // https://leetcode.com/problems/climbing-stairs/ 

// 1) Recursive way 
const recursion = (totalSteps, currentStep) => {
  if (currentStep === totalSteps) {
    return 1;
  }
  if (currentStep > totalSteps) {
    return 0;
  }
  const oneStep = recursion(totalSteps, currentStep + 1);
  const twoStep = recursion(totalSteps, currentStep + 2);
  return oneStep + twoStep;
};
const recursive = () => {
  return recursion(2, 0);
};
console.log(recursive());



// 1) recursive way
const recursionDp = (totalSteps, currentStep, map) => {
  if (currentStep === totalSteps) {
    return 1;
  }
  if (currentStep > totalSteps) {
    return 0;
  }
  if(map[currentStep]){
   return map[currentStep]
  }
  const oneStep = recursionDp(totalSteps, currentStep + 1, map);
  const twoStep = recursionDp(totalSteps, currentStep + 2, map);
  map[currentStep]=oneStep+twoStep
  return oneStep + twoStep;
};
const recursiveDp = () => {
  return recursionDp(3, 0, {});
};
console.log(recursiveDp());
