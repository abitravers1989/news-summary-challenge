
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
      renderHTML(dataFromNewsArray)
      console.log("going to render html function")
    };
   ourRequest.send();
  };

  Newsretrieval.prototype.renderHTML = function(dataFromNewsArray){
    var htmlString = "";
    console.log("got string")
    console.log(dataFromNewsArray.length)
    console.log("above was length")
    for (i=0; i< dataFromNewsArray.length; i++){
      var element = dataFromNewsArray[i];
      console.log(element);
      htmlString+=("<li><div>" + element + "</div></li>");
      console.log(htmlString);
    }
  };

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


  exports.Newsretrieval = Newsretrieval;
})(this);

//
newret = new Newsretrieval();
newret.get();
