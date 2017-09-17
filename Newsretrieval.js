
(function(exports){
  function Newsretrieval() {
     var originalHttpReq = this;
     console.log(originalHttpReq)
     var data;
     console.log(data)
     var dataReq;
  };

  Newsretrieval.prototype.get = function(){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=test");
    console.log(ourRequest);
    ourRequest.onload = function (){
      data = JSON.parse(ourRequest.responseText);
      console.log(data)
      console.log(data[0])
      dataReq = data.results;
      console.log(dataReq)
    };
   ourRequest.send();
  };

  exports.Newsretrieval = Newsretrieval;
})(this);


newret = new Newsretrieval();
newret.get();


// function setup(){
//
//   loadJSON("jsonfile.json", gotData);
//
// }
//
// function gotData(data) {
//   printLn(data);
// }






// var newsSummary = document.getElementById("news-summary");
//
// function rednerHTML(data){
//   var htmlString = " ";
//
//   for (i = 0; i < data.length; i++){
//     var element = data[i]
//     console.log(element)
//     var displayList = "<p>" + data[i] + "</p>"
//     console.log(displayList)
//   }
//   newsSummary.insertAdjacentHTML('beforeend', htmlString);
//   console.log(element)
//   console.log(newsSummary)
// }
//
