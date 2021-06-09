// Assignments from Chapter 17 to 30


// Chapters 17-20

//  Task 1 Method 1

// // declaring an empty multidimensional array
// var marks = [ [] ];

// // initializing  multidimensional array
// marks[0][0] = "Damsaz";
// marks[0][1] = 65;

// //marks.push(["Asad", 75])
// console.table(marks);

// Task 1 Method 2

// // declaring  multidimensional array
// var marks = new Array( new Array());

// // initializing  multidimensional array
// marks[0][0] = "Damsaz";
// marks[0][1] = 65;

// //marks.push(["Asad", 75])

// console.table(marks);

// Task 2 method 1

// declaring and initializing 
// var randomNumbers = [
//         [0, 1, 2, 3],
//         [1, 0, 1, 2],
//         [2, 1, 0, 1]
// ];

// console.table(randomNumbers);

// for (var i = 0;  i < randomNumbers.length; i++) {   
//     for( j = 0; j < randomNumbers[i].length; j++){
//         document.write(randomNumbers[i][j]+ "  ");
//     }
//     document.write("<br>");        
// }


// Task 2 method 2 *************************
// // declaring a multidimensional array 
// var arr = new Array();
// for(i =0; i<=2; i++){
//     arr[i]= new Array() 
// }

// // initializing a multidimensional array
// for(var i = 0; i<=2; i++){
//     for(var j=0; j<=3; j++){
//         var a =prompt("enter")
//         arr[i][j]=a;
//     }   
// }

// console.log(arr);

// Task 3

// for(var i = 1; i <= 10 ; i++ ){
//     document.write(i+ "<br>");
// }

 // Task 4

// var table = +prompt(" Enter a number to show multiplication table");
// var tableLength= +prompt(" Enter length multiplication table");
// var tableResult;

// document.write("Multiplication table of  " + table +"<br>");
// document.write(" Length  " + tableLength +"<br><br>");

// for(var  multiplier = 1; multiplier <= tableLength; multiplier++ ){

//     tableResult = table * multiplier;
//     document.write(table + " X " + multiplier + " = "+ tableResult +"<br>");

// }

//  Task 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var fruitsName of fruits){    
//     document.write(fruitsName+ "<br>");
// }
// document.write("<br>")

// for (var index in fruits){    
//     document.write("Element at index "+index + " is "+ fruits[index] + "<br>");
// }
 

// Task 6 a

// var counter = 15;
// document.write("Counting: <br><br>")
// for(var i = 1; i <= counter ; i++ ){
//     document.write(i);

//     if (i != counter){
//         document.write(",")
//     }    
// }

// Task 6 b

// var reverseCounter = 1;
// document.write("Reverse counting: <br><br>")
// for(var j = 10; j >= reverseCounter ; j-- ){
//     document.write(j);

//     if (j != reverseCounter){
//         document.write(",")
//     }    
// }

// Task 6 c

// var evenCounter = 20;
// document.write("Even: <br><br>")
// for(var k = 0; k <= evenCounter ; k++ ){
//     if(k %2 == 0){
//         document.write(k);

//         if (k != evenCounter){
//             document.write(",");
//         }
//     } 
// }

// Task 6 d

// var oddCounter = 30;

// document.write("Odd: <br><br>")
// for(var m = 0; m <= oddCounter ; m++ ){
//     if(m %2 == 1){
//         document.write(m);
//         if(oddCounter%2 ==0){
//             if (m != oddCounter-1){
//                 document.write(",");
//             }
//         }else{
//             if (m != oddCounter){
//                 document.write(",");
//             }
//         }
//     } 
// }

// Task 6 e
// var seriesCounter = 20;

// document.write("Series: <br><br>")
// for(var n = 0; n <= seriesCounter ; n++ ){
//     if(n %2 == 0 && n != 0){
//         document.write(n+ "k");

//         if(seriesCounter%2 ==1){
//             if (n != seriesCounter-1){
//                 document.write(", ");
//             }
//         }else{
//             if (n != seriesCounter){
//                 document.write(", ");
//             }
//         }
//     } 
// }


//  Task 7

// var searchEdible = prompt("Welcome to ABC Bakery. What you want to order Sir/Ma'am");
// var j = 0;
// A = ["cake", "apple pie", "cookie", "chip", "patties"];
 
// for(var i = 0; i< A.length; i++){

