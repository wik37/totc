import FoodItemCard from "./FoodItemCard";

export default function FoodItem({ filter }) {
  let foods = [
    {
      category: "Fruit",
      foodName: "Banana",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Fruit",
      foodName: "Apple",
      description: "It's an apple",
      price: 8,
    },
    {
      category: "Fruit",
      foodName: "Orange",
      description: "It's an orange",
      price: 10,
    },
    {
      category: "Fruit",
      foodName: "Mango",
      description: "It's a mango",
      price: 12,
    },
    {
      category: "Fruit",
      foodName: "Pineapple",
      description: "It's a pineapple",
      price: 23,
    },
    {
      category: "Fruit",
      foodName: "Pear",
      description: "It's a pear",
      price: 7,
    },
    {
      category: "Vegetables",
      foodName: "Broccoli",
      description: "It's Broccoli",
      price: 4,
    },
    {
      category: "Vegetables",
      foodName: "Onion",
      description: "It's an Onion",
      price: 3,
    },
    {
      category: "Vegetables",
      foodName: "Zucchini",
      description: "It's a Zucchini",
      price: 7,
    },
  ];

  return (
    <>
      {foods.map((food) =>
        food.category == filter ? (
          <div className="col" key={food.foodName}>
            <FoodItemCard
              foodName={food.foodName}
              description={food.description}
              price={food.price}
              category={food.category}
              filter={filter}
            />
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}
