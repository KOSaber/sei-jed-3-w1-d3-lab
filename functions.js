function youRock(name){

return name 

}

youRock('Samar') 
youRock('Sara')

function square(num){

    return num*num 
    
    }

square(2) 
square(3)

function cube(num){

    return Math.pow(num, 3);
    
    }

cube(2) 
cube(3)

function toTheFourth(num){

    return Math.pow(num, 4); 
    
    }
   
toTheFourth(2) // 16
toTheFourth(3) // 81

function calculator(num1,num2,operation){
    if ((isNaN(num1)) || (isNaN(num2)))
    console.log("calculator only accepts numbers")
   else if(operation=="add")
    console.log(num1 + num2) 
    else if (operation=="subtract")
    console.log(num1 - num2)
    else if (operation=="divide")
    console.log(num1 / num2)
    else if (operation=="multiply")
    console.log( num1 * num2)
    else if (operation!=="multiply" && operation!=="subtract" && operation!=="divide" && operation!=="add")
    console.log("calculator can only add, subtract, divide, or multiply")
   
    }

    calculator(1, 2, "add");
    calculator(1, 2, "subtract"); 
    calculator(1, 2, "divide") ;
    calculator(1, 2, "multiply"); 
    calculator(1, 2, "something else")  
    calculator("cat", 2, "add") ;


    function fizzBuzz(number){
        if((number % 3 == 0)&& (number % 5 !== 0))
        console.log("Fizz") 
        if ((number % 5 == 0) && (number % 3 !== 0))
        console.log("Buzz")
        if ((number % 5 == 0) && (number % 3 == 0))
        console.log("FizzBuzz")
        else if((number % 5 !== 0) && (number % 3 !== 0))
          console.log(number)

        }

fizzBuzz(3) // Fizz
fizzBuzz(15) // FizzBuzz
fizzBuzz(7) // 7

function rainDrop(num){
    if (num % 7 == 0) 
    console.log("plong")
    else if((num % 3 == 0)&& (num % 5 !== 0))
    console.log("pling") 
    else if ((num % 5 == 0)&& (num % 3 !== 0)) 
    console.log("plang")
    
    else if ((num % 5 == 0)&&  (num % 3 == 0))
    console.log("plingplang")
    
    else //if((num % 5 !== 0) && (num % 3 !== 0) && (num % 7 == 0) )
    {
      num = num.toString();
      console.log(num)
    }

}
rainDrop(28) // Plong
rainDrop(1755) // PlingPlang
rainDrop(34) // 34
