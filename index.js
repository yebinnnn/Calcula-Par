function esPar (n){
   return n%2 == 0;


}



// ACA EMPIEZA EL PROGRAMA

numero=parseInt (prompt ("ingrese un valor"));
if (esPar(numero)){
    alert("Es Par");
} else {
    alert("Es Impar"); 
}
