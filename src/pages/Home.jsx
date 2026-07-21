import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import CategoryButton from "../components/CategoryButton";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Makanan", "Minuman", "Snack"];

  const filteredFoods =
    selectedCategory === "Semua"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Menu Favorit</h2>

      <div className="mb-4">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>

      <div className="row">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default Home;