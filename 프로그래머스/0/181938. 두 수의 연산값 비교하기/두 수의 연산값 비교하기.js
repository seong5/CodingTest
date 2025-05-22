function solution(a, b) {
    var answer = 0;
    const addab = Number(String(a)+String(b));
    const twoab = Number(String(a) * String(b) * String(2));
    answer = addab >= twoab ? addab : twoab
    return answer;
}