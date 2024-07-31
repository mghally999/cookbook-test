export const recipes = [
  {
    id: 1,
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry with a rich blend of spices.",
    image:
      "https://plus.unsplash.com/premium_photo-1661780307431-c21fd96e4129?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Chicken", "Curry Sauce", "Rice"],
  },
  {
    id: 2,
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with fresh toppings and a soft bun.",
    image:
      "https://media.istockphoto.com/id/1500141300/photo/bbq-classic-burger-against-fiery-flames-vibrant-food-black-background.jpg?s=2048x2048&w=is&k=20&c=yQKeEd1EpoyNflsNTmBhqaQzvOT90ck304w2iLev3Zs=",
    ingredients: ["Bun", "Beef Patty", "Lettuce", "Cheese"],
  },
  {
    id: 3,
    author: "Sara",
    name: "Pasta",
    description: "Creamy pasta with garlic and parmesan cheese.",
    image:
      "https://media.istockphoto.com/id/1353794176/photo/healthy-pasta-salad-plate-on-black-background.jpg?s=2048x2048&w=is&k=20&c=-JpJo4b58z9w5kMocOX7a_SFjAAGAk_uekxhwi-C5gA=",
    ingredients: ["Pasta", "Garlic", "Parmesan", "Cream"],
  },
  {
    id: 4,
    author: "Liam",
    name: "Pizza",
    description: "Cheesy pizza with tomato sauce, fresh basil, and olive oil.",
    image:
      "https://media.istockphoto.com/id/1703810986/photo/pizza-margherita-with-pelati-sauce-mozzarella-tomatoes-and-basil.jpg?s=2048x2048&w=is&k=20&c=0dN5lNZAxdJGAs-dlJfcYPHA0HYDH9WhUmfwwk4RoTw=",
    ingredients: ["Dough", "Tomato Sauce", "Cheese", "Basil"],
  },
  {
    id: 5,
    author: "Emma",
    name: "Salad",
    description:
      "A fresh and healthy salad with mixed greens and a light vinaigrette.",
    image:
      "https://media.istockphoto.com/id/1648578194/photo/chicken-breast-salad.jpg?s=2048x2048&w=is&k=20&c=gwM6Bq9uspmP9lTUnGjRONQa2ri8GE3FiM7XYDspO5Y=",
    ingredients: [
      "Mixed Greens",
      "Tomatoes",
      "Cucumbers",
      "Olive Oil",
      "Vinaigrette",
    ],
  },
];

export const fetchRecipes = async () => {
  return recipes;
};
