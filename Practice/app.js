// ----------> * <--------========== JawaScript practice ( Chp # 1 to 30 ) ===========-------------> * <----------

// var fullname = prompt("enter your number")
// var num = 7;
// var num = prompt ("Enter your number");
// console.log(num + 5)
// console.log(num + 2)
// console.log(num + 1)


// var num1 = +prompt("enter first num");
// var opt = prompt("Enter opt");
// var num2 = +prompt("enter second num");
// var result;
// // alert(num1 + opt +num2);
// if (opt == "+"){
//  result= num1 + num2;
// }

// if(opt =="-"){
//  result= num1 - num2
// }

// if(opt == "*"){
//     result= num1 * num2;
// }
// alert(result);
// alert(num = num1 + num2);
// alert(num);

// //var person = "Johar";
// var salary = 50000;
// var firstTime = 40000;
// var secondTime = 20000;
// if(salary >= firstTime + secondTime);{
//     alert(" milegi")
// }*/

// //prompt("hello world");

// /*if(true){
//     console.log("johar");
// }

// if(true){
//     console.log("abbas")
// }*/

// /*var name = food; 
// var name2 = fruits;

// //  aina");
// // }*var name = +prompt("enter your food");
// // if(food===biryani){
// //     alert("leka

//var a = +prompt("enter your age","your age is 19");
//alert(a);
//var b = a + 10;
//console.log("the output is", + " " + b)

//var age = 19;
//if(age == 19){
     //   alert("your age is less");
// }


// var lang = prompt("enter your language");

// if (lang === "HTML"){
// alert("your are haired!");
// }

// else if(){

// }

// else {
//     alert("not haired");
// }

// var food = prompt("Enter Your Food");
// if (food === "biryani"){
//     alert("lay aio");
// }

// else if(food === "burger"){
// alert("sahi hai 2 leke ajao");
// }

// else if(food === "fries"){
//     alert("50 k le aina")
// }

// else {
//     alert("ghar mat aio");
// }

// var food = prompt("Enter Your Food");



// if (food === "biryani") {
//     var extraItem = prompt("Enter Your extraItem");
//     if (extraItem === "raita") {
//     alert("sahi he leke ajao")
// } else{
//     alert("chordo bas " + food + " leke ajao")
// }

// }


// else if(food === "burger"){
//     var types = prompt("Enter Burger Types", "anda,zinger,chicken")
// alert("sahi hai 2 leke ajao");
// }

// else if(food === "fries"){
//     alert("50 k le aina")
// }

// else {
//     alert("ghar mat aio");
// }
// 


// reverse method .....

// var word = prompt("Enter your word");
// var check;

// for (var i = word.length - 1; i >= 0; i--){
// console.log(word[i]);
// }

// palindrom App ..........

// var word = prompt("Enter your word");
// var check = "";

// for (var i = word.length - 1; i >= 0; i--){
// check += word[i]
// } 

// if(check === word){
//     console.log(word + " is palindrom word")
// }

// =====================> chp 21 changing case <======================

//    [[[[[[[[[[[ toLowerCase ]]]]]]]]]]]

// var name = "JOHAR";

// name = name.toLowerCase();   
// console.log(name);


// .toUpperCase

//  var name = "johar";

//  name = name.toUpperCase();   
// console.log(name);

// var name = "muhammad hassan";
// name = name.toUpperCase();
// console.log(name);

// ----------------------------- chp # 23 -------------------

// indexfinding ....

// var name = "johar abbas";

// console.log(name.indexOf("r"));

// var name = "hassan ali"
// console.log(name.indexOf("s"))

// calculatar app .........

// var val1 = prompt('Enter your first value');
// var  sign = prompt('Enter your operator');
// var val2 = prompt('Enter your second value');

// console.log(val1+sign+val2);
// if(sign==='+'){
//     alert(+(val1)+(+val2));
// }else if(sign === '-'){
//     alert(val1-val2)
// }else if(sign === '*'){
//     alert(val1*val2)
// }else if(sign === '/'){
//     alert(val1/val2)
// }else if(sign === '%'){
//     alert(val1/val2*100 +'%')
// }


// var equ = prompt('Enter your equation');
// var num = equ.length
// for (var i=0; i<num; i++){
//     if(equ.slice(i,i+1) === '+'||equ.slice(i,i+1) === '-'||equ.slice(i,i+1) === '/'){
//         alert('sign has found')
//     }
// }


