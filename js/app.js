console.log("Linked.")

const button = document.getElementById("calculateButton");
button.addEventListener("click", ()=>{
	const input1 = parseInt(document.getElementById("input1").value);
	const input2 = parseInt(document.getElementById("input2").value);
	const div = document.getElementById("sum");
	div.textContent = input1 + input2 
});