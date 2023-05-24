console.log('1---------------------------------')
//1. Print numbers from 1 to 10
for(let number = 0; number <=10; number++){
    console.log(number)
}

console.log('2---------------------------------')
//2. Print the odd numbers less than 100
for(let odd = 1; odd < 100; odd+=2){
console.log(odd)
}

console.log('3---------------------------------')
//3. Print the multiplication table with 7
for(let multiple = 7; multiple<=84; multiple+=7){
    console.log(multiple)
}

console.log('4---------------------------------')
//4. Print all the multiplication tables with numbers from 1 to 10
for(let two = 2; two<=24; two+=2){
    console.log(two)
}
for(let three = 3; three<=36; three+=3){
    console.log(three)
}
for(let four = 4; four<=48; four+=4){
    console.log(four)
}
for(let five = 5; five<=60; five+=5){
    console.log(five)
}
for(let six = 6; six<=72; six+=6){
    console.log(six)
}
for(let seven = 7; seven<=84; seven+=7){
    console.log(seven)
}
for(let eight = 8; eight<=96; eight+=7){
    console.log(eight)
}
for(let nine = 9; nine<=108; nine+=9){
    console.log(nine)
}
for(let ten = 10; ten<=120; ten+=10){
    console.log(ten)
}
for(let eleven = 11; eleven<=132; eleven+=11){
    console.log(eleven)
}
for(let twelve = 12; twelve<=144; twelve+=12){
    console.log(twelve)
}

console.log('5---------------------------------')
//5. Calculate the sum of numbers from 1 to 10
// let sumNum =  2+4+6+8+10
// console.log(sumNum)
function sumNum(){
    console.log(2+4+6+8+10)
}
sumNum()

console.log('6---------------------------------')
// 6. Calculate 5!  i.e Reminder n! = 1 * 2 * ... * n
let n = 1*2*3*4*5
console.log(n)

console.log('7---------------------------------')
// 7. Calculate the sum of odd numbers greater than 10 and less or equal than 30
function oddNum(){
    console.log(11+13+15+17+19+21+23+25+27+29)
}
oddNum()

console.log('10---------------------------------')
//10. Calculate the sum of numbers in an array of numbers.
// Example array:
// [2, 3, -1, 5, 7, 9, 10, 15, 95]
// Expected output: 145
let sumOfNum =[2+3+(-1)+5+7+9+10+15+95]
console.log(sumOfNum)

console.log('11---------------------------------')
// 11. Calculate the average of the numbers in an array of numbers
// Example array: [1, 3, 9, 15, 90]
// Expected output: 23.6
let aveNum = [1+3+9+15+90]
aveNum = aveNum/5
console.log(aveNum)
