function solution(p, d) {
	return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}