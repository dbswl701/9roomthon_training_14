N = int(input())

# 문자열을 분리한 모든 경우의 수를 조합으로 탐색
# 조건에 따라 점수를 측정하는 완전 탐색 문제

# 문자열을 조합으로 나누기 -> 중복 x(set사용)
# 문자열을 3개의 조합으로 나누는 방법을 찾아야 한다!
# 슬라이싱으로 나누는건 어떨까?

S = input()
# print(N)
# print(S)
# print(S[:1], S[1:2], S[2:])
str_set = set()
# str_set.add(S[:1])
# str_set.add(S[1:2])
# str_set.add(S[2:])
# print(str_set)

# 문자열의 길이도 중요할 것 같은데, 3번 쪼갠것의 제일 끝-1 확인을 잘 해야할 듯

# 2중 포문을 사용하여 문자열을 총 3가지로 나누는데, 그 길이를 조정하도록 한다
str_len = 0

# 중단점 저장 변수가 필요하진 않을까?
stop1 = 1
stop2 = 2
# for _ in range(3): # 3번 돈다
	# 문자열을 어떻게 쪼갤까?
	# 일단 처음 ~ 하나하나씩?
	
# 아니다. 맨 바깥에 길이-2만큼 돌고 그 다음에 3번 돌아야 한다.
# for _ in range(N-2):
	# 그다음 3개로 쪼개야 한다.
# {a,b,cd}, {a, bc, d}, {ab, c, d}
# stop1 : 1    / 2  
# stop2 : 2 3  / 3  
# {a, b, cd}, {a, bc, d} / {ab, c, d}
# {a, b, cde}, {a, bc, de}, {a, bcd, e}, {ab, cd, e}, {ab, c, de}, {abc, d, e}
# print(S[:stop1], S[stop1:stop2], S[stop2:]) # -> 이런 방식으로 해야할 듯
# stop1 : 1     / 2   / 3
# stop2 : 2 3 4 / 3 4 / 4
# {a, b, cde}, {a, bc, de}, {a, bcd, e} / {ab, c, de}, {ab, cd, e} / {abc, d, e}
# # 각 stop에서의 문자열 자릿수도 중요. -> 갯수를 저장해야 할 듯 -> 아니다, 중간에 어떻게 할 수 있는 방법 있을듯

# abcdef
# stop1 : 1       / 2     / 3   / 4 
# stop2 : 2 3 4 5 / 3 4 5 / 4 5 / 5
# {a, b, cdef}, {a, bc, def}, {a, bcd, ef}, {a, bcde, f} / 
# {ab, c, def}, {ab, cd, ef}, {ab, cde, f} /
# {abc, d, ef}, {abc, de, f} /
# {abcd, e f}

# => for문 총 3번 돈다. N-2, N-1
for i in range(N-2):
	for j in range(i+1, N-1):
		# print(i, j)
		str_set.add(S[:i+1])
		str_set.add(S[i+1:j+1])
		str_set.add(S[j+1:])
		# print(str_set)
		# print()
		
# 부분문자열의 중복을 제거한다.
new_list = sorted(str_set)
# print(new_list)

# 얻을 수 있는 최대 점수 구하기
max_score = 0
for i in range(N-2):
	for j in range(i+1, N-1):
		# 각 결과를 new_list의 인덱스 번호+1로 계산하여 더한 뒤, 최댓값이랑 비교
		score = new_list.index(S[:i+1])+new_list.index(S[i+1:j+1])+new_list.index(S[j+1:])+3
		# print(S[:i+1], S[i+1: j+1], S[j+1:], score)
		if max_score < score:
			# print('score update', max_score, score)
			max_score = score
		# print(score)
		
print(max_score)
