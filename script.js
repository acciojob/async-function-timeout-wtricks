//your JS code here. If required.
document.getElementById("btn").onclick = async () => {
	const res = await new Promise((res) => {
		setTimeout(res, document.getElementById("delay").value, document.getElementById("text").value);
	})

	document.getElementById("output").textContent = res;
}