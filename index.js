// Remove the existing main element (if it exists)
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new h1 element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Mario is the champion"; // Replace with your name

// Append the new h1 element to the body
document.body.append(newHeader);
