var nameNumber = 33;
var nameBigInt = 9007199254740991n;
var nameString = "Dmytro";
var nameBoolean = true;
let nameNull = null;
var nameUndefined;
var nameObject = Object();
var nameSymbol = Symbol();
var nameFunction = function(){}; 



alert('nameNumber' + '-' + 
typeof nameNumber + "\n" + 'nameBigInt' + '-' + 
typeof nameBigInt + "\n" + 'nameString' + '-' +
typeof nameString + "\n" + 'nameBoolean' + '-' + 
typeof nameBoolean + 
"\n" + 'nameNull' + '-' + nameNull + "\n" 
+ 'nameUndefined' + '-' +
typeof nameUndefined + "\n" + 'nameObject' + '-' +
typeof nameObject +"\n" + 'nameSymbol' + '-' +
typeof nameSymbol + "\n" + 'nameFunction' + '-' +
typeof nameFunction);