
(function(exports){
  function Newsretrieval() {
    // var btn = document.getElementById("btn");
  };

  Newsretrieval.prototype.get = function(){
    var originalHttpReq = this;
    var data;
    var dataFromNewsArray;

    var ourRequest = new XMLHttpRequest();

    ourRequest.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=26f12b3f-d1bd-4a56-a2ad-748548099aed");
    ourRequest.onload = function (){

      data = JSON.parse(ourRequest.responseText);
      dataFromNewsArray = data.response.results;
      originalHttpReq.dataFromNewsArray = dataFromNewsArray
      renderHTML(dataFromNewsArray)
      console.log("going to render html function")
    };
   ourRequest.send();
  };

  Newsretrieval.prototype.renderHTML = function(dataFromNewsArray){
    var htmlString = "";
    for (i=0; i< dataFromNewsArray.length; i++){
      htmlString+=("<li><div>" + dataFromNewsArray[i].webTitle + dataFromNewsArray[i].webUrl + "</div></li>");
      console.log(htmlString);
    }
  var guardiannews = document.getElementById("news-display");
  guardiannews.insertAdjacentHTML('beforeend', htmlString);

};
  exports.Newsretrieval = Newsretrieval;
})(this);


newret = new Newsretrieval();
newret.get();

//
