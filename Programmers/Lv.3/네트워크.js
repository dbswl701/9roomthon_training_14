function solution(n, computers) {
    let visited = new Array(n).fill(false); // 방문한 노드를 체크하기 위한 배열
    let networkCount = 0;

    function dfs(index) {
        visited[index] = true; // 해당 노드 방문 처리

        for (let next = 0; next < n; next++) {
            // 해당 노드와 연결된 다른 노드를 탐색
            if (!visited[next] && computers[index][next] === 1) {
                dfs(next); // 연결된 노드로 DFS 수행
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 방문하지 않은 노드가 있다면
            dfs(i); // DFS 수행하여 네트워크 탐색
            networkCount++; // 네트워크 개수 증가
        }
    }

    return networkCount; // 총 네트워크 개수 반환
}