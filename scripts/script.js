function calcular(){
    let edad=document.getElementById("edad").value;
    let peso=document.getElementById("peso").value;
    let altura=document.getElementById("altura").value;
    let operador =((peso)/(altura)**2).toFixed(2);
    
    let contenedorResultado=document.getElementById("contenedorResultado");
    let etiqueta=document.createElement("h2");
    etiqueta.textContent= operador;
    contenedorResultado.appendChild(etiqueta);
    
    let categoriaImc =document.getElementById("contenedorImc");
    let etiquetaCategoriaImc= document.createElement("h2")
    etiquetaCategoriaImc.textContent=operador;
    categoriaImc.appendChild(etiquetaCategoriaImc);

    if(operador <= 18.5){
        etiquetaCategoriaImc.textContent= "Por debajo del peso";
    }else if (operador >= 18.6 && operador <=24.9){
        etiquetaCategoriaImc.textContent= "saludable";
    }else if(operador >= 25 && operador <=29.9){
        etiquetaCategoriaImc.textContent= "Con sobrepeso";
    }else if(operador >= 30 && operador <=39.9){
        etiquetaCategoriaImc.textContent= "obeso";
    }else if (operador>= 40){
        etiquetaCategoriaImc.textContent= "Obesidad extrema o de alto riesgo";
    }else{    
}

}
