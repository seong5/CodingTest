function solution(clothes) {
  const countByType = {};

  for (const [name, type] of clothes) {
    countByType[type] = (countByType[type] || 0) + 1;
  }

  let result = 1;
  for (const count of Object.values(countByType)) {
    result *= (count + 1);
  }

  return result - 1;
}