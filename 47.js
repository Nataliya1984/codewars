// Price of Mangoes

//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(q, p){
    // let res = (q-(q / 3))*p;
    // return res;
  if(q /3 === 0){
    return p*2;
  }else{
   return (q-Math.floor(q / 3))*p
  }
  }

