# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
N, K = map(int, input().split())
num_list = list(map(int, input().split()))
# dict으로 숫자와, 1의 갯수 저장 key=1의 갯수, value=숫자

dic = {}
for num in num_list:
	# 10진수 -> 2진수 -> 1찾기 -> dict에 저장
	if bin(num).count('1') in dic:
		dic[bin(num).count('1')].append(num)
	else:
		dic[bin(num).count('1')] = [num]
# print(dic)

k_old = K
# K 번째 위치한 수 출력
# K 번쨰 -> dic[1]부터 갯수 차감
# 내림차순....!!!!
for i in sorted(dic.keys(), reverse=True):
	# 1의 개수가 같다면, 10진수 기준으로 내림차순 정렬
	if k_old >= 0:
		k_new = k_old - len(dic[i])
	if k_new <= 0:
		# 음수라면, len - k_old의 index 찾기
		# 같으면, 내림차순 정렬
		dic[i].sort()
		print(dic[i][len(dic[i]) - k_old])
		break
	k_old = k_new
