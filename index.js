//QUETIONS FROM LEETCODE AND HACKERRANK
//Sources Ref:https://leetcode.com


// INSERTION SORT PART2
function insertionSort2(arr) {
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        let j = i - 1
        while(arr[j] > temp){
            arr[j + 1] = arr[j]
            j--
        }
        j++
        arr[j] = temp
    }
return arr
}

// insertionSort2([1,3,10, 35, 56, 78])


// FIBONACCI SEQUENCE
function fib(n , prevVal = []){
    if(prevVal[n] != null){
        return prevVal[n]
    }
    let result 
    if(n <= 2){
        result = 1
    }else{
        result = fib(n - 1, prevVal)  + fib(n - 2, prevVal)
    }
    prevVal[n] = result
    return result 
}

// console.log(fib(6))



// IMPLEMENTATION 
// 1.  grading
// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5 .
//If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// return array of new value

function gradingStudents(grades) {
    return grades.map( grade => {
        let numDiff = 5 - ( grade % 5);
        if(numDiff < 3 && grade >= 38) {
            grade += numDiff;
        }
        
        return grade;
    })

}

// console.log(gradingStudents([73, 67, 38, 33]))

//2. Number Line Jumps
// two kangoroos jumps on number line in the positive direction 
// start line or jump distance might be different
// kangoroos1 has a start line x1 = 1 , jump distance v1= 2 and kangoroos2 has x2 = 2 and jump distance  v1 = 1 ,print "Yes"
// if they never meet at the same location(same number) , print "No"

function kangaroo(x1, v1, x2, v2) {
    if(x1 < x2 && v1 < v2){
        return "No"
    }else{
        if( v1 != v2 && (x2 - x1) % (v1 - v2) === 0){
            return "Yes"
        }else{
            return "No"
        }
    }

}

console.log(kangaroo(2, 1, 3,4))

// 3. SUPPER REDUCED STRING
// reduce the string to it shortest length by doing a series of operations
// a pair of adjacent that matched will be deleted
// if all adjacent are matched ,print empty string

function superReducedString(s) {
    let arr = s.split('')
    for(let i = 0; i < arr.length - 1;){
        if(arr[i] === arr[i + 1]){
            arr.splice(i, 2)
            i = 0  
        }else{
            i++
        }
    }

    if(!arr.join("")){
        return 'Empty String'
    }else{
        return arr.join('')
    }
    
    


}

superReducedString('aabbc')

//4. SEARCH ALGORITHMS
// 1. Ice Cream Parlor
// Sunny and johnny like to pool their money and go to the ice cream parlor
// Johnny never buys the same flavor
// they spend all of their moneny 
// given a list of flavor's cost ,find two costs that spends all of their money.
// return indices but here start from 1


//iterate through outter loop starting from 0
//itrerate inner loop starting from 1 
// check each number if two numbers added make total of their money . 
// push each indices increement by 1 . 
// return arr 




//5. palindrome 
// check if number is less than 0
// convert number to string and to array for reverse method 
// after reverse join and converts that to number 
// check if  reversed number and number is same 
// return true if they match otherwise return false 

const  isPalindrome = function(x) {
    if(x < 0){
        return false
    }else{
        let reverseInput = Number(x.toString().split("").reverse().join(""))
        if(x === reverseInput){
            return true
        }else{
            return false
        }
    }
}

isPalindrome(121)




//6. VALID PARENTHESIS
// create an empty array 
// create an two object to seperate opening and closing brackets, parenthesis,curly bracket
// check if opening value is exist 
// compare closing value is matched to opening one .If not, return false
// if array is empty after compared , then return true , otherwise , return false . 

const isValid = function(s) {
    let stack = []
    let leftMap = {
        "(" : 1,
        "{" : 2,
        "[" : 3
    }
    
    let rightMap = {
        ")" : 1,
        "}" : 2,
        "]" : 3
    }
    for(let i = 0; i < s.length; i++){
    if(leftMap[s[i]]){
        stack.push(s[i])
    }else{
    if(rightMap[s[i]] !== leftMap[stack.pop(s[i])]){
        return false
    }
    }
    }
    return stack.length ? false: true;

};

console.log(isValid("()[]{}"))



//7.DIVIDE AND CONQUER PATTERN EXAMPLE 
// find the position of a number in given array . 
// take two parameters a number  and an array 
// return index of the number


