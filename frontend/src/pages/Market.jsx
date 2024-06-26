import ListGroup from "../components/ListGroup";
import FoodItemCard from "../components/FoodItemCard";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api/items";

export default function Market() {
  const [filter, setFilter] = useState(null);
  let oldcategories = ["Fruit", "Vegetable", "Baked Goods", "Meats", "Dairy"];

  const { data: items, itemsError } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
  });

  const { data: categories, catsError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  console.log(items);
  console.log({ categories });
  console.log(oldcategories);
  //console.log(items.category);
  //<FoodItem filter={filter} />
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-sm-2">
            <ListGroup
              heading="Categories"
              items={oldcategories}
              filterState={filter}
              setFilterState={setFilter}
            />
            <div class="vr"></div>
          </div>
          <div className="col col-sm-10">
            <div className="row row-cols-4">
              {items?.map((item) =>
                item.category.toLowerCase() == filter || filter == null ? (
                  <FoodItemCard
                    foodName={item.itemName}
                    price={item.price}
                    category={item.category}
                    filter={filter}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
