function solution(s) {
  let transforms = 0;
  let removedZeros = 0;

  while (s !== "1") {
    let ones = 0;
    for (const ch of s) if (ch === '1') ones++;

    const zerosThisRound = s.length - ones;
    removedZeros += zerosThisRound;

    s = ones.toString(2);
    transforms++;
  }

  return [transforms, removedZeros];
}