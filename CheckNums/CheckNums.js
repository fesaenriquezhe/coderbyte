function CheckNums(num1,num2) { 
    var resultado = "";
    if(num2 > num1){
        resultado = "true";
    }
    else if(num2< num1){
        resultado = "false";
    }
    else{
        resultado = -1;
    }
    
    return resultado;
}
   
// keep this function call here 
CheckNums(readline());                            


  