function solution(s){
    let count = 0;
    for(let left of s) {
        count += left === "(" ? 1 : -1 
        if (count < 0) return false
    }
    return count === 0 
}