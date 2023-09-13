function solution(numbers, k) {
  let start = 1;

  while(--k) {
      start += 2;
      if (start > numbers.length) start -= numbers.length
  }

  return start;
}