// write js code here corresponding to matches.html


var getArr = JSON.parse(localStorage.getItem("schedule"));
console.log(getArr);
var Dfavourities=  JSON.parse(localStorage.getItem("favourites")) || [];

displayData(getArr)

function displayData(ok)
{

ok.forEach(function(elem,index){
    
    

var tr = document.createElement("tr");

var td1 = document.createElement("td");
td1.innerText=elem.matchnum
var td2 = document.createElement("td");
td2.innerText=elem.A
var tr3 = document.createElement("td");
td3.innerText=elem.B
var tr4 = document.createElement("td");
td4.innerText=elem.date
var tr5 = document.createElement("td");
td5.innerText=elem.venue
var tr6 = document.createElement("td");
td6.innerText="Add to td Favourities"
td6.style.color="blue";
td6.style.cursor="pointer";
td6.addEventListener("click",eveF);

tr.append(td1, td2, td3, td4, td5, td6)

console.log(td1);
document.getElementById("body").append(tr);




});

}


function eveF()
{
    
    localStorage.setItem("favourites", JSON.stringify(Dfavourities))

}













