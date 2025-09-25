function solution(s){
    let count = 0;
    for(let left of s) {
        if( left === "(") count++
        else count--;
        
        if (count < 0) return false
    }
    return count === 0 
}