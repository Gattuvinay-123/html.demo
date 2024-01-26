const count=document.querySelector("#counter>p")
let c=0
console.log(count.textcontent)
function incr()
{
 
  if (c>=10){
    alert("your enter number is greter then 10")
  }
  else{
    console.log("increment called")
  count.textContent= c++
  
}
}
function decr(){
  
  if (c<=0){
    alert("your enter number is less then ")
  }
  else{
    console.log("decrement called")
  count.textContent=c
  c--
  }
}

