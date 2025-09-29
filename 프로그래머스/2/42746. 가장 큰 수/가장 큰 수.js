function solution(numbers) {
   const answer = numbers.map(String)
   answer.sort((a,b) => (b+a).localeCompare(a+b))
    if( answer[0] === "0") return "0"
   return answer.join("")
}