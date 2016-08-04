
//object construnctor
//remember you can also place functions in objects, array and other info
function BuildObject(name, gender, age){
  this.name= name;
  this.gender = gender;
  this.age = age;
}
//using data with input or forms
var input = prompt("What's your name?");
console.log(input)
$('#names').text("hello there");
var elData;

var myArray = ["Duluth", "minneapolis", "St.Paul", "Lakeville", "Eagan", "Farmington"];
//objects from a construnctor
var newPerson = new BuildObject("Josh", "male", 31);
var newPerson2 = new BuildObject("holly", "female", 28);
console.log(newPerson);
//acces object data [] will return "name" newPerson.name return Josh no ""
console.log("accssing object info",[newPerson.name]);
console.log([newPerson2.gender]);

//creating objects literals
var person = {
  name: "Owen",
  gender: "male",
  age:  3,
};
console.log(person);

//loads after page loads
$(document).ready(function () {
//event listening
$('#btn').on('click', function () {
  //append a div / element into DOM
$('#div').append('<div class="add"><p>Whats up?</p></div');

});
//How Do I console.log data????? is it working how to use
$('#btn2').on('click', function (){
for (var i = 0; i < myArray.length; i++ ){
  $('#dataBox').append("<p>" + myArray[i] + "</p>");
  // var el = $('#dataBox').data("cities", myArray[i]);
  // console.log(el,cities);
  var el;
  el = $('#dataBox').data("color", myArray[i]);
  console.log("data", el.data("color"));

}
});

});
//forEach loop in action
var numArray = [1,2,4,4,5,6,7,8,9,10];
var newArray = [];
numArray.forEach(function (value) {
  newArray.push(value * 5);
console.log("new",newArray);
});
// });
