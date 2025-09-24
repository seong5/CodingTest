function solution(arr) {
   const len = arr.length
   const min = [...arr].sort((a,b) => a- b)[0]
   const idx = arr.indexOf(min)
    if (len === 1) return [-1]
    
    const result = arr.slice()
    result.splice(idx,1)
    return result
    
} 
