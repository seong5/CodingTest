function solution(x, n) {
    const stack = []
    for(let i = 1; i <= n; i++) {
        stack.push(x * i)
    }
    return stack
}