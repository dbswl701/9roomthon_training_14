function solution(chicken) {
  let coupon = parseInt(chicken / 10);
  let remain = chicken % 10;
  let temp = remain + chicken;
  chicken = coupon;

  while(temp / 10 >= 1) {
      chicken = parseInt(temp / 10);
      coupon += chicken;
      remain = temp % 10;
      temp = remain + chicken;
  }
  return coupon;
}