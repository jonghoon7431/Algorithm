function solution(n) {
    var answer = 0;
    return n.toString().split("")
    .map((item)=> Number(item))
    .reduce((acc,cur)=> acc + cur , 0)
}