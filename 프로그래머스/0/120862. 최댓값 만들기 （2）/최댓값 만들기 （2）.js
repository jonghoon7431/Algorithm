function solution(numbers) {
    const sortedNumbers = numbers.sort((a,b) => a - b);
    let answer = -99999999999999999;
    
    for(let i = 0; i < numbers.length -1; i++){
        let num = sortedNumbers[i] * sortedNumbers[i + 1];
        let reverse = sortedNumbers[sortedNumbers.length] * sortedNumbers[sortedNumbers.length -1]
        
        if(num > answer){
            answer = num
        }
        if(num > reverse){
            answer = num
        }

    }
    return answer;
}