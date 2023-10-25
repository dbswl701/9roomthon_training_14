function solution(nums) {
    const getCha = nums.length / 2;
    let uniqPoke = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!uniqPoke[nums[i]]) {
            uniqPoke[nums[i]] = true;
            count++;
        }
    }

    return Math.min(count, getCha);
}