//define a function that takes two parameters (number, array)
//define two variables to keep track of start and end value
//store length of array in a variable and middle value as well
//use while loop to iterate through array until its start value is not greater than end value
//check if number is less than middle value ,if Yes, assign end value as middle - 1 
//check if number value is greater than middle value ,if it is , then assign start value middle + 1
//if condition does not fall into previous if checks then , return middle value
//if none of conditions are met , just return - 1 

const findPosition = (arr, num) => {
    let start = 0; 
    let end = arr.length - 1 
    while(start <= end){
        let middle = Math.floor((start + end ) / 2)
        let currentMidVal = arr[middle]
        if(num < currentMidVal){
            end  = middle - 1
        }else if ( num > currentMidVal){
            start = middle + 1
        }else{
          // depends on whether we want to return value or index . 
          // return arr[middle]
            return middle
        }
}
    return -1 
}


findPosition([1,2,3,4,5], 3)



//8.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
const twoSum = (nums, target) => {
        const obj = new Map()
        for(let i = 0; i < nums.length;  i++){
        if(obj.has(target - nums[i])){
            return [obj.get(target - nums[i]), i]
        }
        obj.set(nums[i], i)
        }

    return []
    }


    console.log(twoSum([3,2,4],6))


//9.You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
const  maximumWealth = function(accounts) {
        let total = []
        let count = 0
        while(count !== accounts.length){
        let totalCount = 0 
            for(let i = 0; i < accounts[count].length; i++){
                    totalCount += accounts[count][i]
            }
            total.push(totalCount) 
            count++
            }
        return Math.max(...total)   
    };

maximumWealth([[1,2,3], [3,4,5]])


// 10 Given a string s and a string t, check if s is subsequence of t.
// "ace" is a subsequesnce of "abcde" while "aec" is not .
const isSubsequence = (s , t) => {
    if(s.length === 0) return true
    if(s.length > t.length) return false
    let index = t.indexOf(s[0])
    if(index === -1) return false

    return isSubsequence(s.slice(1), t.slice(index + 1))
}

isSubsequence('ace', 'abcde')
// isSubsequence('aceee', 'abcde')


//11. Given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).


const maximum69Number  = (num) =>  {
    let str = num.toString()

        for(let i = 0; i < str.length; i++){
            if(str[i] === '6'){
            return parseInt(str.replace(str[i], '9'))
        }
            
        
        
    }
    return parseInt(str) 

};

console.log(maximum69Number(6699))

//11. Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const  runningSum = function(nums) {
        let  totalValue = 0
        let sumNums  = nums.map(elm => {
        return  totalValue += elm 

        }) 


    return sumNums
    
}

//12.Goal Parser Interpretation 
//You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.


const interpret = function(command) {
    //define a variable that holds result
    //iterate over string
    //check if current value and next value matched with "()" , if Yes, replace with o
    //otherwise ,add rest of string to the result
    //returns that result
    
    let result = ''
    for(let i = 0; i < command.length; i++){
        let firstChar  = command.charAt(i)
        let nextChar   = command.charAt(i + 1)
        
        if(firstChar ===  "(" && nextChar  === ")" ){
            result += 'o'
            i += 1
        }else{
            if(firstChar != "(" && firstChar != ")" ){
            result += firstChar
            }
        }
        
        
    }
    
    return result
    

};

interpret('G()()(al)')




//13. Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
const shuffle = function(nums, n) {
    let newNums = []
    for(let i = 0; i < n; i++ ){
        newNums.push(nums[i])
        newNums.push(nums[i + n])
    }
    return newNums
    
    
    
};
shuffle([1,2,3,4,4,3,2,1],4)


//14.Missing Number
//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const  missingNumber = function(nums) {
    let numsLen = nums.length
    let totalNum = 0
    
    for(let i = 0; i <= numsLen; i++){
        totalNum += i
    }

    for(let j = 0; j < numsLen; j++){
        totalNum -= nums[j]
    }
    
    return totalNum
    
};


missingNumber([3,0,1])


//15. Add Digits 
//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
const  addDigits = function(num) {
    while(num.toString().length >= 2){
        
    let total = 0
    for( let digit of num.toString()){
    total += Number(digit)
    }
        
        num = total
    }
    
    return num

};

addDigits(38)


//16. How Many Numbers Are Smaller Than the Current Number
//Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].Return the answer in an array.

