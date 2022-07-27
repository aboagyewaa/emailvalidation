let check=document.querySelector(".check");
let password=document.querySelector(".password");
let text=document.querySelector(".text");

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

check.addEventListener("click",()=>{
    if(password.value==" "){
        text.innerHTML="Please Enter An Email Address";
        text.style.coloe="red";
    }
    else if(password.value.match(regex)){

        text.innerHTML="Congrats! You Entered A Valid Email Address";
        text.style.coloe="green";

    }
    else{
        text.innerHTML="Sorry Your Email Address Is Invalid";
        text.style.coloe="red";

    }

})