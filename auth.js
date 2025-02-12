let signupfrom=document.getElementById(singnup)
let signinfrom=document.getElementById(signin)
let btn=document.getElementById("rdlg");

btn.addEventListener("click",()=>{
    signin.style.display="inline-block"
    signupform.style.display="none";
    btn.style.display="none"
    backtosignup.style.display="inline-block"
})

backtosignup.addEventListner("click",()=>{
    signupform.style.display="inline-block";
    backtosignup.style.display="none";
    btn.style.display="inline-block"
})