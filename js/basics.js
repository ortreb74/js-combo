function combo(){
  main = document.getElementById("main");  
  
  mainText = main.textContent;
  markedText = main.children[0].textContent;
  modulationText = document.getElementById("modulation").textContent;
   
  console.log(mainText);
  console.log(markedText);
  console.log(modulationText);
  
  result = mainText.replace(markedText, modulationText);
  console.log(result);
  
var copyText = document.querySelector("#input");
  document.getElementById("input").value  = result;
  copyText.select();
  document.execCommand("Copy");
  
  //copyToClipboard(result);
 
}

function copyToClipboard(stringToPaste) {
	/*document.getElementById("copyTextArea").value = "";*/
	document.getElementById("copyTextArea").textContent = stringToPaste;	
	document.getElementById("copyTextArea").select;
	document.execCommand('copy') ;	
	
}

function addToInsideConsole(text) {
  // crée un nouvel élément div
  // et lui donne un peu de contenu
  const nouveauDiv = document.createElement("div");
  const nouveauContenu = document.createTextNode(text);
  nouveauDiv.appendChild(nouveauContenu) //ajoute le contenu au div
  
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  const divActuel = document.getElementById("console");
  document.body.insertBefore(nouveauDiv, divActuel);
}

