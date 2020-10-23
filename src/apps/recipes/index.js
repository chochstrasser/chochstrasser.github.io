import { RAPID_API } from '../../const/ids';

const getRecipes = async (ingredients, searchWord, page) => {
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&from=0&sizes=20', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': RAPID_API.tasty,
    },
  });
  console.log('response', response);
};

const Recipes = () => {
  const onClick = async () => {
    const ingredients = 'onions,beef';
    const searchWord = 'hamburger';
    const page = 1;
    const response = await getRecipes(ingredients, searchWord, page);
    console.log('response', response);
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
