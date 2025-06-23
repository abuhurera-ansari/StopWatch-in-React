Brand Cart App
Overview
This is a simple React application that allows users to search for brands, add them to a cart, and remove them from the cart. The app uses a predefined list of brands and includes a search filter functionality.
Features

Search Brands: Filter brands by typing in the search input field.
Add to Cart: Add brands to a cart by clicking the "Add to Cart" button.
Remove from Cart: Remove brands from the cart using the "Remove" button.
Dynamic Rendering: Displays the filtered brands and cart contents dynamically.

Technologies Used

React: JavaScript library for building user interfaces.
CSS: For styling the application (via App.css).
JavaScript (ES6+): For logic and state management.

Installation

Clone the repository:git clone <repository-url>


Navigate to the project directory:cd brand-cart-app


Install dependencies:npm install


Start the development server:npm start

The app will be available at http://localhost:3000.

Usage

Search: Type a brand name in the search bar to filter the list of brands.
Add to Cart: Click the "Add to Cart" button next to a brand to add it to your cart.
Remove from Cart: In the "Your Cart" section, click "Remove" next to a brand to remove it from the cart.

Project Structure

src/App.js: Main component containing the app logic and UI.
src/App.css: Styles for the application.
src/index.js: Entry point for the React application.
public/index.html: HTML template for the app.

Future Improvements

Add styling to enhance the UI/UX.
Implement persistent storage (e.g., localStorage) for the cart.
Add validation for duplicate cart entries.
Include unit tests for components and functionality.
