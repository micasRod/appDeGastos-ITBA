
var form=document.getElementById("form");
var ul=document.getElementById("list");
var total=0;
var prom=0;
var i=0;
function addLi(){
    var nom=document.getElementById("nombre").value;
    var pre=document.getElementById("precio").value;
    form.addEventListener("submit",function(e){
        e.preventDefault(); 
    }) 
    var li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(nom+": $"+pre))
    ul.appendChild(li);
    total+=parseInt(pre);
    i=i+1
    prom=total/i;
    //console.log(total,i,prom);
    
    document.getElementById("total").innerHTML="Total= $"+ total;
    document.getElementById("aportes").innerHTML="A cada uno le toca aportar= $"+ prom;
}





