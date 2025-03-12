function solution(s1, s2) {
    var answer = 0;
    let newString = s1.join();
    s2.forEach((item) => {
        s1.includes(item) && answer ++ 
    })
    return answer;
}