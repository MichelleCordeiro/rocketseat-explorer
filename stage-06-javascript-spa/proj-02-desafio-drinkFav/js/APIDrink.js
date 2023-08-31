export class APIDrink {
  static search(drinkname) {
    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkname}`;

    return fetch(endpoint)
      .then(data => data.json())
      .then(data => {
        console.log("data:::: ", data)
        
        if(!data.drinks || data.drinks.length === 0) {
          throw new Error('Drink não encontrado!');
        }

        return data.drinks[0]
      })

      .then(data => ({
        image: data.strDrinkThumb,
        name: data.strDrink,
        category: data.strCategory,
        served_in: data.strGlass,
        instruction: data.strInstructions,
        ingredient1: data.strIngredient1,
        ingredient2: data.strIngredient2,
        ingredient3: data.strIngredient3,
        ingredient4: data.strIngredient4,
        ingredient5: data.strIngredient5,
        ingredient6: data.strIngredient6
      }));
  }
}
