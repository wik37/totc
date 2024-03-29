function FoodItemCard({ key, foodName, description, price, category, filter }) {
  return (
    <>
      {
        <div className="card" style={{ width: "15rem" }}>
          <img
            src="../images/placeholder.png"
            className="card-img-top"
            width="100px"
            height="100px"
            alt=""
          />
          <div className="card-body">
            {}
            <h5 className="card-title">{foodName}</h5>
            <div className="container">
              {" "}
              <div className="row">
                <div className="col col-sm-4">
                  <p className="card-text">${price}</p>
                </div>
                <div className="col col-sm-5">
                  <form className="food-card-form">
                    <input
                      type="number"
                      id="fquantity"
                      name="fquantity"
                      style={{ width: "4rem" }}
                    ></input>{" "}
                  </form>
                </div>
                <div className="col col-sm-3">
                  <a href="#" className="btn btn-primary">
                    +
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
