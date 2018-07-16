function validate()
{
    var nameEle = document.getElementById("uname");
      var pwdEle = document.getElementById("pwd");
     
    var name = nameEle.value;
    var pwd = pwdEle.value;
    
    if(name.trim() === "")
        {
            document.getElementById("errorname").innerHTML="name cannot be empty "
            nameEle.style.border="1px solid red";
            return false;
        }
      if(pwd.trim() === "")
        {
            document.getElementById("errorpwd").innerHTML="password cannot be empty "
            pwdEle.style.border="1px solid red";
            return false;
        }
    
    
}
