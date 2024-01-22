// let students = ["shawon", "emamul", "jubayed", "emon", "bokul", "rabby", "saykot", "mohasin"]

// for(let i = 1; i < students.length; i++){
//     console.log(i +". "+ `${students[i]}`);
// }

// let number = 10

// for(let i = 1; i<= 10; i++){
//     console.log(number + " x " + i + " = " + number*i);
// }

let input = document.querySelector(".in")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")
let numberregex = "NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)"

btn.addEventListener("click",function(){
    if(input.value == ""){
        input.style.border = "1px solid red"
        result.innerHTML = ""
    }else if(input.value.match(numberregex)){
        input.style.border = "1px solid red"
    }
    else{
        input.style.border = ""
        for(let i = 1; i <= 10; i++){
            result.innerHTML = (input.value + " x " + i + " = " + input.value*i);
        }
    }
})