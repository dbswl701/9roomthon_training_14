function solution(arr) {
    const firstIndex = arr.indexOf(2);
    const lastIndex = arr.lastIndexOf(2);
    
    if (firstIndex === -1) {
      return [-1];
    }
    
    return arr.slice(firstIndex, lastIndex + 1);
  }

  //생각하기
//index[i] 부터 2가 시작하는 곳을 확인하고, index[i]에 끝나는지 확인하면 된다.
//먼저 indexOf로 처음 2가 시작한 인덱스가 어딘지 알고, lastindexof로 마지막 2가 시작된게 어딘지 알면 됨.
//그리고서 그 중간 index[i]부분을 전부 푸쉬해주면 된다.

//스도코드
//let a = arr.indexOf(2) let b = arr.lastindexOf(2) 범위를 잡아준 후에,
//a이상이고 b이하인 인덱스만 answer배열에 push해주면 된다. 고 하면 되는데 <= 이부분이 만들기가 어렵네..
//그리고 arr 배열에 index에 2가 없다면, -1을 return해라.

//slice 함수를 이용해서, firstIndex부터 lastIndex+1 까지 쪼개 주면 된다.