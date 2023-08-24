export class Modal {
  static createModal() {
    let modal = document.querySelector("#myModal");
    let clickDrink = document.querySelector("#openModal");
    let span = document.getElementsByClassName(".close")[0];
    console.log(span)

    clickDrink.onclick = () => {
      modal.display.property = "block"
    }

    span.onclick = () => {
      modal.display.property = 'none';
    }

    window.onclick = (event) =>  {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}