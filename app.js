
var newsSummary = document.getElementById("news-summary");
var btn = document.getElementById("btn");

btn.addEventListener("click", function (apiurl) {
	var aprirequest = new XMLHttpRequest();
      aprirequest.open('GET', apiurl);
      aprirequest.onload = function() {
        var apidata = JSON.parse(aprirequest.responseText);
        renderHTML(apidata, webUrl);
	};
      aprirequest.send();
  });

function renderHTML(apidata, key) {
	var htmlString = ""
  var infofromJSONkeytoinclude = key;
	for(i=0; i < apidata.length; i++) {
		htmlString += '<li><a href= ' + apidata.response.results[i].+infofromJSONkeytoinclude + '>'+ '</li>'
	}

  newsSummary.insertAdjacentHTML('beforeend', htmlString)
}
