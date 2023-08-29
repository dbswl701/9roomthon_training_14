# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
T = int(input())
sum = 0
for _ in range(T):
	operand1, operator, operand2 = input().split()
	if operator == '+':
		sum += int(operand1) + int(operand2)
	if operator == '-':
		sum += int(operand1) - int(operand2)
	if operator == '*':
		sum += int(operand1) * int(operand2)
	if operator == '/':
		sum += int(operand1) // int(operand2)
print(sum)