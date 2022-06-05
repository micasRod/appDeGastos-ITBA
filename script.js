var personas=[];
var gastos=[];


function total(gastos){
    
    for (let i of gastos){
        let total=total+i;
    }

    return total;

}

function aporte(total,personas){

    return total/personas.lenth;
}
