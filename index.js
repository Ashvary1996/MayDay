// write js code here corresponding to index.html
// You should add submit event on the form



var dataArr = JSON.parse(localStorage.getItem("schedule"))||[] ;
document.getElementById("masaiForm").addEventListener("submit",event1);

function event1(event)
{

    
    event.preventDefault();
    var dat = 
    {

    matchnum : document.getElementById("matchNum").value ,
    // matchnum.innerText=matchNum.value

     A : document.getElementById("teamA").value,
    // teamA.innerText=teamA.value

     B : document.getElementById("teamB").value ,
    // teamB.innerText=teamB.value

     date : document.getElementById("date").value,
    // date.innerText=date.value

     venue : document.getElementById("venue").value,
    // venue.innerText=venue.value

    

    }

    console.log(dat);



    // dataArr.append(dat)
   

    localStorage.setItem("schedule",JSON.stringify(dataArr))

   


}
