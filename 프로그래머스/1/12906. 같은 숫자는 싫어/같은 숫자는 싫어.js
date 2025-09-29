function solution(arr){
    const stack = []
    
    for(const char of arr) {
        if(stack.length === 0 || stack[stack.length -1] !== char) {
            stack.push(char)
        } 
    }
    return stack
}