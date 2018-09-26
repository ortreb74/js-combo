function combo(){
  main = document.getElementById("main");  
  
  mainText = main.textContent;
  markedText = main.children[0].textContent;
  console.log(document.querySelector('input[name = "query"]:checked').value);
  modulationText = document.querySelector('input[name = "query"]:checked').value;
  
  result = mainText.replace(markedText, modulationText);
  
  
  var copyText = document.querySelector("#input");
  document.getElementById("input").value  = result;
  copyText.select();
  document.execCommand("Copy");
  

 
}
