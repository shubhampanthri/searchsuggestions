const cities = [];
const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
fetch(url).then(response => response.json()).then(result => cities.push(...result))

function findmatch(value, cities) {
  return cities.filter(elem => {
    var regex = new RegExp(value, 'gi');
    return elem.city.match(regex) || elem.state.match(regex)
  })
}
function displayvalue() {
  var inputvalue = document.getElementById("input").value;
  
 if(inputvalue=="" || inputvalue==" "){
   return document.getElementById("unorderlist").innerHTML = "";
     ;
 }else{
 const findmatcharray = findmatch(inputvalue, cities);
  const html = findmatcharray.map((elem) => {
    const regex = new RegExp(inputvalue, "gi");
    const cityname = elem.city.replace(regex, `<span class="highlighter">${inputvalue}</span>`);
    const statename = elem.state.replace(regex, `<span class="highlighter">${inputvalue}</span>`);
function fun(num) {
return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
     
    return `<li><div class="elem"><p class="cityname">${cityname} , </p><p class="statename"> ${statename} </div><span class="population">${fun(elem.population)}</span> </li>`
  }).join("");
  document.getElementById("unorderlist").innerHTML = html;
   
 }
  
}

