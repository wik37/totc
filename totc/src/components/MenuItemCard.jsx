export default function MenuItemCard({
  foodName,
  description,
  price,
  category,
  filter,
}) {
  return (
    <>
      {filter == category ? (
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            {}
            <h5 className="card-title">{foodName}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
