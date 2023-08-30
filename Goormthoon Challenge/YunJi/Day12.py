from collections import deque

N = int(input())
matrix = []
for _ in range(N):
	matrix.append(list(map(int, input().split())))
# print(matrix);


dr = [-1, 0, 0, 1]
dc = [0, -1, 1, 0]

# dfs 비교
def BFS(r, c):
	queue = deque([(r, c)])  # 시작 위치를 큐에 넣어줌
	cnt = 0
	
	while queue:
		r, c = queue.popleft()  # 큐에서 좌표를 꺼냄
		matrix[r][c] = 0  # 방문한 곳은 0으로 처리

		for i in range(4):
			nr = r + dr[i]
			nc = c + dc[i]

			if nr < 0 or nr >= N or nc < 0 or nc >= N:
					continue
			if matrix[nr][nc] == 0:
					continue
			queue.append((nr, nc))  # 큐에 새로운 좌표 추가
			matrix[nr][nc] = 0
	return cnt

	
cnt = 0
for i in range(N):
	for j in range(N):
		if matrix[i][j] != 0:
			cnt += 1
			BFS(i, j)
print(cnt)
# 해당 문제는 행렬에서의 효율적 탐색 문제입니다. 탐색을 하는 기본 틀은 같지만, 항상 탐색 조건을 잘 설정해야 합니다.

