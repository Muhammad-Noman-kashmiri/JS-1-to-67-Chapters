// CHAPTER 1
// 1. Write a script to greet your website visitor using JS alert
// box.

// alert("Assalam U Alaikum! Visitor We are welcoming you in our website :)"
// +"How May I help you");

// 2. Write a script to display following message on your web
// page:

// var username=prompt("What Is your Name");
// var pass=prompt("what is your password ");

// if(pass==='0900'){
//     alert("Welcome "+username)
// }
// else{
//     alert("Error! Please Enter a valid Password");
// }



// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

// alert("Welcome to js land..." +"\n"+" Happy Coding!");


// 4. Write a script to display following messages in sequence:

// alert("Welcome to js land...");
// alert("Happy Coding!"+"\n"+"Prevent this message from additional dialogs.")


// Q5-Generate the following message through browser’s developer console: 
// alert("Hello... I can run JS through Browser developer Console");

// console.log("Hello!");

// Q6- Make use of alerts in your new/existing HTML & CSS project. 
// function show_alert(){
//     alert("Thank You! For Clicking")
// }

// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// CHAPTER 2

// 1. Declare a variable called username.

// var username="Muhammad Noman";
// alert(username);

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.


// var myname="Muhammad";
// var mylastname="Noman";
// alert(myname+""+mylastname);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.


// var mesasage="Hellow World";
// alert(mesasage);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.


// var std_name=" Muhammad Noman";
// var std_age="21 Years old";
// var course="Certified Mobile Application Development";
// alert(std_name);
// alert(std_age);
// alert(course);

// 5. Write a script to display the following alert using one JS
// variable:

// var pattern="PIZZA";
// for(pattern=5;pattern<5;pattern-1){
//     alert(pattern)
// }


// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// var email="muhammadnomanak98@gmail.com";
// alert ("My email is "+email);


// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:


// var book= "A smarter way to learn JavaScript";
// alert ("I am Trying to learn from the Book "+book);


// 8. Write a script to display this in browser through JS

// document.writeln("Yah! I can write HTML content through Javascript")

// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);


// CHAPTER 3

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var age="I am 21 Years old";
// alert(age);


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var i;
// for (i = 1 ; i> 1; i++) {

// }
// alert("you have visited "+i+" times");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// var birthYear='1998'
// document.writeln("My birth Year Is 1998 "+" <br> "+" Data type of my declared varaible is number");


// 4.A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

//  var username=prompt("What is your name ");
//  var pt=prompt(" what is your product title")
//  var Quantity=prompt("  how many u want");
//  var a=" xyz clothing store"
//  document.writeln(username +pt + Quantity + a);

// CHAPTER 4

// 1. Declare 3 variables in one statement

// var i,j,k;

// 2. Declare 5 legal & 5 illegal variable names.
//  Legal 
//  1 A variable name can not contain any spaces
//  2 A variable name can contain only letters, numbers, dollar signs, and underscores
//  3 Capital letters are fine, but be careful. Variable names are case sensitive
//  4 use camel case 
//  5 variable always start with alphabets

//  illegal

//  1 Variable contain spaces are illegal
//  2 varible never start with alphebets
//  3 never start with smbols
//  4 know the small and Capital letters difference
//  5 no need use js keywords
 
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


// var a1=" A heading stating “Rules for naming JS variables"
// var a2=" Variable names can only contain ______, ______,"

// var a8= "______ and ______."
// var a3="For example $my_1stVariable"
// var a4=" Variables must begin with a ______, ______ or"
// var a5=" _____. For example $name, _name or name"
// var a6=" Variable names are case _________"
// var a7=" Variable names should not be JS _________"

// document.writeln(a1+a2+a8+a3+a4+a5+a6+a7);

// CHAPTER 5

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.


// var num1=prompt("Enter 1st number");
// var num2=prompt(" enter 2nd number")
// var result=+num1+ +num2;
// document.writeln("The sum of " +num1 +" and "+num2 +" is " +result ) ;

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.


// var num1=prompt("Enter 1st number");
// var num2=prompt(" enter 2nd number")
// var result=num1-num2;
// document.writeln("The subtraction of " +num1 +" and "+num2 +" is " +result ) ;

// var num1=prompt("Enter 1st number");
// var num2=prompt(" enter 2nd number")
// var result=num1*num2;
// document.writeln("The multiplication of " +num1 +" and "+num2 +" is " +result ) ;

// var num1=prompt("Enter 1st number");
// var num2=prompt(" enter 2nd number")
// var result=num1/num2;
// document.writeln("The division of " +num1 +" and "+num2 +" is " +result ) ;

// var num1=prompt("Enter 1st number");
// var num2=prompt(" enter 2nd number")
// var result=num1%num2;
// document.writeln("The modulus of " +num1 +" and "+num2 +" is " +result ) ;

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// var i=prompt("Enter a number");
// document.write("Value after variable declaration is Undefined" );
// document.writeln("<br>");
// document.write("initial value is:"+i);
// document.writeln("<br>");
// i++;
// document.write("value after increment is:"+i);
// var j=prompt("Enter a number for addition");

// var k=+i+ +j;
// document.writeln("<br>");
// document.write("value after addiition is:"+k);

// var l=prompt("Enter a number for division");
// document.writeln("<br>");
// var m=k%l;
// document.write("The remainder is:"+m);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// alert("The tcket rate is 600pkr");
// var ab=prompt("How Many tickets you want");
// var ac=ab*600;
// document.writeln("The total cost to buy " +ab +" tickets  is "+ac +" PKR" ) ;

// 5. Write a script to display multiplication table of any
// number in your browser. 

// function tables()
// {
//   var x=prompt("Enter a number:",2);
//   var aa = '';
//   for (var i=1; i<10; i++) {
//     aa += x + "*" + i +"="+x*i + '<br>';
//   }
//   document.writeln("Table of "+x  );
//   document.writeln("<br>");
//   document.writeln(aa );

