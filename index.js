function esPar (n){
   resultado = n%2 == 0;
   return resultado;


}



// ACA EMPIEZA EL PROGRAMA

numero=parseInt (prompt ("ingrese un valor"));
if (esPar(numero)){
    alert("Es Par");
} else {
    alert("Es Impar"); 
}