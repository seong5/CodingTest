function solution(A,B){
    A.sort((i,j) => i - j)
    B.sort((i,j) => j - i)
    return A.reduce((acc,cur,m) => acc + cur * B[m],0)
    
}