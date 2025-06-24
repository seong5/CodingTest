function solution(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum/numbers.length;
    return avg;
}