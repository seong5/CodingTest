function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    
    for(let num of num_list) {
        if (num % 2 === 0) {
            num1++;
        } else {
            num2++
        }
    }
    return [num1, num2];
}