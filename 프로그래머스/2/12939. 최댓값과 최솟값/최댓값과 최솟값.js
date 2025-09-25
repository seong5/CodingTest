function solution(s) {
    const splited = s.split(" ")
    const sorted = splited.sort((a,b) => a - b)
    const min = sorted[0]
    const max = sorted[sorted.length-1]
    return `${min} ${max}`
}