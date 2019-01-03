
console.log("Hi");

var yOrN = document.getElementById("yOrN");
var habitDetails = document.getElementById("habitDetails");
var addHabit = document.getElementById("addHabit");
var ul = document.getElementById("habitList");

function createLi(){
   var text = document.createTextNode(habitDetails.value);
   var li = document.createElement("li");
   li.appendChild(text);
   ul.appendChild(li);
   habitDetails.value = "";
}

function clickValid(){
   if (habitDetails.value.length > 0){
      createLi();
   }

}

function keypressValid(){
   // console.log(event.which);
   if (habitDetails.value.length > 0 && event.keyCode === 13){
      createLi();
   }

}


addHabit.addEventListener("click", clickValid);
habitDetails.addEventListener("keypress",keypressValid);
