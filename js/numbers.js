function checkPrime()
{
  num = usergetinput();
    flag = true;
    if(num < 2){
        flag =false;
    }
 for(i = 2; i <= Math.sqrt(num); i ++)
    {
      if( num % i == 0)
        {
          flag = false;
          break;
        }
    }
    if(flag)
{
    showresult("given number is: "+num+"prime")
}
    else{
         showresult("given number is: " +num+ " not prime")
    }
}

function factorial()
{
    num = usergetinput();
    var res = 1;
    for(var i = 2; i <= num ; i++)
        {
            res *= i;
        }
    showresult("factorial of " +num+ "  is: " +res);
    } 

function factors()
{
    num=usergetinput();
    var ouput = "";
    for( i = 1 ;i <= num; i ++)
        {
            if( num % i == 0)
                {
                    ouput += i + " ";
                }
        }
     showresult("factor of " +num+ "  is: " +ouput);
    
}

function fibonacci()
{
    num=usergetinput();
    var result1 = " ";
   if(num == 1)
       {
           result1 +="0";
       }
    else if( num == 2)
        {
                                  
 result1 +="0 1";

        }
    else
        {
            var a =0 , b =1;
            result1 +="0 1";
            for( var i = 3; i <= num; i++)
            {
                c = a + b;
                result1 += " "+c;
                a = b;
                b = c;
            }
        }
     
       showresult("factor of " +num+ "  is: " +result1);
    
}

function reverse()
{
    num = usergetinput();
  var  num1 = num;
    var sum = 0;
    while(num != 0)
        {
            sum = sum * 10 + num % 10;
           var rev = Math.floor (num / 10);
            num = rev;
        
        
        }

  showresult("reverse of " +num1+ "  is: " +sum);  
}
function Ispalindrome()
{
    num = usergetinput();
    var num1 = num;
    var sum = 0;
    while(num != 0)
        {
            sum = sum * 10 + num % 10;
           var rev = Math.floor (num / 10);
            num = rev;
        
        
        }
    if (sum == num1)
        {
            showresult("Ispalindrome");
        }
    else{
        showresult("Is not palindrome");
    } 
}
function sumofdigit()
{
     num = usergetinput();
    num1 = num;
    var sum = 0;
    while(num != 0)
{
    sum = sum + (num % 10);
    num =Math.floor(num / 10);
}  showresult("sum of " +num1+ "  is: " +sum); 
}
 function sumgetsingledigit(){
     
     num = usergetinput();
     num1 = num;
     var sum = num;
     while(num > 9)
         {
             sum =Math.floor(num / 10) + num % 10  ;
             num = sum;
         }
      showresult("sum of " +num1+ "  is: " +sum);  
}
     
 
function usergetinput()
{
num = document.getElementById("num").value;
    return num;
}
function showresult(message)
{
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}