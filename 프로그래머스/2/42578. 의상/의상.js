function solution(clothes) {
  const counts = new Map();
  for (const [, type] of clothes) {
    counts.set(type, (counts.get(type) || 0) + 1);
  }
  let answer = 1;
  for (const cnt of counts.values()) {
    answer *= (cnt + 1);
  }
  return answer - 1;
}