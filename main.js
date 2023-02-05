let display = document.querySelector('.screen');
let btn = document.querySelector('.btn button');
let copy = document.querySelector('.display i');

function generateOTP(){
    const digits = '0123456789';
    let password =" ";
    for(let i = 0; i < 6; i++ ){
      password += digits[Math.floor(Math.random()*10)];
    }
    display.value = password;
}

btn.addEventListener('click', generateOTP);

copy.addEventListener('click', function(){
    setTimeout(copyToClipboard, 0);
    display.value = "123456";
    display.style.color = "rgb(216, 198, 198)";
} )

function copyToClipboard(){
    display.value = "copied to clipboard";
    display.style.color = "lightgreen";
}