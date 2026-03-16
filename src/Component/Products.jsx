import React from "react";
import ProductCard from "./ProductCard.jsx";

const allProducts = [
  // Fruits
  { name: "Strawbery", description: "Fresh strawberry.", price: 2.5, image: "/src/assets/Strawbery.jpg", category: "fruits" },
  { name: "Kiwi", description: "Sweet kiwi.", price: 3, image: "/src/assets/Kiwi.jpg", category: "fruits" },
  { name: "Orange", description: "Juicy orange.", price: 2, image: "/src/assets/Orange.jpg", category: "fruits" },
  { name: "Peach", description: "Delicious peach.", price: 2.8, image: "/src/assets/Peach.jpg", category: "fruits" },
  { name: "Banana", description: "Healthy banana.", price: 1.5, image: "/src/assets/Banana.jpg", category: "fruits" },
  { name: "Apple", description: "Crispy apple.", price: 2.2, image: "/src/assets/Apple.jpg", category: "fruits" },

  // Juice
  { name: "Orange Juice", description: "Fresh orange juice.", price: 4, image: "/src/assets/Orange Juice.jpg", category: "juice" },
  { name: "Mango Juice", description: "Fresh mango juice.", price: 4.5, image: "/src/assets/Mango Juice.jpg", category: "juice" },
  { name: "Strawberry Juice", description: "Fresh strawberry juice.", price: 5, image: "/src/assets/Strawberry Juice.jpg", category: "juice" },
  { name: "Pineapple Juice", description: "Tropical pineapple juice.", price: 4.2, image: "/src/assets/Pineapple Juice.jpg", category: "juice" },
  { name: "Watermelon Juice", description: "Refreshing watermelon juice.", price: 3.8, image: "/src/assets/Watermelon Juice.jpg", category: "juice" },
  { name: "Mixed Fruit Juice", description: "Combo of different fruits.", price: 5.5, image: "/src/assets/Mixed Fruit Juice.jpg", category: "juice" },

  // Vegetables
  { name: "Tomato", description: "Fresh tomato.", price: 1.5, image: "/src/assets/Tomato.jpg", category: "vegetables" },
  { name: "Carrot", description: "Healthy carrot.", price: 1.2, image: "/src/assets/Carrot.jpg", category: "vegetables" },
  { name: "Cucumber", description: "Fresh cucumber.", price: 1.8, image: "/src/assets/Cucumber.jpg", category: "vegetables" },

  // Offers
  { name: "Fruit Box", description: "Mixed fruits offer.", price: 10, image: "/src/assets/Fruit Box.jpg", category: "offers" },
  { name: "Juice Combo", description: "3 fresh juices offer.", price: 12, image: "/src/assets/Juice Combo.jpg", category: "offers" },
  { name: "Vegetable Pack", description: "Fresh vegetable pack.", price: 8, image: "/src/assets/Vegetable Pack.jpg", category: "offers" }
];

function Products({ selectedCategory = "all", isLoggedIn }) {
  const filtered =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="container my-4">
      <div className="row">
        {filtered.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <ProductCard product={product} isLoggedIn={isLoggedIn} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;