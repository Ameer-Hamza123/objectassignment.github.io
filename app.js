var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

var aa1 = itemsArray[0].name = document.getElementById("name1").innerHTML = "juice";
var ab1 = itemsArray[0].price = document.getElementById("price1").innerHTML = 50;
var bc1 = itemsArray[0].quantity = document.getElementById("quantity1").innerHTML = 3;
var cd1 = document.getElementById("total1").innerHTML = ab1 * bc1;

var aa2 = itemsArray[1].name = document.getElementById("name2").innerHTML = "cookie";
var ab2 = itemsArray[1].price = document.getElementById("price2").innerHTML = 30;
var bc2 = itemsArray[1].quantity = document.getElementById("quantity2").innerHTML = 9;
var cd2 = document.getElementById("total2").innerHTML = ab2 * bc2;

var aa3 = itemsArray[2].name = document.getElementById("name3").innerHTML = "shirt";
var ab3 = itemsArray[2].price = document.getElementById("price3").innerHTML = 880;
var bc3 = itemsArray[2].quantity = document.getElementById("quantity3").innerHTML = 1;
var cd3 = document.getElementById("total3").innerHTML = ab3 * bc3;

var aa4 = itemsArray[3].name = document.getElementById("name4").innerHTML = "pen";
var ab4 = itemsArray[3].price = document.getElementById("price4").innerHTML = 100;
var bc4 = itemsArray[3].quantity = document.getElementById("quantity4").innerHTML = 2;
var cd4 = document.getElementById("total4").innerHTML = ab4 * bc4;

var tot = document.getElementById("itemtotal").innerHTML = bc1 + bc2 + bc3 + bc4;
var total = document.getElementById("pricetotal").innerHTML = cd1 + cd2 + cd3 + cd4;


console.log("Answer no.2")

var oBj = {
    name : "hamza",
    email : "a@h.com",
    password : 123,
    age : 21,
    gender : "male",
    city : "karachi",
    country : "pakistan",
}

console.log(oBj)

console.log("Answer no.3")

function Cont(name, age, course) {
    this.naMe = name;
    this.aGe = age;
    this.coUrse = course;
}

var sTudent1 = new Cont("Aslam", 22, "Web & mobile App");
var sTudent2 = new Cont("Akbar", 20, "Web & mobile App");
var sTudent3 = new Cont("jamal", 24, "Web & mobile App");
var sTudent4 = new Cont("sattar", 19, "Web & mobile App");
var sTudent5 = new Cont("ismail", 21, "Web & mobile App");

console.log(sTudent1, sTudent2, sTudent3, sTudent4, sTudent5);

// var naMe = document.getElementById("name").innerText;
// console.log(naMe);



function data(){
    var name = document.getElementById('name').value;
    console.log('name', name)
    document.getElementById('user_name').innerHTML = name
    var gender = document.getElementById('gender').value;
    console.log('gender', gender)
    document.getElementById('user_gender').innerHTML = gender
    var address = document.getElementById('address').value;
    console.log('address', address)
    document.getElementById('user_address').innerHTML = address
    var education = document.getElementById('education').value;
    console.log('education', education)
    document.getElementById('user_education').innerHTML = education
    var profession = document.getElementById('profession').value;
    console.log('profession', profession)
    document.getElementById('user_profession').innerHTML = profession

    var data = document.getElementById('education').value= localStorage.getItem('education')

    console.log('dta',data)

}

function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
  }