// -------------------------------------------------------------------------------------------------------------
//  for(var a = 1 ; a<=100 ; a = a+10){
//     for(var b = a ; b < a+10; b++){
//         document.write(b + " "  + " ")
//     }
//     document.write("<br>");
//  }


// var city = prompt("Enter your city name");
// var arr = ["karachi", "multan", "lahore"];
// for(var i = 0; i < arr.length; i++){
//     if([i] === city){
//  alert("city has found")
//     }else {alert("city is not found")}
// }


// var name = "johar abbas";
// name = name.toUpperCase();
// console.log(name);

// var name = "JOHAR ABBAS";
// name = name.toLowerCase();
// console.log(name);


// var name = "johar abbas";
// console.log(name.indexOf("r"));

// var arr = "muhammad ali";
// console.log(arr.indexOf("d"));

// var arr = "muhammad hussain jaffari";
// console.log(arr.indexOf("a"))


// var str = prompt("Enter your word");

// var splitstr = str.split("").reverse().join("");
// if (str === splitstr) {
//     console.log("it's a palindrome word");
// }else{
//     console.log("it's not a palindrome word");



// var name = 10 + "5";
// console.log(name)
// var firstName = "ali";
// var secondName = "hassan";
// console.log(firstName + " " + secondName);

// var age = 19;
// alert('your age is ' + 19);

// var name = "ali";
// if(name == "ali1"){
//     alert(name);
// }else{
// alert(false);
// }.

// document.write(" well come to  \ 'baltistan\' ." );
// document.write('well come to \ "baltistan"\ .');

//  document.write("well come to \\ baltistan.")

//  document.write((2 + 5) - 6 * 3 / 9);
 
//  document.write(2 + 5 - (6 * 3) / 9);

//  document.write(2 + 5 - 6 * 3 / (9));

// var num = 1 + 5 + 6;
// console.log(num);

// var name = "ali" +" "+ "hassan";
// console.log(name);


// var age = 25;
//  if(age <= 25) 
//  { 
//  alert('This is true condition');
//  }
//  else
//  { 
//  alert('This is false condition'); 
//  }  
    


// var age = 28;
// if(age < 25)
//  { 
//  alert('This is true condition');
//  } 
//  else 
//  { 
//  alert('This is false condition'); 
//  }

// var age = 24;
//  if(age > 25) 
//  { 
//  alert('This is true condition');
//  } 
//  else
//  { 
//  alert('This is false condition'); 
//  }

// var age = 26;
//  if(age >= 25) 
//  { 
//  alert('This is true condition');
//  }
//  else
//  { 
//  alert('This is false condition'); 
//  }


// var age = 28;
//  if(age != 26) 
//  { 
//  alert('This is true condition');
//  }
//  else
//  { 
//  alert('This is false condition'); 
//  }

// var nam = i;
// for(var i = 0;1 > 10;)

// var i;
//  for(i=0; i<=10; i++)
//  {
//  document.write('Javascript');
//  }

// var i;
//  for(i=0; i < 10; i++)
//  { document.write('Javascript' + " " + "<br>"); }

// var i;
//  for(i=1; i<=10; i++)
//  { 
//  document.write(i); 
//  }


// var i;
//  for(i=3; i <= 9; i++)
//  { 
//  document.write(i + '<br/>'); 
//  }
 
// var i;
//  for(i = 10; i >= 1; i--)
//  { 
//  document.write(i + '<br/>'); 
//  }
 

// var i;
//  for(i=1; i <= 10; i++)
//  {
//  document.write('2 x ' + i + ' = ' + 2 * i + '<br/>');
//  }





// var i;
// for(i=1; 1 <= 10; i++)
// {
// document.write('2x' + i + ' = ' + 2 * i + '</br>');
// }


// var i;
//  while(i < 10) {
//  document.write(i + '<br/>'); 
//  i++;
//  }


// var i = 1;
//  do{
//  document.write(i + '<br/>');
//  i++;
//  } while(i >= 10);

// var a = [1,5,18,'JavaScript',36,54];
// console.log(a);

//  var a = [1,5,18,25,36,40,45,54];
//  console.log(a);

// var a = [2,5,9,15,18,27];
// document.write(a[0]);


// var things = new 
// Array("chair","table","door","window","wall");
//  for(var i=0; i<things.length; i++) 
//  {
//  document.write(things[i] + "<br/>");
//  }

// var things = new 
// Array("chair","table","door","window","wall");
//  var total = things.join("-");
//  document.write(total);

