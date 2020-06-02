function func1(){
	alert("func1");
}

function func3(e){
	/*
	var fin = new FileReader();
	fin.readAsText("./fin.txt");
	*/
	var src = document.getElementById("fin");
	var val = src.files;
	console.log(val);
}

function func4(e){
	const fs = require("fs");
	fs.writeFileSync("./fout.txt", "hogehoge");
}

function readTextFile(){
	var file = "./fin.txt";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function (){
		if(rawFile.readyState === 4){
			if(rawFile.status === 200 || rawFile.status == 0){
				var allText = rawFile.responseText;
				console.log(allText);
			}
		}
	}
	rawFile.send(null);
}


window.onload = function(){
	document.getElementById("func1").onclick = func1;
	document.getElementById("func2").onclick = function(){
		alert("func2");
	};
	//document.getElementById("func3").onclick = readTextFile;
	document.getElementById("func3").onclick = func4;

}