// }
// tables();

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// var c=prompt("Enter a temperature in celsius:");
// var a=(c*9/5)+32;
// document.writeln(c+"C is"+a +"F");
// var f=prompt("Enter a temperature in Fahrenheit:");

// var b=(f-32)*5/9;

// document.writeln("<br>");
// document.writeln(f+"F is"+b +"F");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser


// alert("Price of item 1 is 650");

// document.writeln("Price of item 1 is 650");
//  var ad=prompt("How Many quantity you want");
//  document.writeln("<br>");
//  document.writeln("Quantutu of item 1 is "+ad);

//  alert("Price of item 2 is 100");
//  document.writeln("<br>");
//  document.writeln("Price of item 2 is 100");
//   var af=prompt("How Many quantity you want");
//   document.writeln("<br>");
//   document.writeln("Quantutu of item 2 is "+af);
  
//   document.writeln("<br>");
//   document.writeln("Shipping Charges is 100 ");


// var ae=+(ad*650)+ +(af*100)+ +100;

// document.writeln("<br>");
//   document.writeln("Total Charges is "+ae);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// var marks=prompt("Enter Total Marks ");
//    document.writeln("<br>");
//    document.writeln("Total Mark is"+marks);
//    var om=prompt("Enter obtained  Marks ");
//    document.writeln("<br>");
//   document.writeln("Obtained mark is "+om);
//   var percentage=(om/marks)*100;
//   document.writeln("<br>");
//   document.writeln("Your percenrage is "+percentage);

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var currency1=prompt("Enter USD Currency");
// var currency2=prompt("Enter Saudi Riyal Currency");
// var USd= currency1*160;
// document.writeln("The Total Currency is "+USd +" PKR");
// document.writeln("<br>");
// var sr= currency2*33;
// document.writeln("The Total Currency is "+sr +" PKR");


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var abc=prompt("Enter any number");
// var at=(+abc +5)*(6)/2;
// document.writeln("your answer is"+ at)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


//  var age=prompt("Enter Your age");
 
 
//  document.writeln("Current year is 2020 ");
//  document.writeln("<br>");
//  var age1= 2020-age;
//  document.writeln("Birth year is  "+age1);
//  document.writeln("<br>");
//  document.writeln("Your age is "+age);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius=20;
// const pi=3.142;
// var circumference=2*pi*radius;
// var area=pi*radius*radius;
// document.writeln("Radius of circle is "+radius);
// document.writeln("<br>");
// document.writeln("circumference of circle is "+circumference);
// document.writeln("<br>");
// document.writeln("area of circle is "+area);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var fs=prompt("Entetr your favourite snack ");
//   var age=prompt("Enter your age is");
//   var age11=prompt("Estimate maximum your age is");
//   var snacks=prompt("amount of snacks per day");

//   document.writeln("your favourite snack is "+fs);
//   document.writeln("<br>");
//   document.writeln("your age is "+age);
//   document.writeln("<br>");
//   document.writeln("your estimated age is "+age11);
//   document.writeln("<br>");
//   document.writeln("amount of snacks per day "+snacks);
// var need=(age11-age)*snacks;
// document.writeln("<br>");
// document.writeln("You will need "+need+  " "+fs+" to last you  until the rip old age of "+age11);

// CHAPTER 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// document.writeln("Result:")
// var a=prompt("enter any number");
// document.writeln("<br>");

// document.writeln("The value  of a is :"+a);
// document.writeln("<br>");

// document.writeln("..............................");
// document.writeln("<br>");
// ++a;
// document.writeln("<br>");
// document.writeln("The value  of ++a is :"+a);
// document.writeln("<br>");
// document.writeln("Now the value  of a is :"+a);

// document.writeln("<br>");

// document.writeln("<br>");
// document.writeln("The value  of a++ is :"+a);
// document.writeln("<br>");
// a++;
// document.writeln("Now the value  of a is :"+a);
// document.writeln("<br>");
// --a;
// document.writeln("<br>");
// document.writeln("The value  of --a is :"+a);
// document.writeln("<br>");
// document.writeln("Now the value  of a is :"+a);

// document.writeln("<br>");

// document.writeln("<br>");
// document.writeln("The value  of a-- is :"+a);
// a--;
// document.writeln("<br>");
// document.writeln("Now the value  of a is :"+a);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// document.writeln(" a is :"+a);
// document.writeln("<br>");
// document.writeln(" b is :"+b);
// --a;
//  --a - --b;
//  --a - --b + ++b;
//  var c= --a - --b + ++b + b--;
//  document.writeln("<br>");
//  document.writeln("Result is :"+c);

// 3. Write a program that takes input a name from user &
// greet the user

// var username=prompt("Enter Your Name")
// alert("WELCOME! "+username)

// 4.
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// function tables()
// {
//   var x=prompt("Enter a number:",2);
//   var aa = '';
//   for (var i=1; i<10; i++) {
//     aa += x + "*" + i +"="+x*i + '<br>';
//   }
//   document.writeln("Table of "+x  );
//   document.writeln("<br>");
//   document.writeln(aa );

// }
// tables();



//default table
    // var table=5;
    // document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");
    // for(var i=1;i<=10;i++){
    //     document.write(table+"*"+i+"="+table*i+"<br>");
    // }


