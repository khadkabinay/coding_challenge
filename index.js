// INSERTION SORT PART2

function insertionSort2(arr) {
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        let j = i - 1
        while(arr[j] > temp){
            arr[j + 1] = arr[j]
            j--
        }
        //increements j because the value we need here is j + 1
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
// two kangoroos on a number in the positive direction 
// start line or jump distance might be different
// kangoroos1 has a start line x1 = 1 , jump distance v1= 2 and kangoroos2 has x2 = 2 and jump distance  v1 = 1 ,print "Yes"
// if they never meet at the same location at the same , print "No"

function kangaroo(x1, v1, x2, v2) {

   
}





kangaroo(3, 2 ,1, 4)




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


// 



