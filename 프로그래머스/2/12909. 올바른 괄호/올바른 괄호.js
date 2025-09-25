function solution(s) {
  let open = 0;

  for (const ch of s) {
    if (ch === '(') open++;
    else open--;

    if (open < 0) return false; 
  }

  return open === 0;
}