function solution(x) {
    var answer = true;
    
    let num = x.toString().split("").reduce((acc,cur)=>acc + cur * 1,0);
    if(x % num == 0 ){
        return true;
    }else{
        return false;
    }

}