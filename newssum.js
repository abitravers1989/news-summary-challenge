var newsSummary = document.getElementById("news-summary");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET", "https://content.guardianapis.com/search?q=debates&api-key=26f12b3f-d1bd-4a56-a2ad-748548099aed")
    console.log(ourRequest)
    ourRequest.onload = function (){
       var data = JSON.parse(ourRequest.responseText);
       var dataResult = data.responseText.result;
       console.log(dataResult);

    };
    ourRequest.send();
});

function rednerHTML(data){
  var htmlString = " ";

  for (i = 0; i < data.length; i++){
    var element = data[i]
    console.log(element)
    var displayList = "<p>" + data[i] + "</p>"
    console.log(displayList)
  }
  newsSummary.insertAdjacentHTML('beforeend', htmlString);
  console.log(element)
  console.log(newsSummary)
}




//
// textapi.summarize({
//   url: 'http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate',
//   sentences_number: 3
// }, function(error, response) {
//   if (error === null) {
//     response.sentences.forEach(function(s) {
//       console.log(s);
//     });
//   }
// });
//
//
// function setup(){
//
//   loadJSON("jsonfile.json", gotData);
//
// }
//
// function gotData(data) {
//   printLn(data);
// }
