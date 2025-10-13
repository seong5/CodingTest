function solution(n) {
    const arr = n.toString().split("").map(Number)
    
    return arr.reduce((a,b)=> a + b ,0)
}