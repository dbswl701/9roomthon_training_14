from collections import deque
N, K = map(int, input().split())
# print(N, K)

M = []
count = [0 * K]
# print(M)
# print(count)

dr = [0, 1, -1, 0]
dc = [1, 0, 0, -1]

# 건물 유형 최댓값
max_build = 0

# 입력 받기
for _ in range(N):
	M.append(list(map(int, input().split())))

# print(max_build)
dic = {}
# 찾은 max_build 값으로, 해당 길이만큼 요소 만들기 -> 아 이거 파이썬이라 dict 쓰면 되는데 바보다
# print(M)
def BFS(r, c, kind):
	global cnt
	# cnt = 0
	queue = deque([(r, c)])  # 시작 위치를 큐에 넣어줌
	# print('kind:', kind, 'r:',r,'c:',c)
	M[r][c] = 0
	while queue:
		cnt += 1
		# print(M)
		r, c = queue.popleft()  # 큐에서 좌표를 꺼냄
		# print('pop 한 r, c:', r, c)

		for i in range(4):
			nr = r + dr[i]
			nc = c + dc[i]
			# print('nr:', nr, 'nc:', nc)
			if nr < 0 or nr >= N or nc < 0 or nc >= N or M[nr][nc] != kind or M[nr][nc] == 0:
					continue
			# if M[nr][nc] == 0:
			# 		continue
			# print('queue에 추가, nr, nc:', nr, nc)
			queue.append((nr, nc))  # 큐에 새로운 좌표 추가
			M[nr][nc] = 0
	return cnt

# def DFS(r, c, kind):
# 	global cnt
	
# 	M[r][c] = 0
# 	cnt += 1
# 	# print(M)
# 	# 새 r, c 생성
# 	for i in range(4):
# 		nr, nc = r+dr[i], c+dc[i]
# 		# print('nr:', nr, 'nc:', nc)
# 		if 0 > nr or nr == N or 0 > nc or nc == N or M[nr][nc] != kind: continue
# 		DFS(nr, nc, kind)
# 	# print(kind,'의 탐색 종료')
# 	# print('======================')
# 	return cnt

for i in range(N):
	for j in range(N):
		if M[i][j] != 0:
			# 해당 건물 유형에 해당하는 dict ++
			# print('i:', i, 'j:', j, 'kind:', M[i][j])
			cnt = 0
			kind = M[i][j]
			BFS(i, j, kind)
			# print('탐색은 종료, 이제 cnt와 K비교. cnt:', cnt, 'K:', K)
			if cnt < K: continue
			if kind not in dic:
				# print('kind:', kind, '-> dic = 1')
				dic[kind] = 1
			else:
				# print('kind:', kind, '-> dic + 1')
				dic[kind] += 1
# print(dic)

# 이제, dic의 value 중 제일 큰 것의 key 찾기
# max_key = max(dic, key=dic.get)
max_key = -1
max_value = -1  # 음의 무한대로 초기화

for key, value in sorted(dic.items()):
	if value > max_value:
		max_key = key
		max_value = value
	if value == max_value and key > max_key:
		max_key = key
print(max_key)

# 23번 런타임 에러 -> 재귀 dfs로 풀어서 그럼. 비재귀 dfs나 bfs 사용해서 해결 권장
# 7, 18 fail -> 조건 중 만약 그러한 건물 유형이 여러개라면 더 큰 건물 유형 선택 확인