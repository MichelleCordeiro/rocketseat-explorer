export class Modal {
  displayModal() {
    const modal = document.querySelector('#myModal');
    const span = document.getElementsByClassName('.close')[0];
    let drinkClicked = document.querySelector('#openModal');

    drinkClicked.onclick = (e, item) => {
      modal.display.property = 'block';
    };

    span.onclick = () => {
      console.log('entrou no click X ');

      modal.display.property = 'none';
      this.removeIngredients();
    };

    window.onclick = event => {
      console.log('entrou no click fora');
      if (event.target == modal) {
        modal.style.display = 'none';
        this.removeIngredients();
      }
    };
  }
}
