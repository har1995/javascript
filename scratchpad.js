function isPrime(num)
{

    flag = true;
    if(num < 2){
        flag =false;
    }
 for(var i = 2; i <= Math.sqrt(num); i ++)
    {
      if( num % i == 0)
        {
          flag = false;
          break;
        }
    }
    if(flag)
{
  console.log("isprime");
}
    else{
    console.log("notprime") ; 
         
}
}
isPrime(100);

function generatePrime(num)
{
 var count = 0;
  for(var i = 2 ; ; i ++)
    {
      if(isPrime(i))
        {
          console.log(i);
          count++;         
        }
      if( count == num)
        {
          break;
        }
    }
}
generatePrime(50);
