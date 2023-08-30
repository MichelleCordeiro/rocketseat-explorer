import { APIDrink } from './APIDrink.js';
// import './modal.js'

// manipulação dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
    // APIDrink.search('Mojito').then(item => console.log('APIDrink: ', item))
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@drinks-favorites:')) || [];
  }

  save() {
    localStorage.setItem('@drinks-favorites:', JSON.stringify(this.entries));
  }

  async add(drinkname) {
    drinkname = drinkname.charAt(0).toUpperCase() + drinkname.slice(1);

    try {
      const drinkExists = this.entries.find(entry => {
        let drinkHas = entry.name;

        // lógica diferente pq é trazido da API o primeiro resultado contendo a palavra buscada, e não a palvra exata
        if (drinkHas === drinkname || drinkHas.includes(drinkname)) {
          return true;
        }
        return false;
      });

      if (drinkExists) {
        throw new Error('Drink já cadastrado!');
      }

      const drinksearch = await APIDrink.search(drinkname);

      if (drinksearch === undefined) {
        throw new Error('Drink não encontrado!');
      }

      this.entries = [drinksearch, ...this.entries];
      this.update();
      this.save();

    } catch (error) {
      alert(error.message);
    }
  }

  delete(drink) {
    const filteredEntries = this.entries.filter(entry => entry.name !== drink.name);
    // filter só retorna se for true, retornará users diferentes ao clicado p excluir

    this.entries = filteredEntries;
    this.update();
    this.save();
  }
}

// exibição dos dados
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);
    this.tbody = this.root.querySelector('table tbody');

    this.update();
    this.onadd();
  }

  noFavs() {
    const emptyDrinks = document.querySelector('#noDrinks');

    if (this.entries.length > 0) {
      emptyDrinks.style.display = 'none';
    } else {
      emptyDrinks.style.display = 'grid';
    }
  }

  updateModal() {
    const ingredSize = document.querySelectorAll('.container-images div');

    if (ingredSize.length != 0) {
      document.querySelectorAll('.container-images div').forEach(image => {
        image.remove();
      });
    }

    const drinkIndex = this.rowIndex - 1;
    const drinkRow = document.querySelectorAll('.container-drink')[drinkIndex];
    document.querySelector('.modal h2').textContent = drinkRow.querySelector('p').innerHTML;
    document.querySelector('.modal-instruct p').textContent =
      drinkRow.querySelector('.instructions').innerHTML;

    const ingredientsString = drinkRow.querySelector('.ingredients').innerHTML;
    const ingredients = ingredientsString.split(' + ');

    ingredients.forEach(ingred => {
      // this.createIngredientModal()

      const img = document.createElement('div');
      img.innerHTML = `
        <img 
          class="modal-img"
          src="https://www.thecocktaildb.com/images/ingredients/${ingred}.png" 
          alt="Imagem de ${ingred}"
        >
      `;

      document.querySelector('.container-images').appendChild(img);
    });
  }

  update() {
    this.removeTrs();
    const clearInput = document.querySelector('#input-search');
    clearInput.value = '';

    this.noFavs();

    this.entries.forEach(drink => {
      const row = this.createRow();
      const ingredients = [
        drink.ingredient1,
        drink.ingredient2,
        drink.ingredient3,
        drink.ingredient4,
        drink.ingredient5,
        drink.ingredient6
      ];
      let ingredientsPresents = ingredients.filter(item => item !== null);
      ingredientsPresents = ingredientsPresents.join(' + ');

      row.querySelector('.drink img').src = drink.image;
      row.querySelector('.drink img').alt = `Imagem de ${drink.name}`;
      row.querySelector('.drink a').href = `https://github.com/${drink.name}`;
      row.querySelector('.drink a').href = `#`;
      row.querySelector('.drink .container-drink p').textContent = drink.name;
      row.querySelector('.drink .container-drink .ingredients').textContent = ingredientsPresents;
      row.querySelector('.drink .container-drink .instructions').textContent = drink.instruction;
      row.querySelector('.category').textContent = drink.category;
      row.querySelector('.served_in').textContent = drink.served_in;

      row.querySelector('.remove-btn').onclick = () => {
        const isOK = confirm('Tem certeza que deseja remover esse drink?');

        if (isOK) {
          this.delete(drink);
        }
      };

      this.tbody.append(row);
    });
  }

  onadd() {
    const addButton = this.root.querySelector('#btn-fav');
    const inputSearch = this.root.querySelector('#input-search');

    addButton.onclick = () => {
      const { value } = inputSearch;
      this.add(value);
    };

    inputSearch.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        const { value } = inputSearch;
        this.add(value);
      }
    });
  }

  createRow() {
    // precisa criar o tr pela dom
    const tr = document.createElement('tr');
    tr.addEventListener('click', this.updateModal);

    tr.innerHTML = `
      <td class="drink">
        <a type="button" id="openModal" data-toggle="modal" data-target="#myModal">
          <div class="container-img">
            <img src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg" alt="Foto de um Morito">
          </div>
          <div class="container-drink">
            <p>Mojito</p>
            <span class="ingredients">Light run, juice of 1 lime</span>
            <span class="instructions notdisplay">Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes.</span>
          </div>
        </a>
        </td>
      <td class="category">33</td>
      <td class="served_in">333</td>
      <td class="remove">
        <button class="remove-btn">
          <img src="./assets/not_drink.svg" alt="Desenho proibido drink" width="20" height="20">
        </button>
      </td>
    `;

    return tr;
  }

  removeTrs() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove();
    });
  }
}
