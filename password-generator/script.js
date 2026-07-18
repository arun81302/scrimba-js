const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

// All characters combined
const allCharacters = uppercase + lowercase + numbers + symbols;
let passwordBtn=document.querySelector('.password-btn')
let one=document.querySelector('.one')
let two=document.querySelector('.two')
function check(){
    let passwordone=""
    for(let i=0;i<12;i++){
        let value=Math.floor(Math.random()*allCharacters.length)
        passwordone+=allCharacters[value]
    }
    let passwordtwo=""
    for(let i=0;i<12;i++){
        let value=Math.floor(Math.random()*allCharacters.length)
        passwordtwo+=allCharacters[value]
    }
    one.textContent=passwordone
    two.textContent=passwordtwo
    
}