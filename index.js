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

//  SUPPER REDUCED STRING
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

// SEARCH ALGORITHMS
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



//2. palindrome 
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




//// VALID PARENTHESIS
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





