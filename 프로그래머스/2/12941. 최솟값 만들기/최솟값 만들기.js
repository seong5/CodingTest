function solution(A,B){
    const a = [...A].sort((i,j) => i - j)
    const b = [...B].sort((i,j) => j - i)
    return a.reduce((acc,cur,m) => acc + cur * b[m],0)
    
}