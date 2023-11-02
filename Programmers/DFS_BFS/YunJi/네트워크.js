function solution(n, computers) {
  let network = 0;
  const visited = Array(n).fill(0); // 해당 노드 방문 여부 체크

  const DFS = (node) => {
      // 해당 노드 방문 체크
      visited[node] = 1;
      
      // 해당 노드와 연결된 모든 노드들 확인
      for(let next = 0; next<n; next++) {
          if (computers[node][next] && !visited[next]) {
              DFS(next);
          }
      }
  }
  for(let node = 0; node<visited.length; node++) {
      if (!visited[node]) {
          network++;
          DFS(node);
      }
  }
  return network;
}