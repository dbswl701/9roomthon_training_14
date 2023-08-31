N, M, K = map(int, input().split())

# 행렬 만들기 ->  행렬보다는 인접리스트가 더 좋겠다.
adj_list = [[] for _ in range(N+1)]

for _ in range(M):
	start, end = map(int, input().split())
	adj_list[start].append(end)
	adj_list[end].append(start)

# 각 요소 정렬
for i in range(N+1):
	adj_list[i].sort()

# visited -> 경로 저장
visited = []
stack = [K]
# 탐색 -> k 부터 시작해 연결된 것 중 가장 작은걸로 이동, 이동하면 visited 에 등록
	
	
# for 문으로 돌면서 해당 요소의 리스트에서 작은 수 부터 접근하는데, 만약 방문했으면 표시
while stack:

	# 시작할 노드 선택
	cur = stack.pop()
	# 시작할 노드 기준으로 다음 노드 탐색
	# adj_list[cur] 를 보면서, 작은 순서대로 확인하는데, 방문했으면(visited에 있으면) 건너뛴다.
	# 만약 갈 수 있는 곳이 없다면 끝
	
	# 방문하지 않았다면 방문 체크 표시
	if cur not in visited:
		visited.append(cur)
		
	# 현재 노드와 연결된 곳이 없다면 종료(끝)
	if adj_list[cur] == []: break

	# 현재 노드에서 연결될 수 있는 노드 탐색
	for i in adj_list[cur]:
		# 현재 노드에 연결된 노드 중 i 노드가 이미 방문 했다면 continue
		if i in visited:
			continue
		
		# 방문 하지 않았다면, 다음에 볼 stack에 넣고 다시 while 문 돈다
		else:
			stack.append(i);
			break
			
print(len(visited), visited[len(visited)-1])
