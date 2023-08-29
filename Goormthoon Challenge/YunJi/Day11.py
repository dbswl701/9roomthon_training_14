N = int(input())
A, B = map(int, input().split())
cnt = N + 1 # N과 A 가 같을 수 있음

# A < B
for max_num in range(N // B, -1, -1):
	remain = N - B * max_num # 3
	if remain % A:
		continue
	else:
		min_num = remain // A
		cnt = min(cnt, max_num + min_num)

print(cnt if cnt < N + 1 else -1)