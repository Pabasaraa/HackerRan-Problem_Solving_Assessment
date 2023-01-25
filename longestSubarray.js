/**
    Given an array of integers, what is the length of the longest subarray containing no more than two distinct values such that the distinct values differ by no more than 1?

    Example
    arr = [0,1,2,1,2,3]
    The largest such subarray has length 4: [1,2,1,2].
    arr = [1, 1, 1, 3, 3, 2, 2]
    The largest such subarray has length 4: [3, 3, 2, 2]. The values 1 and 3 differ by more than 1 so [1, 1, 1, 3, 3] is not valid.
    
    Function Description
    Complete the function longestSubarray in the editor below.
    longestSubarray has the following parameter(s): int arr[n]: an array of integers
    
    Returns:
    int: the length of the longest subarray
    
    Constraints
    • The longest subarray will have fewer than 35 elements.
    • 1 ≤ n ≤ 105
    • 1 ≤ arr[i] ≤ 109 
**/
 
function longestSubarray(arr) {
    let start = 0, end = 1;
    let subarray = new Set();
    let currentLength = 0, maxLength = 0;
    
    while(end < arr.length+1) {
        subarray.clear();
        
        // Store the subarray in a set to remove duplicates
        for(let i = start; i < end; i++) {
            subarray.add(arr[i]);
        }
        
        // If the subarray has 2 or less distinct values
        if(subarray.size <= 2) {
            const values = [];
            
            subarray.forEach((value) => {
                values.push(value);
            });
            const difference = values.length > 1 ? Math.abs(values[0] - values[1]) : 0;
            
            // Check if the difference between the values is 0 or 1
            if(difference in [0, 1]){
                currentLength++;
                end++;
                maxLength = Math.max(currentLength, maxLength);
                console.log('add')
                console.log(currentLength);
            } else {
                currentLength--;
                start++;
                console.log('minus')
                console.log(currentLength);
            }
        } else {
            maxLength = Math.max(currentLength, maxLength);
            currentLength--;
            start++;
        }
    }
    return maxLength;
}

const length = longestSubarray([1, 2, 3, 4, 5, 6, 6, 5, 5, 1, 1, 1, 1, 2, 2, 2, 1, 5]);
console.log(length);