function solution(maps) {
  const dr = [-1, 0, 0, 1];
  const dc = [0, -1, 1, 0];
  const rowLen = maps.length;
  const colLen = maps[0].length;
  const queue = [{r: 0, c: 0, distance: 1}];
  
  while (queue.length) {
      const {r, c, distance} = queue.shift()
      if (r === rowLen-1 && c === colLen-1) return distance;

      for (let k = 0; k<4; k++) {
          const nr = r + dr[k];
          const nc = c + dc[k];
          
          if (0> nr || nr >= rowLen || 0 > nc || nc >=colLen || maps[nr][nc] === 0) continue;
          queue.push({r: nr, c: nc, distance: distance+1});
          maps[nr][nc] = 0;
      }
  }
  return -1;
}