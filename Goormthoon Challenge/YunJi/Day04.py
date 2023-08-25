N = int(input())
num_list = list(map(int, input().split()))

idx = num_list.index(max(num_list))
result = True

max_num = 0
min_num = max(num_list)
for left in num_list[:idx]:
	if max_num > left:
		result = False
		break
	else:
		max_num = left
	
for right in num_list[idx+1:]:
	if min_num < right:
		result = False
		break
	else:
		min_num = right
		
if result == False:
	print(0)
else:
	print(sum(num_list))