//     6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


    //  var bio=+prompt("Enter your urdu marks");
    // var phy=+prompt("Enter your english marks");
    // var chem=+prompt("Enter your maths marks");
    // var tb=100,tp=100,tc=100;
    // var total_marks=+tb+tp+tc;
    // var marks_obt= bio+phy+chem;
    // var percentage_bio=bio/tb*100,percentage_phy=phy/tp*100,percentage_chem=chem/tc*100;
    // var total_percentage=marks_obt/total_marks*100;
  

    // document.write("<table>"+"<tr>"+"<th>"+"Subjects"+"</th>"+" "
    //  +"<th>"+"Total marks"+"</th>"+" "
    //  +"<th>"+"Marks Obtained"+"</th>"+" "
    //  +"<th>"+"Percentage"+"</th>"+"</tr>"+" "+
    //  "<tr>"+
    //  "<td>"+"Biology"+"</td>"+" "+
    //  "<td>"+tb+"</td>"+" "+
    //  "<td>"+bio+"</td>"+" "+
    //  "<td>"+percentage_bio+"</td>"+" "+"</tr>"+
    //  "<td>"+"Physics"+"</td>"+" "+
    //  "<td>"+tp+"</td>"+" "+
    //  "<td>"+phy+"</td>"+" "+
    //  "<td>"+percentage_phy+"</td>"+" "+"</tr>"+
    //  "<td>"+"Chemistry"+"</td>"+" "+
    //  "<td>"+tc+"</td>"+" "+
    //  "<td>"+chem+"</td>"+" "+
    //  "<td>"+percentage_chem+"</td>"+" "+"</tr>"+
    //  "<tr>"+"<td>"+"</td>"+"<td>"+total_marks+"</td>"+"<td>"+marks_obt+"</td>"+"<td>"+total_percentage+"</td>"+"</tr>"+
    //  "</table>");


    
    //chapter 9-10


    //  1. Write a program to take “city” name as input from user. If user enters “Karachi”,
    //   welcome the user like this: “Welcome to city of lights”                                   
   
    // var city=prompt("Enter city name");
    // if(city=="karachi"){
    //     alert("Welcome to the city of lights");
    // }
    // else
    // {

    //     alert("Your city is beautiful");
    // }

    //  2. Write a program to take “gender” as input from user. If the user is male,
    //  give the message: Good Morning Sir. 
    // If the user is female, give the message: Good Morning Ma’am

    // var gender=prompt("Enter Your Gender");
    // if (gender=="Male"){
    //     alert("Good Morning Sir");
    // }
    // else
    // {
    //     alert("Good Morning Ma'am");
    // }

     //3. Write a program to take input color of road traffic signal
  // from the user & show the message according to this table: 
   
//   var signal=prompt("Enter Signal color");
//   if(signal=="red"){
//       alert("Must Stop");
//   }
//   else if(signal=="yellow"){
//       alert("Ready to move");
//   }
//   else if(signal=="green"){
//       alert("Move Now");
//   }

//   // 4. Write a program to take input remaining fuel in car (in litres) from user. 
// //   If the current fuel is less than 0.25litres,
// //    show the message “Please refill the fuel in your car” 

//    var rem_fuel=+prompt("Enter Remaining fuel value in your car");
//    if(rem_fuel<0.25){
//        alert("Please refill the fuel in your car");
//    }
//    else
//    {
//        alert("You have enough fuel Hurry!");
//    }

//    5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//     var a = 4; 
//     if (++a === 5)
//     { alert("given condition for variable a is true"); }
 
//  var b = 82;
//   if (b++ === 83)
//   { alert("given condition for variable b is true"); } 
 
//  var c = 12; 
//  if (c++ === 13)
//  { alert("condition 1 is true"); }
//   if (c === 13){ alert("condition 2 is true"); } 
//   if (++c < 14){ alert("condition 3 is true"); } 
//   if(c === 14){ alert("condition 4 is true"); } 
 
// var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost; 
//   if (totalCost === laborCost + materialCost)
//   { alert("The cost equals"); } 
 
//  if (true)
//  { alert("True"); }
//   if (false){ alert("False"); } 
 
// if("car" < "cat"){ alert("car is smaller than cat"); } 

// output shows that the "given condition of variable is true"

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:



// var urdu=+prompt("Enter your urdu marks");
// var eng=+prompt("Enter your english marks");
// var math=+prompt("Enter your maths marks");
// var total_urdu=100,total_eng=100,total_math=100;
// var tot_marks=total_urdu+total_eng+total_math;
// var tot_marks_obt= urdu+eng+math;
// var percentage_urdu=urdu/total_urdu*100,percentage_eng=eng/total_eng*100,percentage_math=math/total_math*100;
// var total_per=tot_marks_obt/tot_marks*100;
 
// if(tot_marks_obt>=80){
//     document.write("Grade A+" )
// }
// else if(tot_marks_obt>=70){
//     document.write("Grade A" )

// }
// else if(tot_marks_obt>=60){
//     document.write("Grade B" )

// }
// else if(tot_marks_obt>=55){
//     document.write("Grade C" )

// }
// else if(tot_marks_obt>=50){
//     document.write("Grade D" )

// }
// else{
//     document.write("You need to improve" )
// }
// document.write("Total marks"+" "+tot_marks+"<br>");
// document.write("Marks Obtained"+" "+tot_marks_obt+"<br>");
// document.write("Total Percentage"+" "+total_per+"<br>");


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secret=+prompt("Enter a Secret number");
// if(secret===7){
//     alert("Bingo you have found the secret number");
// }
// else if(secret==8){
//     alert("You are closed enough");
// }
// else{
//     alert("oops! you didn't get the secret number ");
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var a=+prompt("Enter Any Number")
// if(a%3==0){
//     alert("The number is divisilbe by 3")
// }
// else{
//     alert("Please! Try another number");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var num=+prompt("Enter Number");
// if(num%2===0){
//     alert("Number is Even");

// }
// else{
//     alert("Number is odd");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// var temp=+prompt("Enter temperature");
// if(temp>=40){
//     alert("oh its too hot outside");
// }
// else if(temp>=30){
//     alert("The weather is normal today");
// }
// else if(temp>=20){
//     alert("The weather is Cool");
// }
// else if(temp>=10){
//     alert("OMG the weather is so cool");
// }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.



// var a=+prompt("Enter 1st num");
// var b=+prompt("Enter 2nd num");
// var sum=a+b, sub=a-b, mul=a*b,div=a/b, mod=a%b;
// alert("Sum is "+sum+"\n"+"Subtraction is:"+sub+"\n"+"Multiplication is:"+mul+"\n"+"Division is:"
// +div+"\n"+"Modulus is:"+mod);

