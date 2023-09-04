function solution(numbers) {
  let stack = [];
   let test_num = [];
   
   //DFS
   //numbers 순열 만들면서 소수 찾으면 stack에 넣기
  
   dfs(numbers.split(''), stack, test_num);
   return stack.length;
}

function dc(numbers){
   // console.log('test dc: ', numbers);
   if(numbers == 1 || numbers==0){
       return -1;
   }
   //numbers의 제곱근까지 다 나눠보기
   for(let i=2;i<=Math.sqrt(numbers);i++){
       if(numbers%i==0){ //약수 생기면 멈춤
           return -1;
       }
   }
   
   //아님 숫자 그대로
   return numbers;
}

function dfs(numbers, stack, test_num){ 
   for(let i of numbers){
       //test_num에 i 넣고
       test_num.push(i);
       let test = parseInt(test_num.join('')); // test_num을 숫자로 만들어서 소수 테스트하기
       // console.log(i, ': ', test_num, test);
       if(!stack.includes(test)){ //stack에 test가 없을 때
           if(dc(test)==test){// 소수일때
               stack.push(test);
               // console.log(stack)
           }
           else{
           // console.log(test, 'not sosu')
       }
       }
  
       dfs(numbers.filter((x,idx, arr) => idx!=arr.indexOf(i)), stack, test_num);
       //dfs 확인 끝내면 빼기
       test_num.pop();
       // console.log(i, 'pop: ', test_num)
   }
   
}