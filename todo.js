$(document).ready(function(){

    console.log('testtttt');
    var c=0;
    $.ajax({
        type:"GET",
        
        url:"https://jsonplaceholder.typicode.com/todos",
        
        success:function(data){
            
        
           
var output=" <form> <table class='table'><thead><tr><th>id</th><th>title</th></tr></thead>"
            for(var j in data){
output +="<tr><td>" +data[j].id+"</td>"

output +="<td>"+data[j].title+"</td>"

var h=data[j].completed;
if(h==true){
    output +="<td><input type='checkbox' checked disabled  /></td></tr>"
}
else{
output +="<td><input type='checkbox'  /></td></tr>"

}
            }


            

            output +="</table> </form> "   ; 
                                    
            $("#result").html(output);


            // Checkbox Event Handling

            $('input[type="checkbox"]').click(function(){
             
                
                if($(this).prop('checked')===true){
                    c++;
                }
                else{
                    c--;
                }
                
                var mypromise=new Promise((resolve,reject)=>{
                    
                    if(c>=5){
                        resolve();
                    }
                    else{
                        reject();
                    }
                });
                mypromise.then(()=>{
                    alert('congrats.5task have been successfully completed');
                    }).catch(()=>{
                        
                    });
            }) ;








            
        }

    });



})