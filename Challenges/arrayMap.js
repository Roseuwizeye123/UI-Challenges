function Subarray(arr, target) {
    let targetSum = 0;
    let a = 0;
    for (let z = 0; z < arr.length; z++) {
        targetSum += arr[z];
        // While targetSum is greater than the target, subtract the starting elements
        while (targetSum > target && a <= z) {
            targetSum -= arr[a];
            a++;
        }
        // If targetSum is equal to the target, return true
        if (targetSum === target) {
            return true;
        }
    }
    // If targetSum is not equal to the target, return false
    return false;
}
// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(Subarray(arr, target));  




