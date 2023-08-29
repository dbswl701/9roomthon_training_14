function solution(balls, share) {
  var answer = 0;
  let dp = [];
  dp[0] = BigInt(1);
  for(let i = 1; i <= 30; i++) {
      dp[i] = dp[i-1] * BigInt(i);
  }
  return dp[balls] / (dp[balls - share] * dp[share]);
}