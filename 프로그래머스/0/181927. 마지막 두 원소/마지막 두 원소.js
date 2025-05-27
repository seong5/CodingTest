function solution(num_list) {
    var answer = [];
    
    const leng = num_list.length;
    const lastnum = num_list[leng - 1];
    const lastmultwo = num_list[leng - 2];
    
    if (lastnum > lastmultwo){
        answer = [...num_list, lastnum - lastmultwo]
    } else {
        answer = [...num_list, lastnum * 2]
    }
    return answer;
}