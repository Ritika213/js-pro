const fruits=["banana","orange","apple","mango"];
const loadfruits = () => {
	document.getElementById("fruits").innerHTML=fruits;
}
const myfunction = () => {
	var fruit=prompt("what is your favourite fruit?");
	fruits[fruits.length]=fruit;
	document.getElementById("fruits").innerHTML=fruits;
}