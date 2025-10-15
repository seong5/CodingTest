function solution(n) {
  const m = n - 1;
  for (let i = 2; i * i <= m; i++) {
    if (m % i === 0) return i; 
  }
  return m; 
}