// var things = new 
// Array("chair","table","door","apple","wall");
//  things.sort();
//  for(var i=0; i<things.length; i++) 
//  {
//  document.write(things[i] + " ");
//  }

// var thing = ["chair","table","door","apple","wall"];
// thing.reverse();
// console.log(thing);

// var name = [" johar abbas"];
// var name.joinn
//  console.log(name);

// var name = ["johar","abbas"];
// document.write(name.indexOf('abbas'));

// var things = new 
// Array("chair","table","door","apple","wall");
//  document.write(things.indexOf('door'));

// var fruit = new
// Array("apple","mango","orange");
// document.write(fruit.indexOf('orange'))

// var things = new 
// Array("chair","table","door","apple","wall");
//  document.write(things.length);


// function printText() 
//  {
//  document.write("This is a function" + "<br/>");
//  }
 
//  printText();

// function doSum()
//  {
//  document.write(5+4);
//  }


// function doSum(num1 , num2) 
//  {
//  document.write(num1 + num2 + '<br/>');
//  }


// function doSum(num1 , num2) 
//  {
//  document.write(num1 + num2);
//  }
 
//  doSum(4,6);
//  doSum(25,7);
//  doSum(1,30);

// function doSum(num1 , num2) 
//  {
//  return(num1 + num2);
//  }
//  var ans = doSum(24,5);
//  document.write(ans);


// if(confirm("Are you sure you want to do that?")) 
//  {
//  alert("You said yes");
//  }
//  else 
//  {
//  alert("You said no");
//  }



// var ans = prompt("What is your name?" , "");
//  if(ans)
//  { alert("My name is " + ans); }
//  else
//  { alert("You refused to answer"); }

//  var num = 1;
//  var newNum = num++;
//  console.log(num);

//  var num = 1;
//  var newNum = ++num;
// console.log(num);

//  var num = 1;
//  var newNum = num--;
// console.log(num);

// var num = 1;
//  var newNum = --num;
// console.log(num);

// resultOfComputation = ((2 * 4) * 4) + 2;
// console.log(resultOfComputation);


// resultOfComputation = (2 * 4) * (4 + 2);
// console.log(resultOfComputation);


// alert("2 plus 2 equals " + 2 + 2);

//var question = "Your species?";
//  var defaultAnswer = "human";
//  var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;

// var ans = prompt("What is your name?" , "");
//  if(ans)
//  { alert("My name is " + ans); }
//  else
//  { alert("You refused to answer"); }


// var x = prompt("Where does the Pope live?");
//  if (x === "Baltistan") {
//  alert("Correct!");
// } 

//  var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
//  score++;
//  userIQ = "genius";
//  alert("Correct!");
//  }

// var my_name = 'Ameen';
//  if(my_name == 'Ameen1')
//  {
//  alert('Hi Mr. Ameen');
//  }
//  else
//  {
//  alert('I dont know');
// //  } 


// var age = 24;
//  if(age < 25)
//  { 
//  alert('This is true condition');
//  } 
//  else 
//  { 
//  alert('This is false condition'); 
//  }

// var age = 24;
//  if(age > 25) 
//  { 
//  alert('This is true condition');
//  } 
//  else
//  { 
//  alert('This is false condition'); 
//  }

// var age = 25;
//  if(age <= 25) 
//  { 
//  alert('This is true condition');
//  }
//  else
//  { 
//  alert('This is false condition'); 
//  }

// var age = 26;
//  if(age >= 25) 
//  { 
//  alert('This is true condition');
//  }
//  else
//  { 
//  alert('This is false condition'); 
//  }

// var age = 26;
//  if(age != 25) 
//  { 
//  alert('This is true condition');
//  }
//  else
//  { 
//  alert('This is false condition'); 
//  }

        // var weatherDegree = 15;
          //  if(!(weatherDegree < 10))
            //  
              //  alert('Normal Weather');
               //
                  //  else
//  {
//  alert('Winter Season'); 
//  }


//        chp # 21 
//      changing case 


//  var msg = "THIS IS STRING OBJECT";
//  document.write(msg.toLowerCase());
 //   chp # 22
 // length properity

// var msg = "This is String";
//  document.write(msg.length);

// var msg = 27;
//  document.write(msg.toString());

// var str = "johar";
// console.log(str.indexOf("h"));







//  var name = "JOHAR";

//  name = name.toLowerCase();   
//  console.log(name);


// .toUpperCase

//  var name = "johar";

//  name = name.toUpperCase();   
// console.log(name);

