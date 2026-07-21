function CategoryButton({ category, active, onClick }) {
  return (
    <button
      className={`btn me-2 mb-3 ${
        active ? "btn-warning" : "btn-outline-warning"
      }`}
      onClick={onClick}
    >
      {category}
    </button>
  );
}

export default CategoryButton;