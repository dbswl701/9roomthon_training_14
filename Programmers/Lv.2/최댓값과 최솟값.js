function solution(s) {
    const arrS = s.split(' ');

    return Math.min(...arrS)+' '+Math.max(...arrS);
}