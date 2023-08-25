# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
N = int(input())
T, M = map(int, input().split())
sum = T * 60 + M

for _ in range(N):
	sum += int(input())

sum = sum % ( 60 * 24 )
print(sum // 60, sum % 60)
