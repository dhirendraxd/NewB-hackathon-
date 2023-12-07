function addToCart() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;

    const cartItems = document.getElementById('cartItems');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${quantity} ${name}(s) - ${email}`;
    cartItems.appendChild(cartItem);

    document.getElementById('dataForm').reset();
