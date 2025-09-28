function solution(array, commands) {
    const result = []
    for(const [i,j,k] of commands) {
        const sliced = array.slice(i -1, j)
        sliced.sort((a,b) => a -b)
        result.push(sliced[k -1])
    }
    return result
}