function LongestWord(sen) { 

  // code goes here
  var palabras = sen.split(" ");
  var palabra  =palabras.reduce(function(a,b){
      return a.length > b.length ? a  : b
  },'')
  return palabra; 
         
}
   
// keep this function call here 
LongestWord(readline());                            


  