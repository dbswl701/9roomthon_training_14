function solution(sides) {
  var answer = 0;

  if (sides[0] >= sides[1] + sides[2]) {
    answer = 2;
  }
  else if (sides[1] >= sides[0] + sides[2]) {
    answer = 2;
  }
  else if (sides[2] >= sides[1] + sides[0]) {
    answer = 2;
  }
  else {
    answer = 1;
  }

  return answer;
}