//     if(searchEdible == A[i]){
//         document.write( A[i]+ " <b> is available </b> at index "+ i +" in our bakery");
//         j++;
//     } 
// }

// if(j==0){
//     document.write("We are sorry, "+searchEdible+ " is <b> not available </b> in our bakery")
// }

// Task 8

// A = [24, 53, 78, 91, 12];
 
// document.write("Array items: " + A +"<br>");
// var element = A[0];

// for(var  i in A){

//     if(A[i] > element){
//         // console.log("greater"+ A[i]);
//         largestElement = A[i];
//     }  
// }
//  document.write("The largest number is " +largestElement);

// Task 9

// A = [24, 53, 78, 91, 12];
 
// document.write("Array items: " + A +"<br>");
// var element = A[0];

// for(var  i in A){

//     if(A[i] < element){
//         // console.log("greater"+ A[i]);
//         smallestElement = A[i];
//     }  
// }
//  document.write("The smallest number is " +smallestElement);


//  Task 10
 
// var range =100;
// for(var i = 0; i <= range; i++)
//     if(i%5 == 0){
//         document.write(i);
        
//         if(i != range){

//             document.write(", ");
//         }
//     }    
// }



// Chapters 21-25

// Task 1 *****

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// fullName = firstName + " " + lastName;
// console.log("Welcome here "+ fullName);

// Task 1 method 2 make first letter capital as well

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");

// firstLetterFirstName = firstName.slice(0,1).toUpperCase();
// firstLetterLastName = lastName.slice(0,1).toUpperCase();

// remainFirstName =firstName.slice(1).toLocaleLowerCase();
// remainLastName =lastName.slice(1).toLocaleLowerCase();

// fullName = firstLetterFirstName + remainFirstName +' '+ firstLetterLastName + remainLastName;

// console.log("Welcome here "+ fullName);

// idea make a program when it comes space between words
// word be separated and the first latter be capitalized

// Task 2

// var mobileModel= prompt("Enter mobile model");
// mobileModelStringLength = mobileModel.length;
// document.write("My favorite phone is: " + mobileModel +"<br>");
// document.write("Length of string: " + mobileModelStringLength);

// Task 3

// var pakistan = "Pakistani";
// indexOfN = pakistan.indexOf('n') ;

// document.write("String:" +pakistan +"<br>");
// document.write("Index of 'n': " +indexOfN);

// Task 4

// var string = "Hello World";
// lastIndexOFL = string.lastIndexOf('l') ;
 
// document.write("String: " +string +"<br>");
// document.write("Last index of 'l': " +lastIndexOFL);

// Idea: find the frequency of letter in string

// Task 5

// var pakistan = "Pakistani";
// string3rdIndex = pakistan.charAt(3) ;

// document.write("String:" +pakistan +"<br>");
// document.write("Character at index 3: "+ string3rdIndex);

// task 6 ****

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// fullName = firstName.concat(" " +lastName);

// document.write("Welcome here "+ fullName);

// task 6 ***** method 2

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// firstLetterFirstName = firstName.slice(0,1).toUpperCase();
// firstLetterLastName = lastName.slice(0,1).toUpperCase();

// remainFirstName =firstName.slice(1).toLowerCase();
// remainLastName =lastName.slice(1).toLowerCase();

// fullName = firstLetterFirstName.concat(remainFirstName) +' '+ firstLetterLastName.concat(remainLastName);
// document.write("Welcome here "+ fullName);

// Task 7

// var text = "Hyderabad";
// var newText = text.replace(/Hyder/g, "Islam");

// document.write("City: "+ text +"<br>");
// document.write("After replacement: "+ newText);

// task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// document.write("message: "+ message +"<br><br>");
// document.write("New message: "+ newMessage);

// task 9

// var string = "472";
// var number = parseInt(string);

// document.write("Value: " + string +"<br>");
// document.write("Type: " + typeof(string) +"<br>");

// document.write("Value: " + number +"<br>");
// document.write("Type: " + typeof( number)  +"<br>");

// task 10

// var takeInput = prompt("Enter the word");

// makeUpercase = takeInput.toUpperCase()

// document.write("User Input: "+ takeInput +"<br>" );
// document.write("Upper case: "+ makeUpercase );

// task 11

// var inputWord = prompt("Enter word");

// capFirst = inputWord.slice(0,1).toUpperCase();

// lowerRemaining =inputWord.slice(1).toLowerCase();

// titleCase = capFirst + lowerRemaining ;

