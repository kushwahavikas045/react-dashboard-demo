export const formateName = (name) =>{
  const symbol = name[0].toUpperCase();
  return symbol;
}

export const Avatar = (name) => {

  const backgrond = {
     V: 'round round-warning',
     R: 'round round-primary',
     S: 'round round-success',
     N: 'round round-info',
  }
  const symbol = name[0].toUpperCase();
  let indicate = false;

  if(backgrond[symbol]){
    indicate = true;
  }else{
    indicate = false
  }

  return indicate ? backgrond[symbol] : 'round';

}