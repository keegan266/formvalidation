var newStr = "My name is Stitch - Rambo was tough to watch";
// console.log(newStr.length);
// console.log(newStr.charAt(5));

// for(var i = 0; i < newStr.length; i++)
// {
//     console.log(newStr.charAt(i));
// }

//Validation//

var phoneNumber = "417k-447-8297";
var regex = /\d{3}[-.]\d{3}[-.]\d{4}/;
var isValid = regex.test(phoneNumber);
console.log(isValid);

//Extraction//
var address = "1001 N Chestnut Expressway, Springfield, MO 65807";
var nameTest = address.match(/[A-Z]+\s\d{5}$/g);
console.log(nameTest);

//Replace//
name = "Keegan does Javascript, aloha keegan";
var replaceIt = name.replace(/keegan/, "Stitch")
console.log(replaceIt);