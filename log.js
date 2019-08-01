function get(){
    
    var v;
    var r;
    
    
  

function valid(v,r,callback){
    if(v=="admin"&&r=="12345"){
        c="true"
    }
    else{
       c="false" 
    }
    callback(c);
    
      }  

var v=document.getElementById('u').value;
var r=document.getElementById('p').value;

valid(v,r,(res)=>{
    if(res=="true"){
    window.location.href="todo.html"
    }
    else{
    alert("enter correct values")
    }
})
}