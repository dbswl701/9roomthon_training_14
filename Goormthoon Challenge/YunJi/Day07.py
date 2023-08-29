# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
		# 0.  1.  2.  3  4. 5. 6. 7
dr = [-1, -1, -1, 0, 0, 1, 1, 1]
dc = [-1, 0, 1, -1, 1, -1, 0, 1]

# 해당 인덱스 주변 8칸을 확인하는 함수
def check(i, j):
	# print('check print, i:', i, 'j:', j)
	# print(matrix2)
	if matrix2[i][j] == '*':
		return '*';
	# 일단 범위 벗어나는거 확인
	# 아... 모든 값을 비교하면 안된다.... 걍 for 문 돌리자...
	sum = 0
	for k in range(8):
		if 0 <= i+dr[k] and i+dr[k] < N and 0 <= j+dc[k] and j+dc[k] < N and matrix2[i+dr[k]][j+dc[k]] != '-':
			if matrix2[i+dr[k]][j+dc[k]] == '*':
				# print('i:', i, ' j:', j, ' k:', k, '[', i+dr[k], '][', j+dc[k], ']', matrix2[i+dr[k]][j+dc[k]])
				sum += 1
	# print('sum: ', sum)
	# if i-1 < 0 or i+1 == N or j-1 < 0 or j+1 == N:
	# 	print(i, j, '범위 넘음')
	# 	return 0;
	# print(matrix2[i-1][j-1], matrix2[i-1][j], matrix2[i-1][j+1], matrix2[i][j-1], matrix2[i][j+1], matrix2[i+1][j-1], matrix2[i+1][j], matrix2[i+1][j+1])
	# sum = matrix2[i-1][j-1] + matrix2[i-1][j] + matrix2[i-1][j+1] + matrix2[i][j-1] + matrix2[i][j+1] + matrix2[i+1][j-1] + matrix2[i+1][j] + matrix2[i+1][j+1]
	# 주변 *의 갯수 리턴
	# print('sum:', sum)
	if sum == 0:
		return '-'
	else:
		return sum
	
	
N, K = map(int, input().split())
# print(N, K)

matrix = [[0] * (N + 1) for _ in range(N+1)] # 인접행렬 기본틀, 0번 인덱스는 사용x
# print(matrix)
matrix2 = [] # 2차원 배열
for i in range(N):
	matrix2.append(list(map(int, input().split())))

# print(matrix2)

# matrixd에서 1은 *으로 값 치환
for i in range(N):
	for j in range(N):
		if matrix2[i][j] == 1:
			matrix2[i][j] = '*'
# print(matrix2)


# 이제, 주변을 보고 0을 숫자로 변환

# temp = ['1', '1', '0', '0']
# temp2 = temp.replace('1', '2')
# print(temp2)



# 이제, 0인 배열에 주변 보고 값 넣기
for i in range(N):
	for j in range(N):
		# sum = 0
		# if matrix2[i][j] == 1:
		# 	matrix2[i][j] = '*'
		# 	continue
		# 주변 탐색
		
		matrix2[i][j] = check(i, j)
	# print('-----')
# print(matrix2)

# 이제, k에 해당하는 깃발 갯수 찾기
result = 0
for i in range(N):
	for j in range(N):
		if matrix2[i][j] == K:
			result += 1
print(result)
# 해당 문제는 행렬에서 문제의 요구 사항을 만족하는 값을 찾는 완전 탐색 문제입니다. 행렬에서의 이동 개념이 필요합니다.
# 구름 레벨 변형 문제입니다.
# - 행렬
# - 완전 탐색 문제
# - 행렬에서의 이동 개념 필요
# 0 0 0 1
# 0 0 1 0
# 0 0 1 0
# 0 1 1 1

# ---

# - 1 2 *
# - 2 * 3
# 1 4 * 4
# 1 * * *

# -> 여기서 값이 2인 깃발의 개수 출력
# => 시간이 좀 오래걸린다. 개선 필요
