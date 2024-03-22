import ListGroup from "../components/ListGroup";
import FoodItem from "../components/FoodItem";
import GrocerFilter from "../components/GroceryFilter";
import React, { useState } from "react";

export default function Market() {
  const [filter, setFilter] = useState(null);
  let categories = ["Fruit", "Vegetables", "Baked Goods", "Meats", "Dairy"];
  return (
    <>
      <h1>Market</h1>
      <div className="container">
        <div className="row">
          <div className="col col-sm-2">
            <ListGroup
              heading="Categories"
              items={categories}
              filterState={filter}
              setFilterState={setFilter}
            />
            <div class="vr"></div>
          </div>
          <div className="col col-sm-10">
            <div className="row row-cols-4">
              <FoodItem filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
