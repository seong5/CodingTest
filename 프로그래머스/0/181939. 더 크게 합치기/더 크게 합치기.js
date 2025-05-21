function solution(a, b) {
    var answer = 0;
    
    const abMul = Number(String(a) + String(b));
    const baMul = Number(String(b) + String(a));
    
    answer = abMul >= baMul ? abMul : baMul;
        
    return answer;
}