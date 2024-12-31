document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const productsLink = document.getElementById('products-link');
    const contactLink = document.getElementById('contact-link');

    const homeSection = document.getElementById('home');
    const productsSection = document.getElementById('products');
    const contactSection = document.getElementById('contact');

    const productList = document.getElementById('product-list');
    const loadingSpinner = document.getElementById('loading-spinner');

    const sections = {
        home: homeSection,
        products: productsSection,
        contact: contactSection
    };

    const showSection = (section) => {
        Object.values(sections).forEach(sec => sec.style.display = 'none');
        sections[section].style.display = 'block';
    };

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
    });

    productsLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('products');
        loadProducts();
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('contact');
    });

    const loadProducts = () => {
        productList.innerHTML = ''; 
        loadingSpinner.style.display = 'block'; 
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then(products => {
                products.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.classList.add('product-card');

                    productCard.innerHTML = `
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>$${product.price}</p>
                    `;

                    productList.appendChild(productCard);
                });
            })
            .catch(error => {
                productList.innerHTML = `
                    <div class="error-message">
                        <p>Failed to load products. Please try again later.</p>
                    </div>`;
            })
            .finally(() => {
                loadingSpinner.style.display = 'none'; 
            });
    };

    document.getElementById('view-products').addEventListener('click', () => {
        showSection('products');
        loadProducts();
    });
});
