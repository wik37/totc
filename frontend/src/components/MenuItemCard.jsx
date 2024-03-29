export default function MenuItemCard({
  foodName,
  description,
  price,
  category,
  filter,
}) {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "80rem" }}>
        <div className="row">
          <div className="col col-sm-6">
            <img
              src="../images/placeholder.png"
              alt=""
              width="500rem"
              height="200rem"
            />
          </div>
          <div className="col col-sm-6">
            <div className="card-body">
              {}
              <h5 className="card-title">{foodName}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">
                +
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
