function Banner() {
  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">
            Nikmati Hidangan Favoritmu
          </h1>

          <p className="text-muted mt-3">
            Temukan berbagai pilihan makanan dan minuman favorit
            dengan proses pemesanan yang cepat, mudah, dan nyaman.
          </p>

          <button className="btn btn-warning me-2">
            Lihat Menu
          </button>

          <button className="btn btn-outline-dark">
            Promo Hari Ini
          </button>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700"
            alt="Banner"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;