document.write("1. Take an array containing numerical values and remove negative values using the  array function. "+"<br>");
document.write("--------------------------------------------------------------"+"<br>");
let arr=[-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
document.write("The elements are : "+arr+"<br>");
let b=arr.filter(function(value,index,array){
    return value>=0;
});
console.log(b);
document.write("The output : "+b);

