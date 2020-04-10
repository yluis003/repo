/**
 * 
 */

function anagrams(stringA, stringB){
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
  
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap)){
      return false;
    }
  
    for(var i = 0; i <= Object.keys(aCharMap).length; i++){
      if(aCharMap.i !== bCharMap.i){
        return false;
      }
    }
    return true;
  
  }
  
  function buildCharMap(str){
    const charMap = {};
  
    for(var i = 0; i <= str.length-1; i++){
      charMap[str[i].toLowerCase()] = charMap[str[i].toLowerCase()] + 1 || 1;
    }
    return charMap;
  }
  
  
  var string1 = "hello";
  var string2 = "hello";
  
  console.log(anagrams(string1, string2));
  
  
  
  