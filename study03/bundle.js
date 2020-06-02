(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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

},{"fs":1}]},{},[2]);
