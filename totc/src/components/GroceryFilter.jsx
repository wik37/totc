import { useState } from "react";

function GrocerFilter() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </>
  );
}

export default GrocerFilter;
