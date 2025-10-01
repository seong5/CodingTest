function solution(n) {
    const arr = n.toString().split("").sort((a,b) => b- a).join("")
    return Number(arr)
}