// var name = "muhammad hassan";
// name = name.toUpperCase();
// console.log(name);

// ----------------------------- chp # 23 -------------------

// indexfinding ....

// var name = "johar abbas";

// console.log(name.indexOf("r"));

// var name = "hassan ali"
// console.log(name.indexOf("s"))




// var name = "hi! i am ali";
// name = name.toUpperCase();
// console.log(name);


// var num2 = "HI! I AM M ALI";
// num2 = num2.toLowerCase();
// console.log(num2);


// var num3 = "Hi! i am M Ali";
// console.log(num3.length);




// var num4 = "Hi! i am m ali";
// console.log(num4.indexOf("i"))



// var num = "HI! I AM JOHAR";
// num = num.toLowerCase();
// console.log(num);


// var num = "hi! i am johar";
// num = num.toUpperCase();
// console.log(num);


// var num = "hi! i am johar";
// console.log(num.length);


// var num = "hi! i am johar";
// console.log(num.indexOf("j"));




// var str = "zawar muhammad ali";
// var arr = [];
// var words = str.split(" ");
// for(var i = 0; i < words.length; i++){
//   var result = words[i][0].toUpperCase() + words[i].slice(1)
//   arr.push(result)
// }
// console.log(arr.join(" "));


// var str = "hello, my name is johar";
// for(var i = 0; i < str.length; i++){
//  if (str.slice(i,i + 5) == 'johar') {
//     console.log(true);
//   }
// }


// var str = "hello, my name is johar abbas";
// for(var i = 0; i < str.length; i++){
//  if (str.slice(i,i + 5) == 'johar') {
//   console.log(i)
//   break;
//   }
// }


// var str = "hello, my name is johar abbas";
// console.log(str.slice(18));

// var str = "hello, my name is johar abbas";
// for(var i = 0; i < str.length; i++){
//  if (str.slice(i,i + 5) == 'johar') {
//   str = (str.slice(0, i)) + "smit" + " " + str.slice(i)
//   break;
//   }
// }
// console.log(str);


// var str = "hello, my name is johar abbas";
// for(var i = 0; i < str.length; i++){
//  if (str.slice(i,i + 5) == 'johar') {
//   str = (str.slice()) + "hello, my name is qaisar" + " " + str.slice(i)
//   break;
//   }
// }
// console.log(str);


// var str = "johar abbas";
// console.log(str.indexOf("h"));


// var str = "johar abbas";
// console.log(str.lastIndexOf("h"));

// var str = "johar abbas";
// console.log(str.charAt("2"));


// ch p# 24
// var str = "hello, my name is johar abbas!";
// for(var i = 0; i < str.length; i++){
//   console.log(str.charAt(i));
// }

// chp # 25

// var str = "hello, my name is ahmed ali";
// console.log(str.replace("ahmed","smit"));

// var str = "hello, my name is ahmed ali ahmed";
//  console.log(str.replaceAll("ahmed","smit"))



// var num = "HI! I AM JOHAR";
// num = num.toLowerCase();
//  console.log(num);


// var num = "hi! i am johar";
// num = num.toUpperCase();
// console.log(num);


// var str = "hi, i am ahmed";
// num =  str.toUpperCase();
// console.log(num);

// var str = "HI, I AM JHON";
// words = str.toLowerCase();
// console.log(words);

// var str = "HI, I AM JHON";
//  console.log(str.toLowerCase());


// var str = "hi, i am jhon";
// console.log(str.length);


// var str = "hi, my name is ali";
// console.log(str.indexOf("m"))

// var str = "hi, my name is ali";
// console.log(str.lastIndexOf("n"));

// var str = "hi, my name is ali";
// console.log(str.charAt(4));

// var str = "hi, my name is ali";
// console.log(str.replace("ali","smit"));



//  var str = "ali muhammad ali";
//  var arr = [];
// var words = str.split(" ");
//    for(var i = 0; i < words.length; i++){
//      var result = words[i][0].toUpperCase() + words[i].slice(1)
//      arr.push(result)
//    }

// console.log(arr.join(" "));



// var str = "zawar muhammad ali";
// var arr = [];
// var words = str.split(" ");
// for(var i = 0; i < words.length; i++){
//   var result = words[i][0].toUpperCase() + words[i].slice(1)
//   arr.push(result)
// }
// console.log(arr.join(" "));


