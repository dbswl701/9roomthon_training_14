# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import math
user_input = input()
W, R = map(int, user_input.split())
OneRM = math.floor(W * (1 + R / 30))
print (OneRM)