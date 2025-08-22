function solution(s){
    const str = s.toLowerCase()
    const p = [...str].filter(ch => ch === "p").length
    const y = [...str].filter(ch => ch === "y").length
    return p === y
}