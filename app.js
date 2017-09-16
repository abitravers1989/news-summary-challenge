var pageCounter = 1;


var newsSummary = document.getElementById("news-summary");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){

  var ourRequest = new XMLHttpRequest();

  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function(){
    if(ourRequest.status >= 200 && ourRequest.status < 400){
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData[1].name);
      rednerHTML(ourData);
    } else {
      console.log("connected to server but it encountered an error")
    }

  };


  ourRequest.send();
  pageCounter++;
  if(pageCounter > 3){
    btn.classList.add("hide-me");
  }
});

function rednerHTML(data){
  var htmlString = " ";

  for (i = 0; i < data.length; i++){
    htmlString += "<p> " + data[i].name + "is a " + data[i].species + "</p>";

    for (ii =0; ii<data[i].foods.likes.length; ii++){
      if (ii ===0){
      htmlString +=data[i].foods.likes[ii];
    } else {
      htmlString +=" and" + data[i].foods.likes[ii];
    }
    }
   htmlString += ''.''</p>'';
  }
   newsSummary.insertAdjacentHTML('beforeend', htmlString);
}
