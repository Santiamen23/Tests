function fizzbuzz(numero){
  let resp="";
  if(numero%3==0)
  {
    resp+="Fizz"
  }
  else{
    resp=numero+""
  }
  return resp;
}
export default fizzbuzz;
