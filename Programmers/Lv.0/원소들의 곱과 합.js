function solution(num_list) {
    let ListSum = 0;
    let ListMul = 1;
    for ( let i = 0; i < num_list.length; i++ ){
        ListSum += num_list[i];
        ListMul *= num_list[i];
    }
    return ListMul < Math.pow(ListSum, 2) ? 1 : 0;
}