/**
 * 
 */
function chunk(array, size)
{
  const chunk = [];  

  for(var i = 0; i <= array.length-1; i++){
    
      const last = chunk[chunk.length -  1];
      if(!last || last.length === size)
      {
        chunk.push([array[i]]);
      }else{
        last.push(array[i]);
      }
  }
  return chunk;
}

var test = [1,2,3,4,5];
console.log(chunk(test, 3));