// CHAPTERB 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//  var input=prompt("Enter any character");
// if (input>='A'&& input<='Z'){
//     alert("Uppercase Letter")
// }
// else if (input>='a'&& input<='z'){
//     alert("Lowercase Letter")
// }
  
// else if (input>=0 && input<=9){
//     alert("Digits")
// }
// else{

//     alert("Special Character");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integer1=+prompt("Enter Integer1");
// var integer2=+prompt("Enter Integer2");
// if(integer1>integer2){
//     alert("integer1 is larger")
// }
// else if(integer1==integer2){
//     alert("Both are equal")
// }
// else{
//     alert("integer2 is larger")
// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num=+prompt("Enter value");
// if(num>0){
//     alert(num +" is positive")
// }
// else if(num<0){
//     alert(num +" is negative")
// }
// else {
//     alert(" you entered zero")
// }



//4. Write a program that takes a character (i.e. string of length 1) 
//and returns true if it is a vowel, false otherwise 

// var char=prompt("Enter character");
// if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//     alert(char+" "+"Character is a Vowel")
// }
// else{
//     alert("false")
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var username=prompt("Enter Your name:");
// var pass=prompt("Enter Password:");
// if( pass==='0900')
// {
//     alert("Correct! The password you entered matches the original password"+" "+username);
// }
// else{
//     alert("Incorrect Password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var greeting;
//  var hour = 13; 
//  if (hour < 18)
//   { 
//     alert( "Good day");
//   }
//    else 
//    {
//     alert("Good evening") ; 
//    }
 
//    7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time=prompt("Enter Time");
//   if(time<=11){
//      document.write("The Time is " +time +" am");
//   }
//   else if(time==12){
//     document.write("The Time is " +time +" pm");
//   }
//   else if(time==13){
//     document.write("The Time is 1 pm");
//   }
//   else if(time==14){
//     document.write("The Time is 2 pm");
//   }
//   else if(time==15){
//     document.write("The Time is 3 pm");
//   }
//   else if(time==16){
//     document.write("The Time is 4 pm");
//   }
//   else if(time==17){
//     document.write("The Time is 5 pm");
//   }
//   else if(time==18){
//     document.write("The Time is 6 pm");
//   }
//   else if(time==19){
//     document.write("The Time is 7 pm");
//   }
//   else if(time==20){
//     document.write("The Time is 8 pm");
//   }
//   else if(time==21){
//     document.write("The Time is 9 pm");
//   }
//   else if(time==22){
//     document.write("The Time is 10 pm");
//   }
//   else if(time==23){
//     document.write("The Time is 11 pm");
//   }
//   else if(time==24){
//     document.write("The Time is 12 am");
//   }
  
//Chapter 13-15  Arrays

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var student=[" "," "," "];
// console.log(student)

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var names=["rafia","noman","Raja","Usama"];
// console.log(names)

// 3. Declare and initialize a strings array.

// var names=["rafia","noman","Raja","Usama"];
// console.log(names)

// 4. Declare and initialize a numbers array

// var numbers=[1,2,3,4,5];
//  console.log(numbers)

// 5. Declare and initialize a boolean array.

// var boolean=[true,false];
//  console.log(boolean)

// 6. Declare and initialize a mixed array.


