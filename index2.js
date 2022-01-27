function getEndPointData(endPointURL, bindingData,rowId){
    const xhr = new XMLHttpRequest();
    xhr.open("Get", endPointURL);
    xhr.onload = function () {
        const data = JSON.parse(xhr.responseText); 
        const datay=Object.keys(data)[0];
         const datax=data[datay];
        console.log(datax);
        bindingData(data,datax,rowId);
  
    }
    xhr.send();
  }
 


function generateCell(title,img) {
  return `<div class="col-lg-3">
    <a href=""><img class="contain-img" src="${img}"><br><p>${title}</p></a>
     </div>`;
}


function bindingData(datay,datax,rowId) {
    
    for(let i in datax){
        var title=datax[i].Name;
        var img =datax[i].Image;
        document.getElementById(`${rowId}`).innerHTML+=generateCell(title,img);
     
    }
}




getEndPointData("latestMeals.json", bindingData,"mealss");
getEndPointData("popularIngredients.json", bindingData,"pop-ing");
getEndPointData("randomMeals.json", bindingData,"rand-meal");
getEndPointData("randomIngredients.json", bindingData,"rand-ing");




document.getElementById("browse-country").addEventListener("load",getbrc());
function getbrc() {
   
    const req = new XMLHttpRequest();
        req.open("Get","flags.json");
        req.onload = function () {
const data =JSON.parse(req.responseText);
const dataf=data.flags;
var outPut="";
for(let i in dataf){
 outPut+=`<div class="col col-lg-1">
    <a href="https://www.google.com"><img class="contain-img" id="country-image" src="${dataf[i]}" alt="">
    </div>`;
}
document.getElementById("browse-countrys").innerHTML = outPut;
        
};
req.send();
}