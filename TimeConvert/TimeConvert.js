function TimeConvert(num) { 
  var hora = num/60;
  hora = parseInt(hora);
  var minutos = num - (hora * 60);
  
  // code goes here  
  return hora+":"+minutos; 
         
}
   
// keep this function call here 
TimeConvert(readline());                            


  