// var mixed=["Noman",1," ",false];
//  console.log(mixed)

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualification=["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//  console.log(qualification[0]+"\n"+qualification[1]+"\n"+qualification[2]+"\n"+qualification[3]+"\n"
//  +qualification[4]+"\n"+qualification[5]+"\n"+qualification[6]+"\n"+qualification[7]+"\n")

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var stu=["rafia","Noman","Raja","Usama"];
//  var score=[400,350,300,400];
//  var total=500;
//  console.log("Score of"+" "+stu[0]+"is"+ score[0]+" "+"Percentage is"+score[0]/total*100+"\n"+
//  "Score of"+" "+stu[1]+"is"+ score[1]+" "+"Percentage is"+score[1]/total*100+"\n"+
//  "Score of"+" "+stu[2]+"is"+ score[2]+" "+"Percentage is"+score[2]/total*100+"\n"+
//  "Score of"+" "+stu[3]+"is"+ score[3]+" "+"Percentage is"+score[3]/total*100+"\n")

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color=["red","yellow","green","pink"];
 
//  color.unshift("white");
//  console.log(color)
 //9
// var color=["red","yellow","green","pink"];
 
//  color.push("white");
//  console.log(color)
 //9
//  var color=["red","yellow","green","pink"];
 
//  color.unshift("Black","blue");
//  document.write(color)
 //9

//  var color=["red","yellow","green","pink"];
 
//  color.shift("Black");
//  document.write(color)




// 10 Write a program to store student scores in an array & 
//   //sort the array in ascending order using Array’s sort method.
//   var score=[320,230,480,120];
//   document.write("Ordered list"+score[4]+"<br>"+score[1]+"<br>"+score[0]+"<br>"+score[3]);

//   11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//    var cities=["karachi","lahore","islamabad"];
  
//    console.log( cities.slice(0,2));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//   var arr = ["This", "is " , "my " , "cat"]; 
//   arr.join(arr[0]+arr[1]+arr[2]+arr[3]);
//   console.log(arr)


// CHAPTER 17-20


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var Arr=[[1,2],[3,4],[5,6]]

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

// 3. Write a program to print numeric counting from 1 to 10.


// for( var counting=1;counting<=10;counting++){
    //      document.write(counting+"<br>");
    //  }


//     4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var table=+prompt("Enter the number for multiplication table");
//  document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");

// for(var i=1;i<=10;i++){
    
//     document.write(table+"X"+i+"="+table*i+"<br>");
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// var  fruits = ["“apple”", "“banana”", "“mango”", "“orange”", "“strawberry”"]
// document.write("This is apple at index 0"+fruits[0]+"<br>"+
// "This is banana at index 1"+fruits[1]+"<br>"+
// "This is mango at index 2"+fruits[2]+"<br>"+
// "This is orange at index 3"+fruits[3]+"<br>"+
// "This is strawberry at index 4"+fruits[4]+"<br>")



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//counting 1 to 15
// for(var i=1;i<=15;i++){
    //  document.write(i+"<br>");
    // }
    // //reverse counting
    // for(var i=15;i>=1;i--){
    //     document.write(i+"<br>");
    //    }
    //    //even series
    
    //    for(var i=0;i<=20;i=i+2){
    //     document.write(i+"<br>");
    //    }
    //    //odd series
    //    for(var i=1;i<=20;i+=2){
    //     document.write(i+"<br>");
    //    }
    //    //series
    //    for(var i=2;i<=20;i=i+2){
    //     document.write(i+"k"+"<br>");
    //    }


//     7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var  A = ["“cake”", "“apple pie”", "“cookie”", "“chips”", "“patties”"] 
//    var size=5;
//    var search;
//     for(var i=0; i<size; i++)
// 	{
//         search[A] = prompt("Welcome to abcd what do you want to search" );
//     }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// if(search[A]==A[0]||search[A]==A[1]||search[A]==A[2]||search[A]==A[3]||search[A]==A[4])
// {
//     alert(A)
// }
// else{
//     alert("search not found")
// }

//Print the array in the console.
// console.log(search);
 //8-largest element in array
//  function largest(number) {
// 	var large = number[0];
// 	for(var i=1; i<number.length; i++) {
// 		if(large < number[i]) {
// 			large = number[i];
// 		}
// 	}
// 	return large;
// }

// var input = [24, 53, 78, 91, 12];
// var output = largest(input);

// console.log(output);



// console.log(largest)


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// function findSmallest(numbers) {
    //     var small = numbers[0];
    //      for (var i = 0; i < numbers.length; i++) {
    //           if (numbers[i] < small) {
    //             small = numbers[i];
    //             console.log(small)
    //           }
    //      }
    //        return small;
    //    }
    // findSmallest([24, 53, 78, 91, 12]);

//     10. Write a program to print multiples of 5 ranging 1 to
// 100.


// for(var num=5;num<=100;num+=5){
    //        document.write(num+"<br>");
    //    }

// Chapter # 21-25
// JAVASCRIPT
// Task 1

// var firstname=prompt('Enter your First Name ' );
// var Lastname=prompt(' Enter your Last Name');
// document.write("Assalm u Alaikum " +firstname    );
// document.write(" " +Lastname    );

// Task 2
// var name=prompt('Enter your favourite Mobile phone Name' );
//  var n = name.length;
// document.write("My favourite phone is " +name +"<br>" +"Length Of String is "+n);

// Task 3
// var name="Pakistan";
//  var a=name.indexOf("n");
// document.write("String: "+name+"<br>"+ "Index of n is: " +a);

// Task 4
// var name="Hello World";
// var a=name.lastIndexOf("l");
//  document.write("String: "+name+"<br>"+ "Index of l is: " +a);

// Task 5
//  var name="Pakistani";
//  var a= name.substring(3,4);
// document.write("String: "+name+"<br>"+ "Character at index 3 is: "+a );

// Task 6

// var firstname=prompt('Enter your First Name ' );
// var Lastname=prompt(' Enter your Last Name');
// var c=firstname.concat(Lastname);
// document.write(c);

// Task 7

//  var city="Hyderabad";
//  document.write("city: "+city);
//  var rep=city.replace("Hyder","Islam");
//  document.write("<br>"+"After Replacement "+rep);

// Task 8

// var message = "Ali and sami are best friends. they play cricket and football together";
// document.write(message);
// var rep=message.replace(/and/g,"&");
// document.write("<br>"+ "<br>"+rep);

// Task 9

// var s="472";
// document.write("value "+s);
// document.write("<br>"+ "Type: string");
// document.write("<br>"+"value "+s);
// document.write("<br>"+ "Type: Number");

// Task 10

// var name=prompt('Enter any Name ' );
// document.write("User input "+name);
// var u=name.toUpperCase()
// document.write("<br>"+ "Upper Case "+u);

// Task 11
// var name=prompt('Enter any Title ' );
//  document.write("User input "+name);
//  var firstcharacter=name.slice(0,1)
//  var rem=name.slice(1)
//  firstcharacter=firstcharacter.toUpperCase()
//  rem= rem.toLowerCase()
//  document.write("<br>"+ "Title Case "+firstcharacter+ rem);

// Task 12


// var num=35.36;
// var s=num.toString();
// document.write("Number : "+num)
// var result=s.replace(".","");
// document.write("<br>"+"Result : "+result);

// Task 13


// function check_name(letters){
//     var regex = /^[a-zA-Z]+$/;
//     if(regex.test(letters.yourname.value) == false){
//    alert("You enter Invalid Name");
//    letters.yourname.focus();
//    return false;
//     }
//   }

// Task 14

// var item=prompt("Welcome to our bakery what do you want to order");
// item=item.toLowerCase()
// var arr= ["cake", "apple pie", "cookie", "chips", "patties"];
// var a=arr.indexOf("cake")
// for(i=0; i<arr.length; i++){
//     if(arr[i]===item){
//     document.write(item+" is available at index " +a +" in our bakery")
   
// }

// }


// Task 15

// function CheckPassword() 
// { 
// var format=  /^(?=.*[0-9])[a-zA-Z0-9]{6}$/;
// var pass=prompt("Enter password");
// if(pass.match(format)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// } 
// alert(CheckPassword())




// Task 16

// var name=prompt("Enter any Input")
// var a=name.split(0,1);
// for (i=0;i<name.length;i++){
// }


// Task 17

// var name=prompt("Enter any Input")
// document.write("user input "+name)
// var Last = name.charAt(name.length-1);
// document.write("<br>"+"Last character is "+Last)

// Task 18


// var s="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+s);
// var a = String.fromCharCode(84,104,101);
// document.write("<br>"+"There are  "+a);




// Chapter # 26-30


// Task 1


// var integer=prompt("Enter Number ");
// alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));


// Task 2

// var integer=prompt("Enter Negative Number ");
//  alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));

// Task 3
// var num=prompt("Enter any number")
// var b=Math.abs(num);
// document.write("The absolute value of " +num +" is "+b)


// Task 4
//   var a=Math.random() *6;
//   var b=Math.floor(a);
//   var c=b+1;
//   document.write("Random Dice value: "+c);



// Task 5

//    var a=Math.random() *2;
//    var b=Math.floor(a);
//    var c=b+1;
// if(c===2){
//     document.write("2"+"<br>"+"Random coin value: Heads "); 
// }
// else     document.write("1"+"<br>"+"Random coin value: Tails "); 

// Task 6

// var a=Math.random() *100;
//    var b=Math.floor(a);
//    var c=b+1;
//    document.write("Random Number between 1 and 100: "+c); 

// Task 7

// var weight=prompt("Enter Your Weight");
// parseInt(weight);
// alert(weight);

// Task 8

// var username=prompt("Enter your name");
// var num=prompt("Enter a number between 1 and 10");

// if(num==5){
//     document.write("Congratulate "+username+" you find the secret number "); 
// }
// else  document.write("Try Again "+username);


// chapter 31#34

// Task 1
// var td = new Date();
// document.write(td);


// Task 2

//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
  
//     var d = new Date();
//     var n = month[d.getMonth()];
//    document.write("Current Month : "+n)

// Task 3
  

    // var d = new Date();
    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";
  
    // var n = weekday[d.getDay()];
    // var n = n.slice(0, 3);
    // document.write("Today is: "+n)

    // Task 4

//     var d = new Date();
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
  
//     var n = weekday[d.getDay()];
  
//     if(n=="Sunday" | n=="Saturday"){
//         document.write("it's fun day")
//     }
// else {
//     document.write("Today is "+n)
// }

 // Task 5

//  var d = new Date();
//  if(d.getDate<16 ){
//             document.write("First fifteen days of month")
//         }
// else{
//     document.write("Last days of month")
// }

 // Task 6

//  var d = new Date();
//  document.write("Current Date: "+d)
//  var n = d.getTime();
//  document.write("<br>"+"Elapsed miliseconds Since January 1,1970: "+n)
//     var minutes = 1000 * 60;
//     var d = new Date();
//     var t= d.getTime();
//     var y = Math.round(t /minutes);
//     document.write("<br>"+"Elapsed minutes Since January 1,1970: "+y)
  
    // Task 7

//  var d = new Date();
//  var n = d.toLocaleTimeString();
//     var n = n.slice(9, 11);
//     document.write("it's   "+n)

  // Task 8

// var laterdate= new Date(2020, 11, 31, 00, 00, 00);
// document.write("Later Date " +laterdate);

  // Task 9

//   var oneday=24 * 60 * 60 * 1000;
//   var date=new Date();
//   var startDate=new Date(date.getFullYear(), date.getMonth()-1, -6); 
//   var today=new Date();
//   var get= Math.round(Math.abs((date - startDate) / oneday));
//   document.write(get+" "+" Days have passed since 1 Ramadn 2020");

  
  // Task 10
  
// var date=new Date();
// var t1 = new Date(date.getFullYear()-5,date.getMonth()+6,5 );
// var t2 = new Date();
// var dif = t1.getTime() - t2.getTime();

// var Seconds =Math.round( dif / 1000);
// var res = Math.abs(Seconds);
// document.write(res+" "+" seconds is passed since Dec 5 2015");

  // Task 11
//   var current=new Date();
//   var get=current.getHours();
//   document.write("Current Date is:"+current+" "+get+"\n");
//   current.setHours(current.getHours()-1);
//   document.write("<br>"+"Last 1 hour go Date was:"+current)


 
// Task 12

// var current=new Date();
// document.write(current+"\n"+"<br>")
// var d = new Date();
// d.setFullYear(d.getFullYear()-100, d.getMonth() );
// document.write("100 year back it was"+" "+d);


  // Task 13

//  var age=prompt("Enter Your age");
// document.writeln("Your age is "+age);
// document.writeln("<br>");
//  var age1= 2020-age;
//  document.writeln("Birth year is  "+age1);

// Task 14
// document.writeln("<h1>"+"K-Electric Bill "+"</h1>"+"<br>");
// var name=prompt("Enter Name");
// document.writeln("Customer Name: "+name);
//     var month = new Array();
//     month[0] = "January";
//     month[1] = "February";
//     month[2] = "March";
//     month[3] = "April";
//     month[4] = "May";
//     month[5] = "June";
//     month[6] = "July";
//     month[7] = "August";
//     month[8] = "September";
//     month[9] = "October";
//     month[10] = "November";
//     month[11] = "December";
  
//     var d = new Date();
//     var n = month[d.getMonth()];
//    document.write("<br>"+"Current Month : "+n)
//    var units=prompt("Enter Units");
//    var a=Math.round(units)
//    document.writeln("<br>"+"Number of units: "+a);
//    var c=prompt("Enter Charges");
//    document.writeln("<br>"+"Charges per units: "+c);
//    var amount=units*c
//    var amount=Math.round(amount)
//    document.writeln("<br>"+" Net Amount Payable (within Due Date) "+amount);
//    document.writeln("<br>"+" Late Payment Surcharge: 350 ");
//    var add=+amount+350;
//    document.writeln("<br>"+" Gross Amount Payable (after Due Date) "+add);
   

// Chapter 35-38

// Task 1

// function date(){
// var current=new Date();
// return current
// }
// document.write(date());

 // Task 2
 
//  function greeting(greet){
//    var fname=prompt("Enter Your First Name");
//    var lname=prompt("Enter Your Last Name")
//    return "Assalam U Alaikum "+fname.concat(" "+lname);
//  }
//  document.write(greeting());
 
// Task 3

// function sum(){
//   var num1=prompt("Enter number 1")
//   var num2=prompt("Enter number 2");
//   var sum=+num1+ +num2
//   return sum;
// }
// alert(sum())


// Task 4
 
// function cal(){
//     var num1=prompt("Enter number 1")
//      var num2=prompt("Enter number 2");
//      var op=prompt("Enter operator");
//      if(op=="+"){
//       return +num1+ +num2
        
//      }
//     else if(op=="-"){
//        return num1-num2
        
//      }
//      else if(op=="/"){
//         return num1/num2
         
//       }
//       else if(op=="%"){
//         return num1%num2
         
//       }
//       else if(op=="*"){
//         return num1*num2
         
//       }


// }
// alert(cal());

// Task 5

// function square(a){
//     var a=prompt("Enter a number to find square ")

//   return a*a
// }
// console.log(square(6));


// Task 6

// function Factorial(n) { 
//     var ans=1; 
//     var n=prompt("Enter a number for factorial");
//     for (var i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// } 

// alert(Factorial());


// Task 7

// function c(){ 
// for (i = 0; i <10; i++) {
//     console.count();
//   }

// }
// console.log(c());

// Task 8

// function hypotenuse(){
//     var per=+prompt("Enter perpendicular");
//     var base=+prompt("Enter base ");
//    //   var b=Math.pow(base,2);
//    //   var p=Math.pow(base,2)
//    //   var hypo=b+p
   
//        return Math.hypot(per,base);
//    }
   
//      function calsq(per,base){
//        return Math.sqrt(per*per+base*base);
   
//      }
     
   
   
//      console.log(hypotenuse()+"\n");
//    console.log(calsq())

// alert (rt());

// Task 9

// part 1

// function area(a,b)
// {
 
//   return a*b

// }

// alert(area(4,5));

// part 2

// function area()
// {
//  var h=+prompt("Enter Height");
//  var w=+prompt("Enter Width ");
//   var a= h*w;
//   return a

// }

// alert(area());

// Task 10

// function palindrome(){

// var c=prompt("Enter a word");
// var check="";
// for (i=c.length-1;i>=0;i--){
//     check+=c[i]
// }
// if(c==check){
//   return c+" is palindrome"
// }
// else {
//   return  c+" is not palindrome"
// }

// }

// Task 11

//  function first_letter(){
//    var str="the quick brown fox".split(' ');
//    alert("String:"+" "+str+"\n");
//    for (var i = 0; i < str.length; i++) {
//        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//      alert("Expected Output:"+" "+str);
//                   }
//  }
//  first_letter();

// Task 12

// function find_longest_word(string)
// {
//   var array1 = string.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word("Web Development Tutorial"));

//  function str(string){
//   var mess="Web Development Tutorial"
//   var get=mess.slice(3,15)
//   return get
// }
// console.log(str("Web Development Tutorial"));

// Task 13 

// function char_count(string, letter) 
// {
//  var letter_Count = 0;
//  for (var index = 0; index < string.length; index++) 
//  {
//     if (string.charAt(index) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o')+" "+"Character occurs 2 times");

// Task 14

// function calcCircum(radius){
//     const pi=3.142;
//     var circumference=2*pi*radius
//     return circumference

// }
// console.log("The value of circumference of the circle is:"+" "+calcCircum(5)+"\n");
// function calcArea(radius){
//     const pi=3.142;
//     var area=pi*radius*radius;
//     return area
// }
// console.log("The value of area of the circle is:"+" "+calcArea(5));



// chapter 38 to 42 

// Task 1

// function power(){

// var a=prompt("Enter any Number");
// var b=prompt("Enter power of number");
// var c=Math.pow(a,b);
// return c;
// }
// alert (power());


// Task 2

// function year(){
//     var a=prompt("Enter any year");
//     if(a%4==0){
//         return "You Entered Leap Year "+a;
//     }
//     else{
//         return "You Entered not a Leap Year "+a;
//     }
// }

// alert (year());


// Task 3

// var a=+prompt("Enter side one");
// var b=+prompt("Enter Side two");
// var c=+prompt("Enter Side Three");
// function side(){
   
// return  (a+b+c)/2;
// }
// console.log(side())

// function Area(){
//     var s=side()
//     return (s*((s-a)*(s-b)*(s-c)));
// }

// console.log(Area())


// Task 4

// var a=+prompt("Enter Subject 1 marks");
// var b=+prompt("Enter Subject 2 marks");
// var c=+prompt("Enter Subject 3 marks");

// function avg(){
// return (a+b+c)/3
// }

// function percentage(){
//     return ((a+b+c)*100)/300
//     r
//     }
    
// function main(){
// return "Avrage is " + avg() + "\n"+" percentage is "+percentage();
// }
// console.log(main())

// Task 5


// function index() {
//    var string = "Hello world, welcome to the JS land.";
//    var indexno= string.indexOf("JS");
//    document.getElementById("demo").innerHTML = indexno;
//    document.write(indexno)
//  }




// Task 6


// function shortcut(a){
//     var a=prompt("Enter a sentence")
//     var b=a.length
//     if(b<=25){

   
//     const vowels = /[aeiou]+/g;
//     return a.replace(vowels, "");
// }
// else{
//     return alert( "you entered more than  25 cahracters in sentence");
// }
//   }
//   console.log(shortcut())

// Task 7


// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res.length : 0;
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);




