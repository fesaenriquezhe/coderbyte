function LetterCapitalize(str) { 

  var palabras = str.split(" ");
  for(var i=0; i<palabras.length; i++){
      palabras[i]  = palabras[i].charAt(0).toUpperCase()+palabras[i].slice(1);
  }
  str = palabras.join(" ");
  return str; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());                            


  