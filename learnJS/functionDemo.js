add()
function add(){
    //logic
    console.log(2+3);
}
//add()

let sum= function(a,b){
    console.log(a+b);
}
sum(10,20)

sum=(a,b,c)=>{
    console.log("anonymous function")
    console.log(a+b+c)
}
sum(10,20,30)