// Task 8

// var a=+prompt("Enter distance from start Km");
// var b=+prompt("Enter distan to end in Km");
//  alert("First Distance is "+a+"\n"+"second Distance is "+b)

// function meter(){
// var m=(a+b)*1000;
// return "Meters are "+m;
// }

// function feet(){
//     var f=(a+b)*3280.84
//     return "Feet are "+f;    
// }
    
//     function inches(){
//      var  inc=(a+b)* 39370.1
//         return "Inches are "+inc;
//         }
//         function centimeter(){

//            var cm=(a+b)* 100000
//            return "centimeters are "+cm;
//             }
            
//             console.log(meter()); 
//             console.log(feet());
//             console.log(inches());
//             console.log(centimeter());


// Task 9

// function overtime()
// {
// 	var  time_worked, over_time, overtime_pay = 0;
// 	for (i = 1; i <= 10; i++)
// 	{
// 		var time_worked=prompt("Enter the time employee worked in hr ");
//         document.write(" The time employee worked in hr "+time_worked)
//         document.write("<br>")
// 		if (time_worked>40)
// 		{
// 			over_time = time_worked - 40;
// 			overtime_pay = overtime_pay + (12 * over_time);
// 		}
// 	}
// 	return ("Total Overtime Pay Of 10 Employees Is "+ overtime_pay);
	
