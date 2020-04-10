/**
 * 
 */
 
 function capitalize(str){

  //  let cap = str[0].toUpperCase();

  //  for(let i = 1; i < str.length; i++){
  //    if(str[i - 1] === " "){
  //      cap+=str[i].toUpperCase();
  //    }else{
  //      cap+=str[i];
  //    }
  //  }
  //  return cap;


const words = [];

 for(let word of str.split(' ')){
   words.push(word[0].toUpperCase() + word.slice(1));
 }
 return words.join(' ');

 }

 
 
 console.log(capitalize("hello there"));