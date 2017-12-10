export const processInteger = (input)=>{
  if(input==''){
    return '0'
  }
  if(!/^\d*$/.test(input)){
    return false;
  }
  if(input.length!=1 && input[0]=='0'){
    return input.substring(1);
  }
  else{
    return input;
  }
}
