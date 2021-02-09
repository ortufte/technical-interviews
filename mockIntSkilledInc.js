
// 1- reverse a string (without using str.reverse())
function reverseString(str) {
    let reversed = ' ';
    for  (let char of str) {
        reversed = char  +  reversed
    }
 	return reversed;
}

// 2- find out if a given string is a palindrome
//	isPalindrome("kayak") = true
//	isPalindrome("vancouver") = false
//  assuming input contains no special characters and all characters are lowercase
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
  
    while( start < end) {
        if (str[start] !== str[end]) {
            return false;
        } else {
            start += 1;
            end -= 1;
        }
    }
    return true;
}

// 3- given an array of integers find the most repeated number
// 	mostRepeated([2,4,4,4,4,5,6,6,6,1,1,4,4,4,4]) = 4
//  assuming no element of the input appears exact same number of times as another element
function mostRepeated(nums) {
    let map = {};
    let maxKey = -1;
    let maxValue = 0;

	for (let num of nums) {
        map[num] = map[num] + 1 || 1;
    }

    Object.keys(map).forEach(key => {
	    if (map[key] > maxValue ) {
            maxValue = map[key]; 
		    maxKey = key; 
        }
    })
    return maxKey;
}


// 4- given 2 sorted arrays merge them into a third sorted array (without using sort).
//	mergeSorted([3,4,8], [1,2,6,9,11]) = [1,2,3,4,6,8,9,11]
function mergeSorted(a1, a2) {
    let newArray = [];
    let long = a1.length >= a2.length ? a1 : a2
    let short = a1.length < a2.length ? a1 : a2

    while (short.length > 0) {
        if (a1[0] < a2[0]) {
            newArray.push(a1.shift(a1[0]))
        } else {
            newArray.push(a2.shift(a2[0]))
        }
    }
    return newArray.concat(long);
  }
