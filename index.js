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

insertionSort2([1,3,10, 35, 56, 78])