function solution(n) {
  let count = 0;
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      const e = n / d;
      if (d % 2 === 1) count++;       
      if (e !== d && e % 2 === 1) count++; 
    }
  }
  return count;
}