// }

// console.log(overtime())

// Task 10

// function findNotes()
// {

//     var amount=prompt("Please input amount for withdraw :");
//     document.write("Your Enter Amount Is "+amount+"<br>")

//     //calculations
//     var a=(amount/100);
//     var b=Math.floor(a)
// 	document.write("Required notes of Rs. 100  :  "+b );
//     document.write("<br>")
//     var c=(amount % 100) / 50
//     var d=Math.floor(c)
//     document.write("Required notes of Rs. 50   :  "+d);
//     document.write("<br>")
//     var e=((amount % 100) % 50) / 10
//     var f=Math.floor(e)
//     document.write("Required notes of Rs. 10   :  "+f) ;
//     document.write("<br>")
//     var g= (((amount % 100) % 50) % 10);
//     document.write("Amount still remaining Rs. :  "+g);
//     document.write("<br>")
// 	 return g;
// }
// (findNotes())


// chapter 43 to 48

 // Task 1

// $(document).ready(function(){
//     $("a").click(function(){
//       alert("The link was clicked.");
//     });
//   });


// Task 2


// $(document).ready(function(){
//     $("a").click(function(){
//       alert("Thanks for purchasing a phone from us.");
//     });
//   });

// Task 3

// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
   
//   }

// Task 4

// $('#imageid').hover(function() {
//     $(this).attr('src', 'images/m2.jpg');
//   }, function() {
//     $(this).attr('src', 'images/m1.jpg');
//   });


