function solution(n) {
    const findOnes = n.toString(2).split("1").length -1
    
    let nextNum = n + 1;
    while (true) {
        const ones = nextNum.toString(2).split("1").length - 1;
        if (ones === findOnes) return nextNum;
        nextNum++
    }
}