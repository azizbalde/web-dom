document.getElementById("demo").innerHTML = "Hello World!";

document.getElementById("btn").addEventListener('mouseover', function mouseover() {
	document.getElementById("nom").value = "mouseover"; 
	document.getElementById("body").style.backgroundColor = "pink";
});

document.getElementById('btn').addEventListener('click', function cli() {
	document.getElementById("body").style.backgroundColor = "white";
})