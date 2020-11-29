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
// grading
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





