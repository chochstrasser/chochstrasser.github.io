import React from "react";

const getRecipes = async (ingredients, searchWord, page) => {
  // const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${searchWord}&p=${page}`;
  // const response = await fetch(url);
  // console.log("response", response);

  const response = await fetch(
    "https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&from=0&sizes=20",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "e5e0cef0c0msh4fa5d0686550972p1a1b84jsnf514703be724",
      },
    }
  );
  console.log("response", response);
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
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
