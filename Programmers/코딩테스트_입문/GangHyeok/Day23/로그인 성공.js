function solution(id_pw, db) {
        
  let answer = db.filter(([i, _])=>i==id_pw[0])
  
  if(answer.length==0){
      return 'fail'
  }
  else if(answer.filter(([_,p]) => p == id_pw[1]).length){
      return 'login'
  }
  else{
      return 'wrong pw'
  }
}