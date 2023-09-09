function solution(dots) {
    var answer = 0;
    
    let dx = dots.map(x => x[0])
    let dy = dots.map(x => x[1])
    
    dx = Math.max(...dx) - Math.min(...dx);
    dy = Math.max(...dy)-Math.min(...dy);    
    
    return Math.abs(dx*dy);
}