// document.write("User Input: "+ inputWord +"<br>");
// document.write("Title case: "+ titleCase);


//  task 12

// var num = 35.36;
// string = num.toString();
// newString =string.replace('.', '');

// document.write("Number: "+num +"<br>");
// document.write("Result: "+newString);

// Task 13

// var username = prompt("Enter the username");
// var j=0;

// for (var i = 0; i < username.length; i++) {
//      if (  username.charAt(i) === "!" || username.charAt(i) === "@" || username.charAt(i) === "." || username.charAt(i) === ",") {
          
//             alert("Please enter a valid username");
//             j++;
//             break;
//      }
    
// }
// if(j==0){
//         alert("username is correct");        
// }

// Task 14

// var A =["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am").toLowerCase();
// var j = 0;
// for(i = 0; i < A.length; i++){ 
  
//     if(userInput == A[i]){
//         console.log(A[i]+" is available at index "+ i + " in our bakery");
//         j++
//     }
  
// }

// if(j==0){
//     console.log("Sorry "+ userInput  + " is not available in our Bakery");

// }

// Task 15 *****  
// var password = prompt("enter the password");
//     //range condition
//     if(password.charCodeAt(0) >=48 && password.charCodeAt(0) <=57){
//         console.log("Password should not start with number");
//     }
//     else{
//         var j =0, k = 0;
//         for (i = 0; i < password.length; i++){
//             if(password.length > 5){                                     
//                 if( password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
//                     j++;                    
//                 }
//                 if( (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)){
//                     k++;                    
//                 }
//                 if(j != 0 && k!= 0){
//                     console.log("Password is Valid login successfully!!");
//                     break;
//                 }                                  
//             }
//             else{
//                 console.log("Password must be at least 6 characters long ");
//             }
//         }

//         if(j==0){
//             console.log("password must contains numbers");
//         }
//         if(k == 0){
//             console.log("password must contains Alphabets");
//         }        
//     }


// Task 16 ****

// var university = "University of Karachi";
// universityArr = university.split(' ');
// for(value of universityArr){
//     console.log(value);
// }

// task 17

// var userInput = prompt("Enter word");
// var lastChar = userInput.charAt(userInput.length- 1);
// console.log(lastChar);


// task 18

// var text ="The quick brown fox jumps over the lazy dog";
// var j=0;
// for(i=0; i< text.length; i++){
//     var splitText = text.split(' ')
//     // console.log(splitText[0]);
//     if(splitText[i] == "the" || splitText[i] == "The"){    
//         j++;          
//     }   
// }
// console.log(j);

// Chapter 26 to 30

// Task 1

// var num = prompt("Enter positive Integer");

// if(num > 0){
    
//     document.write("number: " + num + "<br>");
//     document.write("round of: " + Math.round(num) + "<br>");
//     document.write("floor: " + Math.floor(num) + "<br>");
//     document.write("ceil: " + Math.ceil(num) + "<br>");
// }
// else{
//     alert("enter positive number")
// }

// Task 2

// var num = prompt("Enter negative number");

// if(num < 0){
    
//     document.write("number: " + num + "<br>");
//     document.write("round of: " + Math.round(num) + "<br>");
//     document.write("floor: " + Math.floor(num) + "<br>");
//     document.write("ceil: " + Math.ceil(num) + "<br>");
// }
// else{
//     alert("please Enter negative number");
// }

// Task 3
// var numValue = -4;
// console.log("The absolute Value of "+ numValue +" is "+ Math.abs(numValue))

// // Task 4
// var randomDice =Math.floor((Math.random()* 6)+1);
// console.log("random dice value: "+ randomDice);


// Task 5

// var randomCoin =Math.floor((Math.random()* 2)+1);
// if(randomCoin ==1){

//     console.log( randomCoin +" random coin value: Tail ");
// }
// else{
//     console.log( randomCoin +" random coin value: Head ");

// }

// Task 6

// var randomNum = Math.floor((Math.random() * 100)+1);
// console.log(randomNum);

// Task 7
// var weight = prompt("Enter the weight: ");
// console.log(parseInt(weight)+" kilograms");

// task 8

// var randomNum = Math.floor((Math.random() * 10)+1);
// // console.log(randomNum);

// var userInput =prompt("unlock the secret number");
// if(randomNum == userInput){
//     console.log("congratulations! you have find the secret number");
// }
// else{
//     alert("try again");
// }


