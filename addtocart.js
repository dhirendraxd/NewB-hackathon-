// Function to handle image upload and validation
function validateImage() {
    var input = document.getElementById('productImage');
    var fileSize = input.files[0].size; // in bytes

    // Max file size: 5MB (5,048,576 bytes)
    if (fileSize > 5048576) {
        alert('Please upload an image with a maximum size of 1MB.');
        input.value = ''; // Clear the file input
    }
}

// Function to add a product to the product list
function addProduct() {
    // Get input values
    var inputImage = document.getElementById("productImage");
    var quantity = document.getElementById("productQuantity").value;
    var productType = document.getElementById("productType").value;

    // Validate image size
    validateImage();

    // Check if an image is selected
    if (inputImage.files.length > 0) {
        var file = inputImage.files[0];

        // Use FileReader to read the selected image
        var reader = new FileReader();
        reader.onload = function (e) {
            // Create a new product item
            var productItem = document.createElement("div");
            productItem.classList.add("productItem");

            // Create elements for image, quantity, and product type
            var imgElement = document.createElement("img");
            imgElement.src = e.target.result; // Display the selected image

            var quantityElement = document.createElement("div");
            quantityElement.textContent = "Quantity: " + quantity;

            var typeElement = document.createElement("div");
            typeElement.textContent = "Type: " + productType;

            // Append elements to the product item
            productItem.appendChild(imgElement);
            productItem.appendChild(quantityElement);
            productItem.appendChild(typeElement);

            // Append the product item to the product list
            document.getElementById("productList").appendChild(productItem);
        };

        // Read the selected image as a data URL
        reader.readAsDataURL(file);
    }

    // Clear input fields
    document.getElementById("productImage").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productType").value = "";
}
