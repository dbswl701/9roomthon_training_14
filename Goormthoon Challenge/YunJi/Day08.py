N = int(input())

bandage = 1
medicine = 7
painkiller = 14
result = 0

result += N // painkiller
N %= painkiller
result += N // medicine
N %= medicine
result += N // bandage

print(result)

# 해당 문제는 그리디의 기초가 되는 문제입니다. 현재 상태에서 최고의 선택을 찾아야 합니다.
# 구름 레벨 변형 문제입니다.

# 8 -> 7*1, 1*1 -> 2
# 100 -> 14*7, 1*2 -> 9

# 잘 되다가 timeout이 나온다. 10^9를 일일이 while문으로 돌려서 그런듯
