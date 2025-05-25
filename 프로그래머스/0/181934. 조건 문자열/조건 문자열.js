function solution(ineq, eq, n, m) {
    var answer = 0;
        const condition = ineq + eq;

    switch (condition) {
        case ">=":
            answer = n >= m ? 1 : 0;
            break;
        case "<=":
            answer = n <= m ? 1 : 0;
            break;
        case ">!":
            answer = n > m ? 1 : 0;
            break;
        case "<!":
            answer = n < m ? 1 : 0;
            break;
    }
    return answer;
}