// Task 5

// let btninc=document.querySelector('#inc')
// let btndcc=document.querySelector('#dc')
// let input=document.querySelector('input')

// btninc.addEventListener('click',()=>{
//     input.value=parseInt(input.value)+1
// });


// btndcc.addEventListener('click',()=>{
//     input.value=parseInt(input.value)-1
// });


// chapter 49 to 52

// Task 1

// var element=document.getElementById("form-content").childNodes;
// var firstname=element[3].value=("Muhammad");

//    var lastname=element[5].value=("Noman");
   
//     var email=element[8].value=("noman@gmail.com");
// function submit(){
   
   
//    document.getElementById("demo").innerHTML=firstname +"<br>"+ lastname +"<br>"+email
  
// }

// Task 2

//  function readmore() { 
//        var readmore = 
//    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of   distinctive coloration patterns that are species-dependent. The hands and feet of  slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals."
  
//     document.getElementById("expand").innerHTML = readmore; 
//    }
 
 
// Task 3

// var element=document.getElementById("form-content").childNodes;
// var firstname=element[3].value=(prompt("Enter student's firstname"));

//    var lastname=element[5].value=(prompt("Enter student's lastname"));
   
//     var email=element[8].value=(prompt("Enter student's email address"));
   
  


// function submit(){
 
   
//    document.getElementById("fn").innerHTML=firstname
//    document.getElementById("ln").innerHTML=lastname 
//    document.getElementById("em").innerHTML=email  
   

  
// }
// function deleteItem(){
//    var del=document.getElementById("data").deleteRow(0)
//    console.log(del)
       
//    }
//    function Edit(e){
//      var item=prompt("Enter new value",e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue=item;
          

//       }




//chapter 58-67

//Task 1

// var dom= document.getElementById("main-content").childNodes;
// console.log(dom);
//Task 2

// var dom= document.getElementById("main-content").childNodes;
// console.log(dom);

//Task 3

// var inner = document.getElementsByClassName("render")[0].innerHTML +
// document.getElementsByClassName("render")[1].innerHTML +
// document.getElementsByClassName("render")[2].innerHTML +
// document.getElementsByClassName("render")[3].innerHTML +
// document.getElementsByClassName("render")[4].innerHTML;
// console.log(inner);

//Task 4

// var firstname=document.getElementById("first-name").value=("Rafia");
// console.log(firstname)

//Task 5
 
// var firstname=document.getElementById("first-name").value=("Muhammad");
// console.log(firstname)
// var lastname=document.getElementById("last-name").value=("Noman");
// console.log(lastname)
// var email=document.getElementById("email").value=("nomi@gmail.com");
// console.log(email)


//Question 2.  use HTML code of question 1 and  show the result on browser.

//Task 1

// var element=document.getElementById("form-content").nodeType;
// console.log(element);

//Task 2

// var lname=document.getElementById("last-name").nodeType;
// console.log(lname);
// var child=document.getElementById("last-name").childNodes;
// console.log(child);
 
//Task 3


// var child=document.getElementById("last-name")
// var textnode = document.createTextNode("Hello");         // Create a text node
// child.appendChild(textnode);
//  console.log(child);
// // after updating 
// var get=document.getElementById("last-name").childNodes;
// console.log(get);

//Task 4

// var get=document.getElementById("main-content").firstChild;
// var get2=document.getElementById("main-content").lastChild;
// console.log(get,get2)

//Task 5

// var get1=document.getElementById("last-name").nextSibling;
// var get2=document.getElementById("last-name").previousSibling;
// console.log(get1);
// console.log(get2);

//Task 6

// var get1=document.getElementById("email").parentNode;
// console.log(get1);
  