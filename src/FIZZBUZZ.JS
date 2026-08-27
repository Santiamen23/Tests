function fizzbuzz(numero){
  let resp="";
  if(numero%3==0)
  {
    resp+="Fizz"
    if(numero%5==0){
    resp+="Buzz"
    }
  }
  else if(numero%5==0){
    resp+="Buzz"
  }
  else{
    resp=numero+""
  }
  return resp;
}
export default fizzbuzz;
