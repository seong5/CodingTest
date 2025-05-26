function solution(num_list) {
    var answer = 0;
    let mul = 1;
    let sum = 0;
    
    for (let num of num_list) {
        mul *=num;
        sum +=num;
    }
    if (mul < sum ** 2) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}