# 함수 생성 -> 2번 반복해야 하기 때문
def game(r, c, N, matrix_game):
	#개인의 matrix 필요(방문 여부)
	matrix = [[0]*N for _ in range(N)]
	
	# 방문한 칸의 갯수
	visited = 1

	# 게임 종료 여부 (while문 안에 for문 안에 if안에 break 하니까 for문만 나간다)
	isEnd = False
	matrix[r][c] = 1

	while not isEnd:
		# count, command 분리
		count = int(matrix_game[r][c][0:len(matrix_game[r][c])-1])
		command = matrix_game[r][c][-1]
		# count, command = int(matrix_game[r][c][:1]), matrix_game[r][c][1:]
		# command 방향으로 count 만큼 이동하면서 _matrix 1로 바꾸기
		for _ in range(count):

			# 방향 확인
			if command == 'U':
				r -= 1
			elif command == 'D':
				r += 1
			elif command == 'L':
				c -=1
			elif command == 'R':
				c += 1

			if r == -1:
				r = N-1
			elif r == N:
				r = 0
			if c == -1:
				c = N-1
			elif c == N:
				c = 0

			# 이미 방문했는지 확인
			if matrix[r][c] == 1:
				isEnd = True
				break

			matrix[r][c] = 1
			visited	+= 1
			

		count, command = int(matrix_game[r][c][:1]), matrix_game[r][c][1:]
	return visited

	



N = int(input())
goorm_r, goorm_c = map(int, input().split())
goorm_r, goorm_c = goorm_r-1, goorm_c-1
player_r, player_c = map(int, input().split())
player_r, player_c = player_r-1, player_c-1

# matrix 입력받기
matrix_game = []
for _ in range(N):
	matrix_game.append(input().split())
	
goorm = game(goorm_r, goorm_c, N, matrix_game)
player = game(player_r, player_c, N, matrix_game)

if goorm > player:
	print('goorm', goorm)
else:
	print('player', player)
