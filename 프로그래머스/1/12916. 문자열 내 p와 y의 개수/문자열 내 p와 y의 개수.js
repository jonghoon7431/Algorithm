function solution(s){
  var result = true;
    
  s = s.toUpperCase();
    
  let num = 0;
  for(var i = 0; i < s.length; i++){
    if(s[i] === 'P') num++; 
    if(s[i] === 'Y') num--; 
  } 
  result = (num === 0); 

  return result;
}