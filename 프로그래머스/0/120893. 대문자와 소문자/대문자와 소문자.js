function solution(my_string) {
    var answer = [];
    let arr = my_string.split("")

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toLowerCase()){
            answer.push(arr[i].toUpperCase())
        }else{
            answer.push(arr[i].toLowerCase())
        }
    }
    
    return answer.join("");
}