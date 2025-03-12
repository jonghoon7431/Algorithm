function solution(array) {
    const sortedArr = array.sort((a,b) => a - b);
    let index = Math.floor(sortedArr.length / 2);
    
    return sortedArr[index]
}