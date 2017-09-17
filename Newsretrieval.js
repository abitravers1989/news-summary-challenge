
(function(exports){
  function Newsretrieval() {
    //  var originalHttpReq = this;
  };

  Newsretrieval.prototype.get = function(){
    var originalHttpReq = this;
    var data;
    var dataFromNewsArray;
    console.log(dataFromNewsArray)

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=test");
    ourRequest.onload = function (){

      data = JSON.parse(ourRequest.responseText);
      dataFromNewsArray = data.response.results;
      originalHttpReq.dataFromNewsArray = dataFromNewsArray

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
