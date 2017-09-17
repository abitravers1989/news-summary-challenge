(function(exports){
  function Newsretrieval() {
    // var btn = document.getElementById("btn");
    // var newsSummary = document.getElementById("news-summary");
  };

   Newsretrieval.prototype.get = function(apiurl){
     var aprirequest = new XMLHttpRequest();
         aprirequest.open('GET', apiurl);
         aprirequest.onload = function() {
           var apidata = JSON.parse(aprirequest.responseText);
           renderHTML(apidata, webUrl);
   	    };
         aprirequest.send();
     };

   function renderHTML(apidata, key) {
   	var htmlString = ""
     var infofromJSONkeytoinclude = key;
   	for(i=0; i < apidata.length; i++) {
   		htmlString += '<li><a href= ' + apidata.response.results[i].+infofromJSONkeytoinclude+'>' + '</li>'
   	};

    //  newsSummary.insertAdjacentHTML('beforeend', htmlString)
  };
   exports.Newsretrieval = Newsretrieval;
 })(this);


 newret = new Newsretrieval("https://content.guardianapis.com/search?q=debates&api-key=26f12b3f-d1bd-4a56-a2ad-748548099aed");
 newret.get();
