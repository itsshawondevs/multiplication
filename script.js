// let students = ["shawon", "emamul", "jubayed", "emon", "bokul", "rabby", "saykot", "mohasin"]

// for(let i = 1; i < students.length; i++){
//     console.log(i +". "+ `${students[i]}`);
// }

let number = 10

for(let i = 1; i<= 10; i++){
    console.log(number + " x " + i + " = " + number*i);
}

let input = document.querySelector(".in")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")

btn.addEventListener("click",function(){
    for(let i = 1; i <= 10; i++){
        result.innerHTML = (input.value + " x " + i + " = " + input.value*i);
    }
})