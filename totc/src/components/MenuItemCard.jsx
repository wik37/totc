export default function MenuItemCard({
  foodName,
  description,
  price,
  category,
  filter,
}) {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "30rem" }}>
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
    </>
  );
}
