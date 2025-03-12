function solution(my_string, letter) {
    let arr = my_string.split("");
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== letter){
            newArr.push(arr[i])
        }
    }
    return newArr.join("");
}