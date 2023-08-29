# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
N, K = map(int, input().split())
# print(N, K)

land_matrix = []
boom_score = [[0] * N for _ in range(N)]
for _ in range(N):
	land_matrix.append(list(input().split()))

# print(land_matrix)
# print(boom_score)

dr = [-1, 0, 0, 0, 1]
dc = [0, -1, 1, 0, 0]

# max 값 저장
max = 0

# 폭탄 하나씩 떨구기
for _ in range(K):
	r, c = map(int, input().split())
	# land_matrix 확인하고, boom_score 조절
	# 상하좌우 확인
	for i in range(5):
		# print('폭탄:', r-1, c-1, '영향:', r+dr[i]-1, c+dc[i]-1)
		# 폭탄의 영향이 영역 넘을 경우
		if r+dr[i]-1 == -1 or r+dr[i]-1 == N or c+dc[i]-1 == -1 or c+dc[i]-1 == N: continue
		
		# 땅이 # 인 경우 - 유지
		if land_matrix[r+dr[i]-1][c+dc[i]-1] == '#': continue
		
		# 땅이 0 인 경우 - 폭탄값 + 1
		if land_matrix[r+dr[i]-1][c+dc[i]-1] == '0':
			boom_score[r+dr[i]-1][c+dc[i]-1] += 1
			
		# 땅이 @ 인 경우 - 폭탄값 + 2
		if land_matrix[r+dr[i]-1][c+dc[i]-1] == '@':
			boom_score[r+dr[i]-1][c+dc[i]-1] += 2
			
			
		# max 값 업데이트
		if max < boom_score[r+dr[i]-1][c+dc[i]-1]:
			max = boom_score[r+dr[i]-1][c+dc[i]-1]
			
		# print(boom_score)
print(max)
# 해당 문제는 폭탄 구현하기 문제에서 조건을 더 추가한 완전 탐색 문제입니다. 요구 사항을 정확히 구현해야 합니다.
