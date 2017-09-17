var pageCounter = 1;


var newsSummary = document.getElementById("news-summary");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	var guardianRequest = new XMLHttpRequest();
      guardianRequest.open('GET', 'https://content.guardianapis.com/search?q=debates&api-key=26f12b3f-d1bd-4a56-a2ad-748548099aed');
      guardianRequest.onload = function() {
        var apidata = JSON.parse(guardianRequest.responseText);
        renderHTML(apidata, webUrl);
	};
      guardianRequest.send();
  });

function renderHTML(data, key) {
	var htmlString = ""
  var infofromJSONkeytoinclude = key;
	for(i=0; i < data.length; i++) {
		htmlString += '<li><a href= ' + data.response.results[i].+infofromJSONkeytoinclude + '>'+ '</li>'
	}

  newsSummary.insertAdjacentHTML('beforeend', htmlString)
}
