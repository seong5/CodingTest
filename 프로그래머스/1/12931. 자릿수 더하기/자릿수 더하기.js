function solution(n) {
    const arr = n.toString().split("").map(Number)
    const answer = arr.reduce((a,b) => a + b, 0) 
    return answer
}