import ListGroup from "../components/ListGroup";
import MenuItem from "../components/MenuItem";
import React, { useState } from "react";

export default function Menu() {
  const [filter, setFilter] = useState(null);
  let categories = ["Appetizers", "Lunch", "Fish", "Entree", "Dessert"];
  return (
    <>
      <h1>Menu</h1>
      <div className="container">
        <div className="row">
          <div className="col col-sm-2">
            <ListGroup
              heading="Menu"
              items={categories}
              filterState={filter}
              setFilterState={setFilter}
            />
            <div class="vr"></div>
          </div>
          <div className="col col-sm-10">
            <MenuItem filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
}
