function FoodItemCard({ foodName, description, price, category, filter }) {
  return (
    <>
      {
        <div className="card" style={{ width: "15rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            {}
            <h5 className="card-title">{foodName}</h5>
            <p className="card-text">{description}</p>
            <div className="container">
              {" "}
              <div className="row">
                <div className="col col-sm-6">
                  <form className="food-card-form">
                    <input
                      type="text"
                      id="fquantity"
                      name="fquantity"
                      style={{ width: "5rem" }}
                    ></input>{" "}
                  </form>
                </div>
                <div className="col col-sm-6">
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default FoodItemCard;