// var str = "zawar muhammad ali";
// var arr = [];
// var words = str.split(" ");
// for(var i = 0; i < words.length; i++){
// var result = words[i][0].toUpperCase() + words[i].slice(1)
// arr.push(result)
// }
// console.log(arr.join(" "));

// CORRECT ANSWAER ; 

// var str = "zawar muhammad ";
// var arr = [];
// var words = str.split(" ");
// for(var i = 0; i < words.length; i++){
// var result = words[i][0].toUpperCase() + words[i].slice(1)
//  arr.push(result);
// }

// console.log(arr.join(" "));


// var msg = "This is String";
// document.write(msg.big());

// var msg = "This is String";
//  document.write(msg.bold());

//  var msg = "This is String";
//  document.write(msg.charAt(0));

// var msg = "This is String";
//  document.write(msg.charCodeAt(0));


// var msg = "This is JavaScript";
//  document.write(msg.fontcolor('red'));


// var str = "Hello World";
// document.write(str.fontcolor('blue'));


// var msg = "Hi! my name is johar abbas";
// document.write(msg.italics());


// var str1 = "johar";
// var str2 = "abbas";
// document.write(str1.concat(str2));


// var str1 = "Java ";
//  var str2 = "Script!";
//  document.write(str1.concat(str2));


// var str = "johar abbas";
// document.write(str.fontsize(8));


// var str = "jawa script";
// console.log(str.indexOf("script"));


// var mystr = "Java Script";
//  document.write(mystr.indexOf("Script"));


// var mystr = "Welcome to Java Script";
//  document.write(mystr.lastIndexOf("p"));


// var str = "Welcome to Java Script";
//  document.write(str.search("jawa"));


//var mystr = "JavaScript";
//  document.write(mystr.slice(2));

 
//  var mystr = "JavaScript";
//  document.write(mystr.slice(2,5));

// var mystr = "JavaScript";
//  document.write(mystr.slice(-2));

// ============ chp # 26 ===============================

// var num = 1.5;
// var round = Math.round(num);
// console.log(round);

// var num = 2.6;
// var round = Math.round(num);
// console.log(round);

// var num = 8.9;
// var round = Math.round(num);
// console.log(round);


// var num1 = 89.90;
// var round = Math.round(num1);
// console.log(round);

// var num = 89.90;
// var round = Math.ceil(num);
// console.log(round);

// var num = 1.2;
// var round = Math.ceil(num);
// console.log(round);


// var num = 1.2;
// var round = Math.floor(num);
// console.log(round);


// var myNum = 16.89;
// var round = Math.floor(myNum);
// console.log(round);

// ===================== chp # 27 ==========================

// var headuser = prompt("enter heads username");
// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2;
 
// var floor = Math.floor(toss)
// if(floor === 0){
//   alert("Heads " + headuser + " win the toss")
// }else{
//   alert("tails " + tailsuser + " win the toss")
// }


// var headuser = prompt("enter heads username");
// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)


// if(floor === 0){
//   alert("Head " + headuser + " win the toss");
// }else{
//   alert("Tails " + tailsuser + " win the toss");
// }

// var headuser = prompt("enter your head username");
// var tailsuser = prompt("enter your tails username");

// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
 
// if(floor === 0){
//   alert("Head " + headuser + " win the toss")
// }else{
//   alert("tails " + tailsuser + " win the toss")
// }

//  var headuser = prompt("enter heads username");

// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)


// if(floor === 0){
//   alert("Head " + headuser + " win the toss");
// }else{
//   alert("Tails " + tailsuser + " win the toss");
// }

// var headuser = prompt("enter head username");
// var tailsuser = prompt("enter tails username");

// var toss = Math.random() * 2;
// var floor = Math.floor(toss);

// if(floor === 0){
//   alert("Head " + headuser + " win the toss")
// }else{
//   alert("tails " + tailsuser + " win the toss")
// }


// ================= chp # 28 ======================

// CONVERTING STRING TO INTEGERS AND DECIMALS //

// var msg = 27;
// var change = msg.parseInt
//  console.log(change);


// convert into string 

// var num = 27;
// // console.log(num.toString());

// // // convert into number

//  var num = "27";
//  console.log(num.toNumber())

// var myInteger = parseInt("1.9999");

// console.log(myInteger)

// =========== chp # 30 ============

// var num = 10.54545454;
// var cont = num.toFixed(2)
// console.log(cont);


// var num = 5.737738;
// var cont = num.toFixed(1);
// console.log(cont);

// var num = 2.6836329;
// var cont = num.toFixed(3);
// console.log(cont);

