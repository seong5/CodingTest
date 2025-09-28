function solution(nums) {
  // 1. 서로 다른 종류 개수 구하기
  const uniqueKinds = new Set(nums).size; 
  // new Set(nums) : 배열에서 중복을 제거한 집합 생성
  // .size         : 집합의 원소 개수 (즉, 중복 없는 폰켓몬 종류 수)

  // 2. 뽑아야 하는 폰켓몬 수
  const pick = nums.length / 2;           
  // 전체 폰켓몬 수의 절반만 고를 수 있음

  // 3. 정답 리턴
  return Math.min(uniqueKinds, pick);
  // 실제로 선택할 수 있는 최대 종류 수 = 
  // (서로 다른 종류 수 vs 뽑을 수 있는 수) 중 더 작은 값
}