function FoodCard({ food }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={food.image}
          alt={food.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <span className="badge bg-warning text-dark mb-2">
            {food.category}
          </span>

          <h5>{food.name}</h5>

          <p className="fw-bold text-success">
            {formatPrice(food.price)}
          </p>

          <button className="btn btn-warning w-100">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;