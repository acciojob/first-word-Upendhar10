function firstWord(s) {
  // your code here

	if(typeof s !== "string" || s.trim() === "") return "";

	str = str.trim();
	const spaceIdx = s.indexOf(" "); // returns index of 1st empty char
	return spaceIdx === -1 ? s : s.slice(0, spaceIdx);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
