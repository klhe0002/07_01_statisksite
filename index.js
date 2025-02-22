const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`) /* laver en fetch(asynkron metode) og linker til API(json data)*/
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(categories) {
  const markup = categories
    .map(
      //løbe mit array igennem
      (element) => `
        <a href="produktliste.html?category=${element.category}" class="produkter"> ${element.category}</a>`
    )
    .join("");

  listContainer.innerHTML = markup;
}
