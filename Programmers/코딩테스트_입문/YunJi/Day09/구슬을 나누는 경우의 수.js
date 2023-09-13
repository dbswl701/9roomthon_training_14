function solution(balls, share) {
  let answer = 1;
  while (share) {
      //share가 0이 되기 전까지
      answer *= balls / share;
      balls--;
      share--;
  }
  return Math.round(answer);
  // return fact(balls) / (fact(balls-share) * fact(share));
}

// 재귀함수 비추, 메모이제이션 써봐라
// 저는 재귀함수는 솔직히 추천하는 방식은 아니라고 생각합니다. 재귀를 여러번 반복할 수록 성능이 떨어지니는데다 반복문을 통해서 같은 기능을 구현할 수 있으니까요. 게다가 이번같은경우는 재귀함수가 3개나 있다 보니까 그 정도가 심하죠. 반복문으로 바꿔서 구현해보세요.
// https://school.programmers.co.kr/questions/42602