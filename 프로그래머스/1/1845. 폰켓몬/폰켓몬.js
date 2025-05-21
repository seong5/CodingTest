function solution(nums) {
    var answer = 0;
    const getPKM = nums.length / 2;
    const deleteDupl = new Set(nums);
    answer = Math.min(deleteDupl.size, getPKM)
    return answer;
}