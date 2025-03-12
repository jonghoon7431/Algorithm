function solution(my_string) {
    const arr = ["a","e","i","o","u"];
    let newArr = [];
    for(let i = 0; i < my_string.length; i++){
        if(!arr.includes(my_string[i])){
           newArr.push(my_string[i])
           }        
    }
    return newArr.join("");
}