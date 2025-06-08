function solution(n, k) {
    const drink = Math.floor(n/10);
    const totalfoods = n * 12000 + (k - drink) * 2000;
    return totalfoods;
}