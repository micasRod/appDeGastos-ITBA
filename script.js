var form=document.getElementById("form");
var ul=document.getElementById("list");
function addLi(){
    var nom=document.getElementById("nombre").value;
    var pre=document.getElementById("precio").value;
    form.addEventListener("submit",function(e){
        e.preventDefault();
        var li=document.createElement("li");
        li.className="list-group-item";
        li.appendChild(document.createTextNode(nom+": $"+pre))
        ul.appendChild(li);
    }) 
}

