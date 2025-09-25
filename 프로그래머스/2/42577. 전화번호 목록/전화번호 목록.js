function solution(phone_book) {
  const set = new Set(phone_book);

  for (const num of phone_book) {
    for (let cut = 1; cut < num.length; cut++) {
      if (set.has(num.slice(0, cut))) {
        return false; 
      }
    }
  }
  return true;
}