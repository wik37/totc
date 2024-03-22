import MenuItemCard from "./MenuItemCard";

export default function MenuItem({ filter }) {
  let foods = [
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Appetizers",
      foodName: "AppetizerTest",
      description: "It's a banana",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Entree",
      foodName: "EntreeTest",
      description: "It's some Pasta",
      price: 5,
    },
    {
      category: "Lunch",
      foodName: "LunchTest",
      description: "It's some Sandwich",
      price: 5,
    },
    {
      category: "Lunch",
      foodName: "LunchTest",
      description: "It's some Sandwich",
      price: 5,
    },
    {
      category: "Lunch",
      foodName: "LunchTest",
      description: "It's some Sandwich",
      price: 5,
    },
    {
      category: "Lunch",
      foodName: "LunchTest",
      description: "It's some Sandwich",
      price: 5,
    },
    {
      category: "Lunch",
      foodName: "LunchTest",
      description: "It's some Sandwich",
      price: 5,
    },
    {
      category: "Lunch",
      foodName: "LunchTest",
      description: "It's some Sandwich",
      price: 5,
    },
  ];

  return (
    <>
      {foods.map((food) =>
        food.category == filter || filter == null ? (
          <div className="col" key={food.foodName}>
            <MenuItemCard
              foodName={food.foodName}
              description={food.description}
              price={food.price}
              category={food.category}
            />
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}
