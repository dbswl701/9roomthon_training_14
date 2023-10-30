function isValid(x, y, board) {
  const rows = board[0];
  const cols = board[1];

  // x와 y가 맵 크기를 벗어나지 않고, 맵의 중심을 기준으로 범위 내에 있는지 확인
  if (Math.abs(x) <= (rows - 1) / 2 && Math.abs(y) <= (cols - 1) / 2) {
      return true;
  }

  return false;
}

function solution(keyinput, board) {
  var answer = [0, 0]; // 초기 좌표를 [0, 0]으로 설정

  for (let i = 0; i < keyinput.length; i++) {
      // 새로운 좌표를 일단 계산
      let newX = answer[0];
      let newY = answer[1];

      if (keyinput[i] === "left") {
          newX -= 1; // 왼쪽으로 이동
      } else if (keyinput[i] === "right") {
          newX += 1; // 오른쪽으로 이동
      } else if (keyinput[i] === "up") {
          newY += 1; // 위로 이동
      } else if (keyinput[i] === "down") {
          newY -= 1; // 아래로 이동
      }

      // 이동 가능한 범위를 벗어나지 않도록 확인
      if (isValid(newX, newY, board)) {
          answer = [newX, newY];
      }
  }

  return answer;
}
