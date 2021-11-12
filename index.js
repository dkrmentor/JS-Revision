/* multi line comment */
//console blue = int ! console string black or red
//var -> over ridable
//let (only use within function->within curly bracket -> block level ->if u make in fucntion u can only use in function)
//const (never changeable value of the const assgn variable )


// 1.WAYS TO PRINT IN JS
// console.log("Hello World")
// alert("me")
// document.write("This is document write")

// 2.CONSOLE API
// console.warn("warning")
// console.error("error")
// console.clear()
// console.assert(4==6)
// console.assert(4==(6-2))
// console.log("add 2+4 =",2+4, "adition done")

//3.JS Variable
// variable: containers to store data values
// var num = 34;
// var num2 = 56;
// console.log(num+num2);

//4.Data Types

/*
        at  a very high level , there are two type of data type in JS
        1.primitive:undefined, null, numbers, strings, boolean, symbol
        2.reference:arrays, objects

*/
//num
// var num1 =455;
// var num2 = 56.76;
// console.log(num1 , num2);
// string
// var str1 = "This is a string"
// var str2 = 'This is a string'
// console.log(str1 , str2);
// objects
// var marks={
//     dhara:99.977,
//     ravi:78,
//     shubham:34,
// }
// console.log(marks);
//boolean
// var a = "true";
// var b ="false";
// console.log(a,b);
//undefined
// var und;
// console.log(und);
//null
// var n = null;
// console.log(n);
// var arr = [1,"dhara","string sdasdas",4,5]
// console.log(arr)
//count start from 0 in array
// console.log(arr[4])
// console.log(arr[1])

//5.Arthemetic Operators (+ - / *)
// var a =34;
// var b =56;
// console.log("the value of a + b is :",a+b);
// console.log("the value of a + b is :",a-b);
// //or you can do it like this
// console.log("the value of a + b is : "+(a+b));
// console.log("the value of a + b is : "+(a-b));

//6.Assignment Operators ()
// var b=56;
// var c=b;
// console.log(c);   
// console.log(c+=2);
// console.log(c-=2);
// console.log(c*=2);
// console.log(c/=2);

//7.Comparision Operators ()
// var x =43;
// var y =56;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)
// console.log(x>y)
// console.log(x<y)

//8.Logical Operators () 
// and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// not
// console.log(!true);
// console.log(false);

//8.functions() 
//dry principle = > do not repeat ur self
// function avg(a,b){
//    c=(a+b)/2
//    return c;
// }
// c1=avg(4,6);
// c2=avg(14,16);
// console.log(c1,c2); 

//9.Conditions
//single if
// var age = 24;
// if(age>18){
//         console.log('you can drink rasna water');
// }
//if else
// var age = 4;
// if(age>18){
//         console.log('you can drink rasna water');
// }
// else{
//         console.log("you cannot drink rasna water");
// }
//if else ladder
// var age = 21;
// if(age>60){
//         console.log('your should be retired ');
// }
// else if(age>30){
//         console.log("you should have kids now");
// }
// else if(age>25){
//         console.log("you should have get married now");
// }
// else{
//         console.log("you should focus only on study");
// }
// console.log("end of ladder")

//10.task
// make fucntion which took 1 number  in input and tell if u can drink rasna water or not
// function task(age){
//         if(age>18){
//                 console.log("you can drink rasna water");
//         }
//         else{
//                 console.log("you cannot drink rasna water");
//         }
// }
// console.log(task(21))

//11.loop
//for
// var arr = [2, 4, 5, 6, 7, 8, 90, 22]
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
// }
//for each
// var arr = [2, 4, 5, 6, 7, 8, 90, 22]
// arr.forEach(function(element){
//         console.log(element);
// })
//while
// var arr = [2, 4, 5, 6, 7, 8, 90, 22]
// let j =0;
// while(j<arr.length){
//         console.log(arr[j]);
//         j++;
// }
//do-while
// var arr = [2, 4, 5, 6, 7, 8, 90, 22]
// let j = 0;
// do{
//         console.log(arr[j]);
//         j++;
// }
// while (j < arr.length);

//1:47:00




















