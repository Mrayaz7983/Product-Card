let title = prompt("Enter Product Title:");
let description = prompt("Enter Product Description:");
let buttonTitle = prompt("Enter Button Title:");
let buttonLink = prompt("Enter Button Link:");
let imgLink = prompt("Enter Image Link (must be hosted online):");

let card = document.createElement("div");
card.style.width = "300px";
card.style.border = "1px solid #ddd";
card.style.borderRadius = "10px";
card.style.padding = "15px";
card.style.textAlign = "center";
card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
card.style.margin = "20px auto";
card.style.fontFamily = "Arial, sans-serif";

let image = document.createElement("img");  
image.src = imgLink;                       
image.alt = "User provided image";          
image.style.width = "100%";
image.style.borderRadius = "10px";
image.style.display = "block";
image.style.margin = "10px auto";


image.onerror = function () {
    alert("Error: Invalid image link! Please enter a correct hosted image URL.");
};

let productTitle = document.createElement("h2");
productTitle.textContent = title;

let productDescription = document.createElement("p");
productDescription.textContent = description;
productDescription.style.color = "#555";

let button = document.createElement("a");
button.textContent = buttonTitle;
button.href = buttonLink;
button.target = "_blank";
button.style.display = "inline-block";
button.style.padding = "10px 15px";
button.style.backgroundColor = "#007bff";
button.style.color = "#fff";
button.style.textDecoration = "none";
button.style.borderRadius = "5px";
button.style.marginTop = "10px";

card.appendChild(image);  
card.appendChild(productTitle);
card.appendChild(productDescription);
card.appendChild(button);

document.body.appendChild(card);


