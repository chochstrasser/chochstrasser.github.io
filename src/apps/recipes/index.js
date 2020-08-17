import React from "react";

const getRecipes = async (ingredients, searchWord, page) => {
  const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${searchWord}&p=${page}`;
  const response = await fetch(url);
  console.log("response", response);
  // .then((response) => response.json()) // one extra step
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => console.error(error));
};

const Recipes = () => {
  const onClick = async () => {
    const ingredients = "onions,beef";
    const searchWord = "hamburger";
    const page = 1;
    const response = await getRecipes(ingredients, searchWord, page);
    console.log("response", response);
  };

  return (
    <>
      <h1>Hello puppy recipes</h1>
      <input type="text" placeholder="Enter search text" />
      <button onClick={onClick}>Search</button>
    </>
  );
};

export default Recipes;