const smallerNumbersThanCurrent = function(nums) {
    let newArr = []
    let count   = 0; 
for(let i = 0 ; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] > nums[j]){

            count += 1
                
            }else{
            continue
            }
            
        }
    if(count > 0){
    newArr.push(count)
    }else{
    newArr.push(0)
    }
    
    count = 0 
    
    
}

return newArr

};


smallerNumbersThanCurrent(8,4,2,5)

//17.Decompress Run-Length Encoded List 
//Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
//Return the decompressed list.

const decompressedRLElist  = function(nums){
    let newArr = []
    let freq  = 0
    let val = 0

    for(let i = 0;  i < nums.length; i+=2){
        freq = nums[i]
        val = nums[i + 1]
        let resultArr = new Array(freq).fill(val)
        newArr = newArr.concat(resultArr)

    }

    return newArr


}



decompressedRLElist([1,2,3,4])

//18. Create Target Array in the Given Order
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

//Initially target array is empty.
//From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
//Repeat the previous step until there are no elements to read in nums and index.
//Return the target array.

//It is guaranteed that the insertion operations will be valid.


const createTargetArray = function(nums, index) {
    let targetArr  = []
    
    for(let i = 0; i < index.length; i++){
        targetArr.splice(index[i] , 0, nums[i])
    }

    return targetArr  
}

createTargetArray([0,1,2,3,4], [0,1,2,2,1])


//19. Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

const xorOperation = function(n, start) {
    let result = 0 
    for(let i = 0; i < n; i++){
        result ^= start + 2 * i
    }
    return result
};


xorOperation(4,2)

// 20.Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
//A subarray is a contiguous subsequence of the array.//Return the sum of all odd-length subarrays of arr.

const sumOddLengthSubarrays = function(arr) {
    let subArrLen = 1
    let result = 0
    
    while(subArrLen <= arr.length){
        
        for(let i = 0 ; i < arr.length; i++){
            if(arr.length - subArrLen  >= i){
                result += arr.slice(i, i + subArrLen).reduce((acc, cur) => (acc + cur), 0)
                
            }
        }
        subArrLen += 2
        
    }
    
    return result
    
};

sumOddLengthSubarrays([1,4,2,5,3])


//21. You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

const climbStairs = function(n, memo = {1:1, 2:2}) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
 };


 climbStairs(30)


 //22. Find Numbers with Even Number of Digits 
 //Given an Array Numbs of integers, return how many of them contain an even number of digits

const  findNumbers = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 === 0){
            count++
        }
    }
    return count
};

findNumbers([12,345,2,6,3456])



//23. Self Dividing Numbers
//Given a lower and upper number bound , output a list of every possible self dividing number , including the bounds if possible 

const selfDividingNumbers = function(left, right) {
    let arr = [] 
    for(let i = left; i <= right; i++){
    let isDivide = true
    let  digit = i.toString().split('').map(num => num)
    
        for(let j = 0 ; j < digit.length; j++){
            
            if(i % parseInt(digit[j]) !== 0){
                isDivide  = false
            }
        }
    
        if(isDivide){
            arr.push(i)
        }
    }
    return arr
    
};

selfDividingNumbers(1,22)

//24. Maximum Product of Two Elements in an Array 
// given the array of intergers nums , You will choose two different indice i and j of that array . Return the maximum value of (nums[i] - 1 * nums[j] - 1

const maxProduct = function(nums) {
        let max1 = Math.max(...nums)
        nums.splice(nums.indexOf(max1) , 1)
        let max2 = Math.max(...nums)
        return (max1 - 1) * (max2 - 1)

        
};


maxProduct([3,4,5,2])


//Height Checker
// Students are asked to stand in non-decreasing order of heights for an annual photo.Return the minimum number of  students that must move in order for all students to be standing in non-decreasing order of height . Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats . 

// Input: heights = [1,1,4,2,1,3]
// Output: 3

const heightChecker = function(heights){
    let newHeights = heights.slice(0, heights.length).sort((a,b) => a - b)
    let count = 0

    for(let i = 0; i < heights.length; i++){
        if(heights[i] != newHeights[i]){
            count++
        }else{
            continue
        }
    }
    return count 
    
}


//Capitalize the first letter of words 

function capitalizewords(array){
    let newArr = []
    for(let str of array){
        newArr.push(str[0].toUpperCase() + str.slice(1) )

    }
    return newArr
}

console.log(capitalizewords(['hello', 'bye']))