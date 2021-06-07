var signupbtn=document.getElementById('signupbtnid');
var loginbtn=document.getElementById('loginbtnid');
signupbtn.addEventListener('click',function(){
    document.getElementById('c_signupid').style.display="block";
    document.getElementById('c_loginid').style.display="none";
})

loginbtn.addEventListener('click',function(){
    document.getElementById('c_loginid').style.display="block";
    document.getElementById('c_signupid').style.display="none";
})