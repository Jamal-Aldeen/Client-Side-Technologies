# Pizza Hut Menu Page

This is a simple HTML-based webpage for showcasing the Pizza Hut menu. The page includes a header, navigation bar, a banner section, and a product listing section. Each product card displays an image, price, description, and options for customizing the pizza. Users can add items to their cart or customize them.

## Features
- **Header**: Contains the Pizza Hut logo, quick links (Find a Pizza Hut, Create Account, Sign In), language selector, and contact information (phone number and Halal logo).
- **Navigation Bar**: Provides links to different categories like Pizza, Starters, Salads, Deals, etc. It also includes a button for starting the order.
- **Banner Section**: Displays an image banner along with category links like All, Beef, Chicken, Vegetarian, etc.
- **Product Cards**: Each product card includes an image, price, description, selection options (size, crust type), and action buttons (Customize, Add to Cart).

## Folder Structure

- `index.html`: The main HTML file containing the structure of the webpage.
- `style.css`: The CSS file to style the webpage (ensure this file is linked properly in the HTML `<head>`).
- `/Image/`: Folder containing images like logos, product images, and icons.

## Technologies Used
- **HTML**: The page structure is created using basic HTML tags.
- **CSS**: The page is styled using an external `style.css` file to enhance the visual layout and design.
- **Flexbox**: Used for layout management to display product cards and align content.

## Setup Instructions

1. **Clone the Repository**:
   Clone this repository to your local machine using Git:
   ```bash
   git clone https://github.com/your-username/pizza-hut-menu.git
   ```

2. **Open the HTML file**:
   Open `index.html` in a web browser to view the webpage.
   
3. **Customize Styles (Optional)**:
   Modify the `style.css` file to change the look and feel of the webpage, such as fonts, colors, or spacing.

## File Overview

- **index.html**: Contains the HTML structure and links to other resources like images and stylesheets.
- **style.css**: Provides the styling for the webpage, including layout design, typography, and colors.

## How to Add More Products

To add more products to the menu, you can copy and paste a `<div class="product">` block within the `section.products` element. Be sure to update the image source, title, description, price, and any other relevant details.

Example:
```html
<div class="product">
  <div class="product-image">
    <img src="/Image/your-image.png" alt="New Product">
    <p class="price">EGP 99.99</p>
  </div>
  <div class="product-details">
    <h2>New Product</h2>
    <p>Description of the new product.</p>
    <div class="options">
      <select>
        <option>Pan</option>
        <option>Thin</option>
      </select>
      <select>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </div>
    <div class="actions">
      <button class="customize">Customize</button>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
</div>
```

## Credits

- The product images and icons used in this webpage are for demonstration purposes. Ensure to use the appropriate images and assets as per your project requirements.
- Feel free to modify or extend the webpage as needed.

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Explanation:
- **Features**: A brief overview of the page's sections.
- **Folder Structure**: Describes the structure of the project and the location of files.
- **Technologies Used**: Lists the technologies (HTML, CSS, Flexbox) used in the page.
- **Setup Instructions**: Provides instructions for setting up the project locally.
- **File Overview**: Describes the files included in the project.
- **How to Add More Products**: A guideline on how to extend the page by adding new product cards.
- **Credits**: Mentions the use of images and assets for demonstration.

Feel free to modify this further based on your project needs!
