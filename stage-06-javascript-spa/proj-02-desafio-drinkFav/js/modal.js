export class Modal {
  static createModal() {
    let modal = document.querySelector("#myModal");
    let clickDrink = document.querySelector("#openModal");
    let span = document.getElementsByClassName(".close")[0];
    console.log(span)

    clickDrink.onclick = (e, item) => {
      let elementId = e.target.rowIndex
      console.log('elementId::::: ', elementId);
      console.log("item.closest('tr').rowIndex::::: ", item.closest('tr').rowIndex);

      alert(elementId)
      
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