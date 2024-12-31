const productsContainer = document.querySelector('.products');
const request = new XMLHttpRequest();

request.open('GET', 'https://fakestoreapi.com/products/1');
request.send();

request.addEventListener('load', function() {
    console.log(this.responseText);  // Log the raw response text without converting
    const data = JSON.parse(this.responseText);  // Parse the response text as JSON
    console.log(data);  // Log the parsed data object
});
