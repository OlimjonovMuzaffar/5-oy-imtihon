export let searchFunc = ()=>{
    const searchName = document.getElementById("searchName");

    searchName.addEventListener("input", () => {
      const inputValue = searchName.value.toLowerCase().trim();
      console.log(inputValue);
      const cardsItem = document.querySelectorAll(".cards__item");
      const cardsTitle = document.querySelectorAll(".cards__title");
      cardsTitle.forEach((title, i) => {
        if (title.textContent.toLowerCase().includes(inputValue)) {
          cardsItem[i].style.display = "block";
        } else {
          cardsItem[i].style.display = "none";
        }
      });
    });
}

