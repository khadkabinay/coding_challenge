//QUETIONS FROM LEETCODE AND HACKERRANK

// INSERTION SORT PART2
function insertionSort2(arr) {
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        let j = i - 1
        while(arr[j] > temp){
            arr[j + 1] = arr[j]
            j--
        }
        //increments j because the value we need here is j + 1
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




//2.same tree
// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value


//define a function that takes two parameters 
//check if root node is same 
//check if each of their nodes are same . if either of them is null or no match ,return false 
//run recursive function until one of their node either gets null or no match 
//return true if first tree's left and right nodes are exactly same as second 


