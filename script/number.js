function calc(num1, num2, appereand) {
    switch (appereand) {
        case "+":
            return num1 + num2
         case "-":
            return num1 - num2
         case "*":
            return num1 * num2
         case "/":
            return num1 / num2
      default:
             console.log('неизвестный оператор')
             return 0
            }
}
const num1 = +prompt("Введите  число")
const num2 = +prompt("Введите второе число")
const oper = prompt("Введите оператор")

alert(`Ответ ${calc(num1, num2, oper)}`)



// const num = 42

// const num2 = + num
// console.log


// function log(str)
// if (ctr.len)




